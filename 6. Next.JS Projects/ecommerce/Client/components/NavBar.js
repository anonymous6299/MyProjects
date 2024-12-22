'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter, usePathname } from 'next/navigation'
import RightSlider from "./RightSlider"
import { useEffect, useState } from "react"

const NavBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [Display, setDisplay] = useState("hidden");
    const [Token, setToken] = useState("");
    const [FormData, setFormData] = useState("");
    const onChange = (e) => {
        setFormData(e.target.value);
    }
    const submit = (e) => {
        e.preventDefault();
        router.push(`/search/${FormData}`)
    }
    useEffect(() => {
        setToken(localStorage.getItem('auth-token'));
    }, [])

    return (
        <>
            <div className="navbar shadow-lg text-indigo-800 py-2 px-10 max-[707px]:px-4">
                <div className="navBody flex justify-between items-center">
                    <div className="leftPortion flex items-center">
                        <Link href={"/"}>
                            <Image
                                src={"/static/logo.png"}
                                width={40}
                                height={0}
                                alt="logo"
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                        <div className="homeBtn mx-6 max-[845px]:hidden">
                            <div className="homeBtn max-[845px]:hidden">
                                <button className="bg-indigo-900 text-indigo-50 px-6 rounded-md py-[0.4rem]" onClick={() => { router.push('/') }}>Home</button>
                            </div>
                        </div>
                        <div className="categories w-fit max-[845px]:hidden">
                            <div className="flex justify-between font-medium space-x-6">
                                <Link href={"/search/ad"}>
                                    <p className={`${pathname === "/search/ad" ? "border-b-[3px] border-b-indigo-700" : "border-b-0"} border-t-0 border-l-0 border-r-0`}>
                                        ADVENTURE
                                    </p>
                                </Link>
                                <Link href={"/search/co"}>
                                    <p className={`${pathname === "/search/co" ? "border-b-[3px] border-b-indigo-700" : "border-b-0"} border-t-0 border-l-0 border-r-0`}>
                                        COMICS
                                    </p>
                                </Link>
                                <Link href={"/search/fi"}>
                                    <p className={`${pathname === "/search/fi" ? "border-b-[3px] border-b-indigo-700" : "border-b-0"} border-t-0 border-l-0 border-r-0`}>
                                        FICTION
                                    </p>
                                </Link>
                                <Link href={"/search/hi"}>
                                    <p className={`${pathname === "/search/hi" ? "border-b-[3px] border-b-indigo-700" : "border-b-0"} border-t-0 border-l-0 border-r-0`}>
                                        HISTORY
                                    </p>
                                </Link>
                                <Link href={"/search/ho"}>
                                    <p className={`${pathname === "/search/ho" ? "border-b-[3px] border-b-indigo-700" : "border-b-0"} border-t-0 border-l-0 border-r-0`}>
                                        HORROR
                                    </p>
                                </Link>
                                <Link href={"/search/my"}>
                                    <p className={`${pathname === "/search/my" ? "border-b-[3px] border-b-indigo-700" : "border-b-0"} border-t-0 border-l-0 border-r-0`}>
                                        MYSTERY
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="rightPortion flex items-center justify-end w-fit max-[845px]:w-[52%] max-[845px]:justify-between">
                        <div className="input w-80 max-[1242px]:hidden mr-6 flex">
                            <input className="border-2 border-indigo-900 rounded-l-lg text-indigo-950 focus:outline-none focus:ring-2 focus:ring-indigo-300 px-2 w-full placeholder:text-indigo-950 py-1 focus:bg-indigo-50 bg-transparent" placeholder="Search..." name="search" autoComplete="off" value={FormData} onChange={onChange}/>
                            <button className="w-16 border-2 border-t-indigo-900 border-b-indigo-900 border-r-indigo-900 border-l-0 rounded-r-lg text-indigo-950 " onClick={submit}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>

                        {Token ? <div className="account cursor-pointer">
                            <Link href={"/Account"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg></Link>
                        </div> :
                            <div className="signInBtn max-[845px]:hidden">
                                <button className="text-indigo-950 px-6 rounded-md py-[0.4rem] hover:bg-indigo-50 border border-indigo-900" onClick={() => { router.push('SignIn') }}>Sign In</button>
                            </div>}
                        <div className="hamburger ml-4 min-[845px]:hidden" onClick={() => { setDisplay("block") }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <RightSlider props={{ Display, setDisplay }} />
        </>
    )
}

export default NavBar