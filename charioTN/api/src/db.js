// Connects to the remote Prisma db to query from JS

const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'https://chariotn-66b65980fd.herokuapp.com',
    debug: false
});

module.exports = db;