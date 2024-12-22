"use client"
import NavBar from '@/components/NavBar'
import React, { useContext, useEffect, useState } from 'react'
import Toast from '@/components/Toast';
import { Context } from '@/contextAPI/context';
import BuyPd from '@/components/BuyPd';
import { useRouter } from 'next/navigation';


const page = ({ params }) => {
    const { query } = params;
    const router = useRouter();
    const [Data, setData] = useState({});
    const [User, setUser] = useState({});
    const [Qty, setQty] = useState(1);
    const [Address, setAddress] = useState("Select an address");
    const [BuyPdis, setBuyPdis] = useState(false)
    const context = useContext(Context);
    const { setToastBody, setTdisplay } = context;
    useEffect(() => {
        fetch("/api/GetBooks", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: query }),
        }).then((resp) => { return resp.json() }).then((resp) => { setData(resp.message) })
        fetch("/api/GetUser", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(localStorage.getItem('auth-token')),
        }).then((resp) => { return resp.json() }).then((resp) => { setUser(resp.message) })
    }, [])

    const AddToCart = async (id) => {
        const resp = await (await fetch("/api/AddCart", {
            method: 'POST',
            body: JSON.stringify({
                Cart: true,
                book: id,
                user: User._id
            })
        })).json();
        setTdisplay("block");
        setToastBody({ ToastHeading: "Cart Updated", ToastBody: resp.message });

    }
    const onChange = (e) => {
        if (e.target.value!=="Select...") {
            setAddress(e.target.value)
        }
    }
    const OutOfStockCheck = () => {
        if (Data?.OutOfStock){
            return Data?.OutOfStock[0].includes(Address)
        }
    }
    return (
        <>
            <NavBar />
            <div className={BuyPdis?"hidden":"block"}>
            <Toast />
            <div className={`outofstock text-center my-20 text-4xl text-red-600 font-medium ${OutOfStockCheck() ? "block" : "hidden"}`}>Out Of Stock !</div>
            <div className="productDiv rounded-lg pb-4 mr-10  h-fit mx-20 mt-20">
                <div className="flex space-x-10">
                    <div className="img">
                        <img src={Data.ImageURL} className="w-[40rem] h-96 rounded-lg" />
                    </div>
                    <div className="desc mx-4 break-all w-[45rem]">
                        <div className='flex justify-between mb-4'>
                            <p className="text-2xl underline hover:text-indigo-900 cursor-pointer">
                                {Data.BookName}
                            </p>
                            <div className="qty flex space-x-3">
                                <button className="border border-indigo-900 px-3 rounded-md hover:bg-indigo-100 disabled:opacity-40" onClick={() => { setQty(Qty - 1) }} disabled={Qty === 1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>
                                </button>
                                <div className="flex items-center">
                                    <p className="font-bold">Qty :</p>
                                    <p className="ml-2">{Qty}</p>
                                </div>
                                <button className="border border-indigo-900 px-3 rounded-md hover:bg-indigo-100 disabled:opacity-40" onClick={() => { setQty(Qty + 1) }} disabled={Qty >= Data.AvailQty}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <p className="text-2xl">{Data.BookDesc}</p>
                        <div className='flex mt-8 space-x-16 items-center'>
                            <div className='min-w-40'>
                                <p className='text-lg'>Price</p>
                                <p className="text-4xl font-medium opacity-90 text-indigo-950">
                                    ₹ {Data.BookPrice * Qty}
                                </p>
                            </div>
                            <div className='space-y-4 mt-2 min-w-44'>
                                <div className="text-md w-fit px-2 rounded-lg text-indigo-50 bg-indigo-900 flex items-center space-x-1">
                                    <p >{Data.Rating}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#eef2ff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                                <div className="flex space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                    </svg>
                                    <p className="text-md">({Data.BookDelivery?.toString().slice(0, 10)}) (₹{Data.DeliveryCharges})</p>
                                </div>
                            </div>
                            <div className='address flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" className="size-16">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <div className='flex flex-col justify-between h-16'>
                                <p className='w-40'>{Address}</p>
                                <p className={`w-40 ${Address!=="Select an address"?"hidden":"block"} hover:text-indigo-800 underline cursor-pointer`} onClick={()=>{router.push("/Account")}}>Add Address</p>
                                <select className='border border-indigo-800 w-fit focus:outline-none px-2 h-6 rounded-[0.2rem]' name='address' autoComplete='off' onChange={onChange} value={Address}>
                                <option>Select...</option>
                                    {User.SavedAddress?.map((item,index)=>{
                                        return <option key={index} value={item}>{item.slice(0,15)}</option>
                                    })}
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className='btnGrp space-y-4 mt-12'>
                            <button className='bg-indigo-800 w-full py-3 rounded-lg text-indigo-50 hover:bg-indigo-900 disabled:opacity-40' onClick={() => {setBuyPdis(!BuyPdis)}} disabled={(OutOfStockCheck())||(Address==="Select an address")}>Buy Now</button>
                            <button className='border-indigo-800 w-full py-3 rounded-lg text-indigo-950 border hover:bg-indigo-50' onClick={() => { AddToCart(Data._id) }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <BuyPd props={{
                id:Data._id,
                ImageURL:Data.ImageURL,
                BookName:Data.BookName,
                BookDesc:Data.BookDesc,
                BookDelivery:Data.BookDelivery,
                DeliveryCharges:Data.DeliveryCharges,
                BookPrice:Data.BookPrice,
                display:BuyPdis,
                ToggleDis:setBuyPdis,
                qty:Qty,
                address:Address}}/>
        </>
    )
}

export default page