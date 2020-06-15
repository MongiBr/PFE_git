const mongoose = require('mongoose');

const signalSchema = new mongoose.Schema({
  name: { type: String },
  symbol: { type: String },
  cryptoId: { type: String },
  action: { type: String },
  actionPrice: { type: Number },
  takeProfit: { type: Number },
  stopLoss: { type: Number },
  closedAt: { type: Number },
  tradeOpened: { type: Date },
  tradeClosed: { type: Date },
  state: { type: String }
});

module.exports = mongoose.model('signal', signalSchema);
