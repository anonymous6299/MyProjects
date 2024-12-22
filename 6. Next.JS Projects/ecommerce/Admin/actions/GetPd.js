"use server"
import ConnectDB from "@/database/Connect"
import Book from "../database/Schemas/Book"
import User from "@/database/Schemas/User";

const GetPd = async (id) => {
    try {
        await ConnectDB();
        const data = await Book.findById(id).lean();
        data._id = data._id.toString();
        return data;
    } catch (error) {
        return 0;
    }
}

export const GetStockPd = async () => {
    try {
        await ConnectDB();
        const data = await Book.find({ AvailQty: { $lte: 0 } }).lean();
        data.forEach((item) => {
            const id = item._id;
            item._id = id.toString();
        })
        return data;
    } catch (error) {
        return 0;
    }
}

export const GetOrders = async () => {
    try {
        await ConnectDB();
        const data = await User.find({ orders: { $ne: [] } },"-password").lean();
        const resp = []
        data.map((item)=>{
            let obj = {user:"",orders:[]};
            obj.user=item.username;
            obj.orders=item.orders;
            resp.push(obj)
        })
        return resp;
    } catch (error) {
        return 0;
    }
}

export default GetPd