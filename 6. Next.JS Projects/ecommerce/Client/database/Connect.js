"use server"
const mongoose = require('mongoose');

const ConnectDB = async () => {
    if (!(mongoose.connection.readyState === 1)) {
        await mongoose.connect(process.env.CONN_STR);
        console.log("Mongoose Connected");
        return;
    }

}

export default ConnectDB