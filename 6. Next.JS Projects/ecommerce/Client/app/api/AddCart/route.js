"use server"
import User from '@/database/Schemas/User'
import { NextResponse } from 'next/server';


export async function POST(request){
    const body = await request.json();
    if (body.Cart) {
        try {
            let data = await User.findById(body.user);
            data.cart = [...data.cart,body.book];
            await User.findByIdAndUpdate(data._id,{$set:data,new:true});
            return NextResponse.json({success:true,message:"Item added to cart."},{status:200});
    
        } catch (error) {
            console.log(error)
            return NextResponse.json({success:false,message:"Internal server error."},{status:500});
        }
    } else {
        try {
            let data = await User.findById(body.user);
            const arr = data.cart.filter((item)=>{
                return item!=body.book;
            })
            data.cart=arr;
            const newData = await User.findByIdAndUpdate(data._id,{$set:data,new:true});
            return NextResponse.json({success:true,message:"Item removed from cart.",newCart:newData.cart},{status:200});
    
        } catch (error) {
            return NextResponse.json({success:false,message:"Internal server error."},{status:500});
        }
    }
}