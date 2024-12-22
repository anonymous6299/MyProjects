const mongoose = require('mongoose');


const ConnectDB = async() => {
    await mongoose.connect('mongodb://localhost:27017/Contactainer');
    console.log("Connected to MongoDB")
}
export default ConnectDB