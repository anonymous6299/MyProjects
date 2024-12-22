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
      _id:false,
      book:{type: String},
      qty:{type: Number},
      DelAddress:{type: String}
    }
  ],
  returns: [
    {
      _id:false,
      book:{type: String},
      qty:{type: Number},
      RetAddress:{type: String}
    }
  ],
});


mongoose.models = {}
const User = mongoose.model('User',userSchema);
module.exports = User;