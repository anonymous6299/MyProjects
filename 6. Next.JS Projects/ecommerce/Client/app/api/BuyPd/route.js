"use server"
import User from '@/database/Schemas/User'
import { NextResponse } from 'next/server';


export async function POST(request){
    const body = await request.json();
    if (body.Purchase) {
        try {
            let data = await User.findById(body.user);
            data.orders = [...data.orders,{book:body.book,qty:body.qty,DelAddress:body.address}];
            await User.findByIdAndUpdate(data._id,{$set:data,new:true});
            return NextResponse.json({success:true,message:"Order Sucessfully Placed."},{status:200});
    
        } catch (error) {
            return NextResponse.json({success:false,message:"Internal server error."},{status:500});
        }
    } else {
        try {
            let data = await User.findById(body.user);
            const arr = data.orders.filter((item)=>{
                return item.book!=body.book;
            })
            data.orders=arr;
            const newData = await User.findByIdAndUpdate(data._id,{$set:data,new:true});
            return NextResponse.json({success:true,message:"Order Cancelled.",newOrders:newData.orders},{status:200});
    
        } catch (error) {
            return NextResponse.json({success:false,message:"Internal server error."},{status:500});
        }
    }
}