const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  name: { type: String },
  amount: { type: Number },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});

module.exports = mongoose.model('portfolio', portfolioSchema);
