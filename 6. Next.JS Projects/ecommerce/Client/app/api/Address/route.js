"use server"
import User from "@/database/Schemas/User";
import { NextResponse } from "next/server";
const jwt = require('jsonwebtoken');


export async function POST(request) {
    const data = await request.json();
    const jwtUser = jwt.verify(data.user, process.env.JWT_SEC)
    try {
        const { user } = jwtUser;
        const resp = await User.findById(user.id);
        if (data.address) {
            const newUserRec = {
                username: resp.username,
                phone: resp.phone,
                password: resp.password,
                SavedAddress: [...resp.SavedAddress, data.address],
                cart: resp.cart,
                orders: resp.orders,
                returns: resp.returns
            }
            await User.findByIdAndUpdate(user.id, { $set: newUserRec, new: true });
            return NextResponse.json({ success: true, message: "Successfully added an Address" }, { status: 200 });
        }
        else {
            return NextResponse.json({ success: true, data: resp.SavedAddress }, { status: 200 });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, data: "Internal Server Error" }, { status: 500 });
    }
}
export async function DELETE(request) {
    const data = await request.json();
    const jwtUser = jwt.verify(data.user, process.env.JWT_SEC)
    try {
        const { user } = jwtUser;
        const resp = await User.findById(user.id);
        const arr = resp.SavedAddress;
        const newData = arr.filter((item,index) => {
            return index!==data.index;
          })
        const newUserRec = {
            username: resp.username,
            phone: resp.phone,
            password: resp.password,
            SavedAddress: newData,
            cart: resp.cart,
            orders: resp.orders,
            returns: resp.returns,
        }
        await User.findByIdAndUpdate(user.id, { $set: newUserRec, new: true });
        return NextResponse.json({ success: true, newAddress:newData ,message: "Successfully deleted an Address" }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, data: "Internal Server Error" }, { status: 500 });
    }
}