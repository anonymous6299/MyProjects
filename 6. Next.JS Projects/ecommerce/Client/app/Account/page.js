"use client"
import Address from '@/components/Address'
import Cart from '@/components/Cart'
import NavBar from '@/components/NavBar'
import Orders from '@/components/Orders'
import Returns from '@/components/Returns'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const page = () => {
    const router = useRouter();
    const [Data, setData] = useState({});
    const [Display, setDisplay] = useState("hidden");
    const [CartDisplay, setCartDisplay] = useState(false);
    const [OrderDisplay, setOrderDisplay] = useState(false);
    const [ReturnDisplay, setReturnDisplay] = useState(false);
    const [AddressDisplay, setAddressDisplay] = useState(false);
    useEffect(() => {
        setDisplay("block");
        fetch("http://localhost:3000/api/GetUser", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(localStorage.getItem('auth-token')),
        }).then((resp) => { return resp.json() }).then((res) => { setData(res.message) })
        setDisplay("hidden");
    }, [])
    const SignOut = () => {
        localStorage.removeItem("auth-token");
        router.push("/SignIn");
    }
    return (
        <>
            <NavBar />
            <div className={` mt-12 rounded-lg text-indigo-900 px-24 py-2  `}>
                <div className="cart justify-between items-center flex pl-2">
                    <h1 className='text-2xl sm:text-4xl font-medium w-full'>Your Account</h1>
                    <div className='w-full flex justify-end mt-4 mb-2'>
                        <button className='border border-indigo-900 px-5 py-1.5 rounded-md hover:bg-indigo-50' onClick={SignOut}>Sign Out</button>
                    </div>
                </div>
                <div className='username flex items-center w-full hover:bg-indigo-50 py-4 px-2 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="size-6 mr-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>

                    <p className='text-xl'>{Data.username}</p>
                    <div role="status" className={`w-fit mx-auto ${Display}`}>
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                <div className='Phone flex items-center w-full hover:bg-indigo-50 py-4 px-2 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="size-6 mr-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>

                    <p className='text-xl'>{Data.phone}</p>
                    <div role="status" className={`w-fit mx-auto ${Display}`}>
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                <div className='cartsec'>
                    <div className={`Cart flex items-center w-full cursor-pointer py-4 px-2 rounded-lg hover:bg-indigo-50 ${CartDisplay ? "mb-4" : ""}`} onClick={() => { setCartDisplay(!CartDisplay) }}>
                        <div className="relative inline-flex items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <span className="sr-only">Notifications</span>
                            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-indigo-800 bg-indigo-50 border-2 border-indigo rounded-full -top-2 -end-2 dark:border-gray-900">{Data.cart?.length}</div>
                        </div>
                        <div className='text flex justify-between w-full'>
                            <p className='text-xl border w-full border-t-0 border-l-0 border-r-0 border-indigo-900'>Cart</p>
                        </div>
                    </div>
                    <Cart props={{ cart: Data.cart, display: CartDisplay, User: Data._id }} />
                </div>
                <div className='ordersec'>
                    <div className={`Orders flex items-center w-full cursor-pointer py-4 px-2 rounded-lg hover:bg-indigo-50 ${OrderDisplay ? "mb-4" : ""}`} onClick={() => { setOrderDisplay(!OrderDisplay) }}>
                        <div className="relative inline-flex items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <span className="sr-only">Notifications</span>
                            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-indigo-800 bg-indigo-50 border-2 border-indigo rounded-full -top-2 -end-2 dark:border-gray-900">{Data.orders?.length}</div>
                        </div>
                        <div className='text flex justify-between w-full'>
                            <p className='text-xl border w-full border-t-0 border-l-0 border-r-0 border-indigo-900'>Orders</p>
                        </div>
                    </div>
                    <Orders props={{ orders: Data.orders, display: OrderDisplay, User: Data._id }} />
                </div>
                <div className='userAddress'>
                    <div className='Address flex items-center w-full cursor-pointer py-4 px-2 rounded-lg hover:bg-indigo-50' onClick={() => { setAddressDisplay(!AddressDisplay) }}>
                        <div className="relative inline-flex items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span className="sr-only">Notifications</span>
                            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-indigo-800 bg-indigo-50 border-2 border-indigo rounded-full -top-2 -end-2 dark:border-gray-900">{Data.SavedAddress?.length}</div>
                        </div>
                        <div className='text flex justify-between w-full'>
                            <p className='text-xl border w-full border-t-0 border-l-0 border-r-0 border-indigo-900'>Saved Address</p>
                        </div>
                    </div>
                    <Address props={AddressDisplay} />
                </div>
            </div>
        </>
    )
}

export default page