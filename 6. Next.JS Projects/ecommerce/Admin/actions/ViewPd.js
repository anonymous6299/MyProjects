"use server"
import ConnectDB from "@/database/Connect"
import Book from "../database/Schemas/Book"


const ViewPd = async () => {
    try {
        await ConnectDB();
        const data = await Book.find({}).lean();
        data.forEach((item) => {
            const id = item._id;
            item._id = id.toString();
        })
        return data;
    } catch (error) {
        return 0;
    }
}

export default ViewPd