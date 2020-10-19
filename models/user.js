const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  profile: {
    type: {
      image: String,
      profession: String
    }
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;