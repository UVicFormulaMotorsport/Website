var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
      username:   { type: String, required: true, index: { unique: true } },
      first_name: { type: String, required: false },
      last_name:  { type: String, required: false },
      password:   { type: String, required: true, index: true },
      email:      { type: String, required: true, index: true },
      im:         { type: String, required: false },
      system:     { type: mongoose.Schema.ObjectId, ref: 'System', required: false },
      join_date:  { type: Date, required: true, index: true, default: Date.now },
      info:       { type: String, select: false }
});

var model = mongoose.model('User', UserSchema);

module.exports = model;
