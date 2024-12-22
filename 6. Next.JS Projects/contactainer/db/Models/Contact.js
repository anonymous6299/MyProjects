import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
  Cname: String,
  phoneNo: String,
  SphoneNo: String,
}, {timestamps: true});

mongoose.models = {}
const Contact = mongoose.model('contacts', contactSchema);
export default Contact