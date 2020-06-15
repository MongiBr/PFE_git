import { PubSub } from 'graphql-yoga';

import user from './user';
import message from './message';
import signal from './signal';
import portfolio from './portfolio';
import loaders from './loaders';


const merge = require('lodash/merge');

const pubsub = new PubSub();

const resolvers = merge(
  {},
  user.resolvers,
  message.resolvers,
  signal.resolvers,
  portfolio.resolvers
);

const typeDefs = [
  user.typeDefs,
  message.typeDefs,
  signal.typeDefs,
  portfolio.typeDefs
].join(' ');

const models = {
  user: user.model,
  message: message.model,
  signal: signal.model
};

module.exports = {
  typeDefs,
  resolvers,
  context: req => (
    {
      models,
      pubsub,
      loaders: loaders(),
      ...req
    }
  )
};
