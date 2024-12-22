const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  phone: String,
  password: String,
  SavedAddress: [
    {
      type: String,
    }
  ],
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ],
  returns: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ],
});


mongoose.models = {}
const User = mongoose.model('User',userSchema);
module.exports = User;