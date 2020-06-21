module.exports = {
  resolvers: require('./message.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('message/message.graphql'),
  model: require('./message.model')
};

