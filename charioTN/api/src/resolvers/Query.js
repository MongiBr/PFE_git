const { forwardTo } = require('prisma-binding');

const Query = {
        async user ({ user: { id } }, args, ctx, info){
          return ctx.db.query.user({ where: { id } }, info)
        },
      
      
    //items: forwardTo('db'),
    //item: forwardTo('db'),
    //itemsConnection: forwardTo('db'),
    me(parent, args, ctx, info) {
        // check if there is a current user ID

        if (!ctx.request.userId) {
            return null;
        }
        return ctx.db.query.user(
            {
                where: { id: ctx.request.userId }
            },
            info
        );
    },
    async users(parent, args, ctx, info) {
        // 1. Check if logged in
        if (!ctx.request.userId) {
            throw new Error('You must be logged in');
        }

        // 2. Check if user has permission to query all users
        const requestingUserIsAdmin = await ctx.db.exists.User({
            id: userId,
            role: "ADMIN",
        })
        if(!requestingUserIsAdmin) {
            throw new Error('You must be an admin to query all the users');
          }
        // 3. Return all the users
        return ctx.db.query.users({}, info);
    },
    async order(parent, args, ctx, info) {
        // 1. Make sure they are logged in
        if (!ctx.request.userId) {
            throw new Error('You must be logged in');
        }

        // 2. Query the current order
        const order = await ctx.db.query.order({
            where: {
                id: args.id
            }
        }, info);

        // 3. Check if they have permissions
        const ownsOrder = order.user.id === ctx.request.userId;
        const requestingUserIsAdmin = await ctx.db.exists.User({
            id: userId,
            role: 'ADMIN',
        })
        if (!(ownsOrder || requestingUserIsAdmin)) {
            throw new Error('You have to be an admin or the owner of this order to perfrom this action');
        }
        // 4. Return the order
        return order;
    },
    /*async orders(parent, args, ctx, info) {
        // 1. Check if they are logged in
        if (!ctx.request.userId) {
            throw new Error('You must be logged in');
        }

        // 2. check if they can query this user's orders
        const ownsOrder = order.user.id === ctx.request.userId;
        const requestingUserIsAdmin = await ctx.db.exists.User({
            id: userId,
            role: 'ADMIN',
        })
        if (!(ownsOrder || requestingUserIsAdmin)) {
            throw new Error('You have to be an admin or the owner of this orders to perfrom this action');
        }
        // 2. Return all the orders
        const orders = await ctx.db.query.orders({
            where: {
                user: {
                    id: ctx.request.userId
                }
            }
        }, info);
        

        return orders;
    },*/
};

module.exports = Query;
