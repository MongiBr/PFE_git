import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';


const signal = async (_, args, ctx) => {
  const _signal = await ctx.models.signal
    .findById(args._id)
    .exec();

  if (!_signal) {
    throw new Error('signal does not exist');
  }

  return _signal;
};

const allSignals = async (_, __, ctx) => {
  try {
    const _signal = await ctx.models.signal.find({}).exec();
    return _signal;
  } catch (err) {
    throw new Error(err);
  }
};

const newSignal = async (_, args, ctx) => {
  try {
    const _signal = await ctx.models.signal.create(args.input);
    return _signal;
  } catch (err) {
    throw new Error(err);
  }
};

const removeSignal = async (_, args, ctx) => {
  const _signal = await ctx.models.signal
    .findByIdAndRemove(args._id)
    .exec();

  if (!_signal) {
    throw new Error('No resource');
  }
  return _signal;
};

/*eslint-disable */
module.exports = {
  Query: {
    signal,
    allSignals
  },
  Mutation: {
    newSignal,
    removeSignal
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
}
