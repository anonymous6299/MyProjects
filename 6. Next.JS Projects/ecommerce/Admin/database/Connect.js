const mongoose = require('mongoose');

const ConnectDB = async() => {
    await mongoose.connect(process.env.CONN_STR);
    console.log("Mongoose Connected");
}

module.exports = ConnectDB;