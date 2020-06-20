const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto'); // Built in to node
const { promisify } = require('util'); // Built in to node

const { transport, makeANiceEMail } = require('../mail');

const stripe = require('../stripe');

const mutations = {


  async signup(parent, args, ctx, info) {
      
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })

    return {
      token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
      user,
    }
  },

  async login(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
      user,
    }
  },
    async createItem(parent, args, ctx, info) {
        //check if they are log in
        if (!ctx.request.userId) {
            throw new Error('You need to be logged in');
        }
        //check if the user is a seller
        const requestingUserIsSeller = await ctx.db.exists.User({
            id: userId,
            role: 'SELLER',
        })
        if(requestingUserIsSeller) {
            const item = await ctx.db.mutation.createItem(
                {
                    data: {
                        // this is how you create relationships in prisma
                        user: {
                            connect: {
                                id: ctx.request.userId
                            }
                        },
                        ...args
                    }
                },
                info
            );
    
            return item;
        } else {
            
        }
        throw new Error('You dont have permission to create an item');
    },
    updateItem(parent, args, ctx, info) {
        //check if they owns the item
        const ownsItem = item.user.id === ctx.request.userId;
        if (!ownsItem) {
            throw new Error('You have to own the item to update it');
        }
        // take a copy of the update object
        const updates = { ...args };
        delete updates.id;

        return ctx.db.mutation.updateItem(
            {
                data: updates,
                where: {
                    id: args.id
                }
            },
            info
        );
    },
    async deleteItem(parent, args, ctx, info) {
        const where = { id: args.id };

        // 1. Find the item
        const item = await ctx.db.query.item(
            { where },
            `{
                id
                title,
                user { id }
            }`
        );

        // 2. Check if they own that item
        const ownsItem = item.user.id === ctx.request.userId;
    
        if (!ownsItem) {
            throw new Error('You dont have permission to remove this item');
        }

        // 3. Delete it!
        return ctx.db.mutation.deleteItem({ where }, info);
    },
    /*async signup(parent, args, ctx, info) {
        args.email = args.email.toLowerCase();
        const password = await bcrypt.hash(args.password, 10);

        // 1. create the user in the apollo db
        const user = await ctx.db.mutation.createUser(
            {
                data: {
                    ...args,
                    password,
                    role:"USER"
                }
            },
            info
        );

        // 2. create the JWT token
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

        // 3. set the jwt as a cookie in the response
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
        });

        return user;
    },
    async signin(parent, { email, password }, ctx, info) {
        // 1. check is there is a user with that email
        const user = await ctx.db.query.user({ where: { email: email } });
        if (!user) {
            throw new Error(`No user found for this email: ${email}`);
        }

        // 2. check if password is correct
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error('Invalid password');
        }

        // 3. generate jwt token
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

        // 4. set the cookie with the token
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
        });

        // 5. return the user
        return user;
    },
    logout(parent, args, ctx, info) {
        ctx.response.clearCookie('token');
        return {
            message: 'Logged out'
        };
    },*/
    async requestReset(parent, args, ctx, info) {
        // 1. check that email belongs to an existing user
        const user = await ctx.db.query.user({ where: { email: args.email } });

        if (!user) {
            throw new Error(`No user found for this email : ${args.email}`);
        }

        // 2. Set reset toket and expire
        const randomBytesPromisified = promisify(randomBytes);
        const resetToken = (await randomBytesPromisified(20)).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; // 1h
        const res = await ctx.db.mutation.updateUser({
            where: { email: args.email },
            data: {
                resetToken,
                resetTokenExpiry
            }
        });

        // 3. Email them the reset token
        const mainRes = await transport.sendMail({
            from: 'essayes.omar@outlook.com',
            to: user.email,
            subject: 'Password reset token',
            html: makeANiceEMail(
                `Your password reset token is here \n\n
                <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click here to reset</a>`
            )
        });

        // 4. Return the message
        return {
            message: 'We have sent you an email to rest your password'
        };
    },
    async resetPassword(parent, args, ctx, info) {
        // 1. check if the passwords match
        if (args.password !== args.confirmPassword) {
            throw new Error('Password does not match');
        }

        // 2. check if it is a legit reset token
        // 3. check if it is expired
        const [user] = await ctx.db.query.users({
            where: {
                resetToken: args.resetToken,
                resetTokenExpiry_gte: Date.now() - 3600000
            }
        });

        if (!user) {
            throw new Error('Token invalid or expired!');
        }

        // 4. Hash their password
        const password = await bcrypt.hash(args.password, 10);

        // 5. Save the new password and remove token fields
        const updatedUser = await ctx.db.mutation.updateUser({
            where: {
                email: user.email
            },
            data: {
                password,
                resetToken: null,
                resetTokenExpiry: null
            }
        });

        // 6. Generate jwt
        const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);

        // 7. Set the jwt cookie
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
        });

        // 8. Return the updated user
        return updatedUser;
        
    },
    async updateRole(parent, args, ctx, info) {
        // 1. check if the user logged in
        if (!ctx.request.userId) {
            throw new Error('You need to be logged in to perform this action');
        }

        // 2. query the current user
        const currentUser = await ctx.db.query.user(
            {
                where: {
                    id: ctx.request.userId
                }
            },
            info
        );

        // 3. check if they are an admin
        const requestingUserIsAdmin = await ctx.db.exists.User({
            id: userId,
            role: 'ADMIN',
          })
        if(requestingUserIsAdmin) {
            // user is an Admin.
            return ctx.db.mutation.updateUser(
                {
                    data: {
                        role: {
                            set: args.role
                        }
                    },
                    where: {
                        id: args.userId
                    }
                },
                info
            );         
         } else {
            // user is not an admin
            throw new Error('You need to be an admin to perform this action');
          }
        
    },
    /*async addToCart(parent, args, ctx, info) {
        // 1. check if the user is logged in
        const { userId } = ctx.request;
        if (!userId) {
            throw new Error('You need to be logged in');
        }
        // 2. Query users current cart
        const [existingCartItem] = await ctx.db.query.cartItems({
            where: {
                user: { id: userId },
                item: { id: args.id }
            }
        });
        // 3. Check if the item is already in the cart and increment by 1 if it is
        if (existingCartItem) {
            console.log('This item is already in the cart');
            return ctx.db.mutation.updateCartItem(
                {
                    where: { id: existingCartItem.id },
                    data: { quantity: existingCartItem.quantity + 1 }
                },
                info
            );
        }
        // 4. If the item is not in the cart create a fresh cart item for that user
        return ctx.db.mutation.createCartItem(
            {
                data: {
                    user: {
                        connect: { id: userId }
                    },
                    item: {
                        connect: { id: args.id }
                    }
                }
            },
            info
        );
    },
    async removeFromCart(parent, args, ctx, info) {
        // 1. Find the cart item
        const cartItem = await ctx.db.query.cartItem(
            {
                where: {
                    id: args.id
                }
            },
            `{id, user { id }}`
        );
        if (!cartItem) throw new Error('No CartItem found');
        // 2. Make user they own the cart item
        if (cartItem.user.id !== ctx.request.userId) {
            throw new Error('This item is not in your cart');
        }
        // 3. Delete the item from the cart
        return ctx.db.mutation.deleteCartItem(
            {
                where: {
                    id: args.id
                }
            },
            info
        );
    },*/
    /*async createOrder(parent, args, ctx, info) {
        // 1. query the current user and make sure they are signed in
        const { userId } = ctx.request;
        if (!userId) {
            throw new Error('You need to log in to perfrom this action');
        }

        const user = await ctx.db.query.user(
            {
                where: {
                    id: userId
                }
            },
            `{
                id
                name
                email
                cart {
                    id
                    quantity
                    item {
                        title
                        price
                        id
                        description
                        image
                        largeImage
                    }
                }
            }`
        );

        // 2. Recalculate the total of the price
        const amount = user.cart.reduce((tally, cartItem) => tally + cartItem.item.price * cartItem.quantity, 0);

        // 3. Create the stripe charge
        const charge = await stripe.charges.create({
            amount,
            currency: 'TND',
            source: args.token
        });

        // 4. Convert the CartItems to OrderItems
        const orderItems = user.cart.map(cartItem => {
            const orderItem = {
                ...cartItem.item,
                quantity: cartItem.quantity,
                user: {
                    connect: {
                        id: userId
                    }
                }
            };
            delete orderItem.id;
            return orderItem;
        });

        // 5. Create the order
        const order = await ctx.db.mutation.createOrder({
            data: {
                total: charge.amount,
                charge: charge.id,
                items: {
                    create: orderItems
                },
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });

        // 6. Clean up - clear the users cart, delete cartItems
        const cartItemIds = user.cart.map(cartItem => cartItem.id);
        await ctx.db.mutation.deleteManyCartItems({
            where: {
                id_in: cartItemIds
            }
        });

        // 7. Return the order to the client
        return order;
    }*/
};
module.exports = mutations;
