"use server"
import ConnectDB from "@/database/Connect"
import Book from "../database/Schemas/Book"

const DelPd = async (id) => {
    try {
        await ConnectDB();
        await Book.findByIdAndDelete(id);
        return 1;
    } catch (error) {
        return 0;
    }
}

export default DelPd