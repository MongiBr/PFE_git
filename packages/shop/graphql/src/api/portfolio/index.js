module.exports = {
  resolvers: require('./portfolio.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('portfolio/portfolio.graphql'),
  model: require('./portfolio.model')
};

