const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  avatar: { type: String },
  firstName: { type: String },
  LastName: { type: String },
  location: { type: String },
  currency: { type: String },
  // Don't return password unless specified to
  password: { type: String, select: false }
});

module.exports = mongoose.model('user', userSchema);
