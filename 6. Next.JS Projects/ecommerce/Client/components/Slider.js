import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Slider = () => {
    const router = useRouter();
    const [left, setLeft] = useState("left-12");
    const MoveLeft = () => {
        if (left === "left-12") {
            setLeft("-left-[97%]");
        }
        else if (left === "-left-[97%]") {
            setLeft("-left-[197%]");
        }
        else {
            setLeft("left-12")
        }
    }
    const MoveRight = () => {
        if (left === "left-12") {
            setLeft("-left-[197%]");
        }
        else if (left === "-left-[197%]") {
            setLeft("-left-[97%]");
        }
        else {
            setLeft("left-12")
        }
    }
    const scroll = () => {
        document.getElementById("imgs").scrollIntoView({
            behavior: "smooth"
        });
    }
    return (
        <>
            <div className={`slider flex relative ${left} my-16 text-indigo-950 transition-all h-[48vh]`}>
                <div className='slideFirst bg-indigo-100 border border-indigo-900 w-[94%] h-fit absolute left-0 rounded-lg max-[1242px]:w-[91%] max-[845px]:w-[89%] max-[707px]:w-[86%] max-[511px]:-left-4'>
                    <div className='heading text-center px-2'>
                        <p className='text-6xl font-bold opacity-95 mt-12 mb-7 max-[707px]:text-5xl max-[555px]:mt-8'>50% off on all books</p>
                        <p className='text-xl max-[707px]:text-lg'>Start shopping now to avail 50% off on every purchase.</p>
                    </div>
                    <div className='NavArrow w-full flex justify-between text-indigo-900'>
                        <button className='w-fit mx-4' onClick={MoveLeft}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                        <button className='w-fit mx-4' onClick={MoveRight}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div className='button flex justify-center mb-12 max-[555px]:-mt-16'>
                        <button className='border-2 border-indigo-800 rounded-lg px-6 py-2 mt-12 hover:bg-indigo-200 flex items-center' onClick={scroll}>Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='slideSecond bg-indigo-100 border border-indigo-900 w-[94%] h-fit absolute left-[100%] rounded-lg'>
                    <div className='heading text-center px-2'>
                        <p className='text-6xl font-bold opacity-95 mt-12 mb-7 max-[707px]:text-5xl max-[555px]:mt-8'>Free Shipping and Refund</p>
                        <p className='text-xl max-[707px]:text-lg'>Get free shipping and refund for all purchases starting from ₹200.</p>
                    </div>
                    <div className='NavArrow w-full flex justify-between text-indigo-900'>
                        <button className='w-fit mx-4' onClick={MoveLeft}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                        <button className='w-fit mx-4' onClick={MoveRight}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div className='button flex justify-center mb-12 max-[555px]:-mt-16'>
                        <button className='border-2 border-indigo-800 rounded-lg px-6 py-2 mt-12 hover:bg-indigo-200 flex items-center' onClick={()=>{router.push("/cart")}}>Go to Cart
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='slideThird bg-indigo-100 border border-indigo-900 w-[94%] h-fit absolute left-[200%] rounded-lg'>
                    <div className='heading text-center px-2'>
                        <p className='text-6xl font-bold opacity-95 mt-12 mb-7 max-[707px]:text-5xl max-[555px]:mt-4 '>Categories to enhance your Shopping</p>
                        <p className='text-xl max-[707px]:text-lg'>We have various categories to make your shopping better.</p>
                    </div>
                    <div className='NavArrow w-full flex justify-between text-indigo-900'>
                        <button className='w-fit mx-4' onClick={MoveLeft}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                        <button className='w-fit mx-4' onClick={MoveRight}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div className='button flex justify-center mb-12 max-[555px]:-mt-16 max-[555px]:mb-[1rem]'>
                        <button className='border-2 border-indigo-800 rounded-lg px-6 py-2 mt-12 hover:bg-indigo-200 flex items-center max-[555px]:mb-0' onClick={()=>{router.push("/search/ad")}}>Shop by Category
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider