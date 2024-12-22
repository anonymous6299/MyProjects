"use client"
import Toast from "@/components/Toast";
import { Context } from "@/contextAPI/context";
import { useContext, useEffect, useState } from "react";


const BuyPd = ({ props }) => {
    const [User, setUser] = useState("");
    useEffect(() => {
        fetch("/api/GetUser",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(localStorage.getItem('auth-token'))
        }).then((resp)=>{return resp.json()}).then((resp)=>{setUser(resp.message._id)})
    }, [])
    
    const context = useContext(Context);
    const { setToastBody, setTdisplay } = context;

    const ToggleToast = (heading, message) => {
        setTdisplay("block");
        setToastBody({ ToastHeading: heading, ToastBody: message });
    }

    const PlaceOrder = async (id) => {
        const resp = await (await fetch("/api/BuyPd", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Purchase: true,
                book: id,
                address: props.address,
                qty: props.qty,
                user: User
            })
        }
        )).json();
        if (resp.success) {
            ToggleToast("Placed!", resp.message);
        } else {
            ToggleToast("Error!", resp.message);
        }
    }
    return (
        <div className={props.display ? "block" : "hidden"}>
            <Toast />
            <button className="flex border border-indigo-800 px-3 pr-4 py-1 rounded-[0.32rem] items-center space-x-1 hover:bg-indigo-50 mt-10 mx-[7.2rem]" onClick={()=>{props.ToggleDis(!(props.display))}}>
                <div className="backIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <p className="text-lg">Back</p>
            </button>
            <div className="content my-10 mx-16 flex justify-around">
                <div className="pd w-1/2 h-[40rem] border px-6 rounded-lg border-indigo-900 overflow-y-scroll">
                    <img src={props.ImageURL} className="w-full my-4 rounded-lg max-h-[30rem]" />
                    <p className="BookName break-all text-2xl font-semibold underline">{props.BookName}</p>
                    <p className="bookdesc break-all text-2xl font-semibold">{props.BookDesc}</p>
                    <div className="delInfo my-8">
                        <div className="deliveryAdd">
                            <p className="text-3xl font-semibold">1. Address</p>
                            <p className="my-2 mx-10 break-all">{props.address}</p>
                        </div>
                        <div className="deliveryPay my-8">
                            <p className="text-3xl font-semibold">2. Payment Method</p>
                            <p className="my-2 mx-10">Cash On Delivery</p>
                        </div>
                        <div className="deliveryDateCharge my-8">
                            <p className="text-3xl font-semibold">3. Delivery and Charges</p>
                            <p className="my-2 mx-10">{props.BookDelivery?.toString().slice(0, 10)} (₹{props.DeliveryCharges})</p>
                        </div>
                    </div>
                </div>
                <div className='border border-t-0 border-r-0 border-b-0 border-indigo-100 pl-10 w-[35%]'>
                    <p className='text-3xl text-center text-indigo-950'>Billing</p>
                    <table className="table-auto w-full">
                        <thead>
                            <tr className='h-12 text-xl text-center text-indigo-900'>
                                <th>Price</th>
                                <th>Delivery</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border border-r-0 border-l-0 h-12 text-lg text-center text-indigo-950'>
                                <td>₹ {props.BookPrice * props.qty}</td>
                                <td>₹ {props.DeliveryCharges}</td>
                            </tr>
                        </tbody>
                        <tfoot className='bg-indigo-50'>
                            <tr className='border border-r-0 border-l-0 border-b-0 h-12 text-lg text-center text-indigo-950'>
                                <td className='font-bold'>TOTAL</td>
                                <td>{((props.BookPrice * props.qty) + (props.DeliveryCharges)).toString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <button className='bg-indigo-600 w-full text-indigo-50 hover:bg-indigo-700 h-12 rounded-md mt-6' onClick={() => { PlaceOrder(props.id) }}>Place Order</button>
                    <div className="info my-10 w-full mx-auto space-y-2">
                        <div className="pay flex w-full justify-between">
                            <p className="font-bold">Payment Method</p>
                            <p className="font-bold mr-[9.8rem]">:</p>
                            <p>Cash On Delivery</p>
                        </div>
                        <div className="del flex w-full justify-between">
                            <p className="font-bold">Delivery</p>
                            <p className="font-bold mr-[8.1rem]">:</p>
                            <p>{props.BookDelivery?.toString().slice(0, 10)}</p>
                        </div>
                        <div className="add flex w-full justify-between">
                            <p className="font-bold">Address</p>
                            <p className="font-bold">:</p>
                            <p className="w-52 break-all">{props.address}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BuyPd