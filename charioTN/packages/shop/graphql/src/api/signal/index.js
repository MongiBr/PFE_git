module.exports = {
  resolvers: require('./signal.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('signal/signal.graphql'),
  model: require('./signal.model')
};

