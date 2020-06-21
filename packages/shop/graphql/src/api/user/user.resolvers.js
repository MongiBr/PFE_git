import UserModel from './user.model';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const signup = async (_, { email, password }, ctx) => {
  try {
    let user = await ctx.models.user.findOne({ email }).lean();

    if (user) {
      throw new Error('Email is already taken');
    }

    const _password = await bcrypt.hash(password, 10);
    user = await new UserModel({ email, password: _password }).save();

    const token = jwt.sign({ userId: user._id }, config.SESSION_SECRET);

    return { token, user };
  } catch (err) {
    throw new Error(err);
  }
};

const login = async (_, { email, password }, ctx) => {
  try {
    const user = await ctx.models.user.findOne({ email }, { password: 1 }).lean();
    if (!user) {
      throw new Error('No such user found');
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    // remove password from user object to limit scope (security)
    user.password = undefined;

    return {
      token: jwt.sign({ userId: user._id }, config.SESSION_SECRET),
      user
    };
  } catch (err) {
    throw new Error(err);
  }
};

const updateProfile = async (_, args, ctx) => {
  const _user = await ctx.models.user
    .findByIdAndUpdate(args._id, args.input)
    .exec();

  if (!_user) {
    throw new Error('No resource');
  }

  return _user;
};

/*eslint-disable */
module.exports = {
  Mutation: {
    login,
    signup,
    updateProfile
  }
};
