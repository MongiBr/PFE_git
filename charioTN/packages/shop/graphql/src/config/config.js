const RateLimit = require("express-rate-limit");

const { NODE_ENV, DATABASE_URI, SESSION_SECRET, PORT } = process.env;

const CONFIG = {
  SESSION_SECRET: SESSION_SECRET || "thisismyapplicationsecretkey",
  DATABASE_URI:
    DATABASE_URI ||
    "mongodb+srv://mongi_berrima:123@cluster0-rgarr.mongodb.net/Cluster0?retryWrites=true&w=majority",
  limiter: new RateLimit({
    windowMs: 15 * 60 * 1000, // 1 minute
    max: 100, // limit each IP to 100 requests per windowMs
    delayMs: 0, // disable delaying - full speed until the max limit is reached
  }),
  options: {
    port: PORT || 5000,
    endpoint: "/api",
    subscriptions: "/subscriptions",
    // disable playground in production
    playground: NODE_ENV === "development" ? "/playground" : false,
  },
};

module.exports = { ...CONFIG };
