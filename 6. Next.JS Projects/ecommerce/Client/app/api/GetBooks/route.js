"use server"
import Book from "@/database/Schemas/Book"
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        if(body.ids){
            const data = await Book.find({_id:{$in:body.ids}}).lean();
            return NextResponse.json({ message: data }, { status: 200 });   
        }
        else if(body.id){
            const data = await Book.findById(body.id);
            const id=data._id;
            data._id=id.toString();
            return NextResponse.json({ message: data }, { status: 200 });
        }
        else if(body.category){
            const data = await Book.find({ category: body.category.toUpperCase() }).lean();
            
            if (body.all===true) {
                return NextResponse.json({ message: data }, { status: 200 });
            } else {
                return NextResponse.json({ message: data.slice(0, body.all) }, { status: 200 });
            }
        }
        else if(body.bookname){
            const data = await Book.find({ BookName: body.bookname }).lean();
            
            if (body.all===true) {
                return NextResponse.json({ message: data }, { status: 200 });
            } else {
                return NextResponse.json({ message: data.slice(0, body.all) }, { status: 200 });
            }
        }
        else if(body.lowerprice){
            const data = await Book.find({ BookPrice: { $lte: body.lowerprice } }).lean();
            if (body.all===true) {
                return NextResponse.json({ message: data }, { status: 200 });
            } else {
                return NextResponse.json({ message: data.slice(0, body.all) }, { status: 200 });
            }
        }
        else{
            return NextResponse.json({ message: "ok" }, { status: 200 });
        }
    } 
    catch (error) {
        return NextResponse.json({ success: false, message: "error" }, { status: 500 });
    }
}