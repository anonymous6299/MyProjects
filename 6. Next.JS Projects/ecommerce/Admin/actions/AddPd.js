"use server"
import ConnectDB from "@/database/Connect"
import Book from "../database/Schemas/Book"
import { redirect } from "next/navigation"

const AddPd = async(FormData) => {
    await ConnectDB();

    let {
        BookName,
        BookPrice,
        Rating,
        BookDelivery,
        AvailQty,
        DeliveryCharges,
        ImageURL,
        category,
        BookDesc,
        OutOfStock
    } = Object.fromEntries(FormData);

    BookPrice=Number.parseInt(BookPrice);
    AvailQty=Number.parseInt(AvailQty);
    if (DeliveryCharges) {
        DeliveryCharges=Number.parseInt(DeliveryCharges);
    }

    const data = new Book({BookName,BookPrice,BookDelivery,AvailQty,DeliveryCharges,ImageURL,category,BookDesc,OutOfStock,Rating});
    await data.save();
    redirect("/products");
}

export default AddPd