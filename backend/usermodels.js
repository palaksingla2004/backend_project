const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Map, of: Number, default: {} }
});

const Users = mongoose.model('User', userSchema);
module.exports = Users;
