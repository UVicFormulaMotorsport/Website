var mongoose = require('mongoose');

var SectionSchema = new mongoose.Schema({
      title:    { type: String, required: true, index: { unique: true } },
      author:   { type: mongoose.Schema.ObjectId, ref: 'User', required: true, index: true },
      created:  { type: Date, required: true, index: true, default: Date.now },
      editor:   { type: mongoose.Schema.ObjectId, ref: 'User', required: false },
      edited:   { type: Date, required: false, default: Date.now },
      header:   { type: String, required: false },
      body:     { type: String, required: false },
      footer:   { type: String, required: false }
});

var model = mongoose.model('Section', SectionSchema);

module.exports = model;
