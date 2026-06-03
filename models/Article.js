const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  content:    { type: String, required: true },
  author:     { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // links to User
  authorName: { type: String },           // stores the username directly for easy display
  status:     { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending'                    // every new article starts as pending
  }
}, { timestamps: true }); // automatically adds createdAt and updatedAt fields

module.exports = mongoose.model('Article', ArticleSchema);