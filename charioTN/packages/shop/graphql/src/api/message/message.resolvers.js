
import { authenticate } from '../../utils/auth';


const message = async (_, args, ctx) => {
  const _message = await ctx.models.message
    .findById(args._id)
    .exec();

  if (!_message) {
    throw new Error('message does not exist');
  }

  return _message;
};

const allMessages = (_, __, ctx) => ctx.models.message.find({}).exec();

const newMessage = async (_, args, ctx) => {
  const user = authenticate(ctx);
  const _user = await ctx.models.user.findOne({ _id: user }).lean();
  try {
    const _message = await ctx.models.message.create({ ...args, _user });
    ctx.pubsub.publish('commentAdded', { commentAdded: { id: 1, content: 'Hello!' } });
    return _message;
  } catch (err) {
    throw new Error(err);
  }
};

const removeMessage = async (_, args, ctx) => {
  const _message = await ctx.models.message
    .findByIdAndRemove(args._id)
    .exec();

  if (!_message) {
    throw new Error('No resource');
  }
  return _message;
};

/*eslint-disable */
module.exports = {
  Query: {
    message,
    allMessages
  },
  Mutation: {
    newMessage,
    removeMessage
  },
  Subscription: {
    messageAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('messageAdded')
    }
  },
  Message: {
    user(message, _, ctx) {
      return ctx.models.user.findById(message.user).exec()
    }
  }
}
