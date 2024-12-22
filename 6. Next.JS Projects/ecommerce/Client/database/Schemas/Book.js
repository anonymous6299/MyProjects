import mongoose from 'mongoose';
const { Schema } = mongoose;

const PdSchema = new Schema({
  BookName: String,
  BookDesc: String,
  BookPrice: Number,
  BookDelivery: Date,
  DeliveryCharges: Number,
  AvailQty: Number,
  ImageURL: String,
  category: String,
  OutOfStock: [{
    type:String
  }],
  Rating: Number,
});

PdSchema.pre('save', function (next) {
  if (this.BookPrice<=200){
    this.DeliveryCharges=0;
  }
  else{
    this.DeliveryCharges=20;
  }
  next(); 
});

mongoose.models = {};
const Book = mongoose.model('Book',PdSchema);
module.exports=Book;
