const mongoose = require('mongoose');

// This is the "blueprint" for how a user looks in the database
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // must be unique
  password: { type: String, required: true },               // will be stored encrypted
  role: { type: String, enum: ['contributor', 'admin'], default: 'contributor' } // only 2 allowed values
});

module.exports = mongoose.model('User', UserSchema); // export so other files can use it