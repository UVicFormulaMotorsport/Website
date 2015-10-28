var mongoose = require('mongoose');

var SystemSchema = new mongoose.Schema({
      name:     { type: String, required: true, index: { unique: true } },
      lead:     { type: mongoose.Schema.ObjectId, ref: 'User', required: true, index: true }
});

module.exports = mongoose.model('System', SystemSchema);
