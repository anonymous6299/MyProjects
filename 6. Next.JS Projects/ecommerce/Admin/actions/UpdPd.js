"use server"
import ConnectDB from "@/database/Connect"
import Book from "../database/Schemas/Book"
import { redirect } from "next/navigation";

const UpdPd = async(data) => {
    await ConnectDB();
    const id = data.id;
    delete data.id;
    await Book.findByIdAndUpdate(id,{$set:data,new:true});
    redirect("/products");
}

export default UpdPd