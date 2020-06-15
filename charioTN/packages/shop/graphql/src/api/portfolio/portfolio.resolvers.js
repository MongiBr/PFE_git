import { authenticate } from '../../utils/auth';

const userPortfolios = async (_, args, ctx) => {
  const user = authenticate(ctx);
  const _portfolio = await ctx.models.user.find({ user }).lean();

  if (!_portfolio) {
    throw new Error('portfolio does not exist');
  }

  return _portfolio;
};

const newPortfolio = async (_, args, ctx) => {
  const user = authenticate(ctx);
  const _user = await ctx.models.user.findOne({ _id: user }).lean();
  try {
    const _message = await ctx.models.message.create({ ...args, _user });
    return _message;
  } catch (err) {
    throw new Error(err);
  }
};

const removePortfolio = async (_, args, ctx) => {
  const _portfolio = await ctx.models.portfolio
    .findByIdAndRemove(args._id)
    .exec();

  if (!_portfolio) {
    throw new Error('No resource');
  }
  return _portfolio;
};

const editPortfolio = async (_, args, ctx) => {
  const _portfolio = await ctx.models.portfolio
    .findByIdAndUpdate(args._id, args.input)
    .exec();

  if (!_portfolio) {
    throw new Error('No resource');
  }

  return _portfolio;
};

/*eslint-disable */
module.exports = {
  Query: {
    userPortfolios
  },
  Mutation: {
    newPortfolio,
    removePortfolio,
    editPortfolio
  },
  Portfolio: {
    user(message, _, ctx) {
      return ctx.models.user.findById(message.user).exec()
    }
  }
}
