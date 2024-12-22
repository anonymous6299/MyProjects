
import Link from 'next/link'
import Image from "next/image"
const Footer = () => {
    return (
        <>
            <div className='footer bg-indigo-950 h-fit text-indigo-50 px-10 py-4 lg:py-20 sm:px-32 md:px-40 lg:px-44 xl:px-56 translate-y-48'>
                <div className='footerBody flex justify-between space-x-4 max-[510px]:flex-col max-[510px]:space-x-0 max-[510px]:items-center max-[510px]:space-y-4'>
                    <div className='col1 h-fit'>
                        <h1 className='colHeading border border-t-0 border-r-0 border-l-0 border-b-indigo-200 w-fit  text-lg lg:text-2xl'>Get to know Us</h1>
                        <div className='links pt-2'>
                            <Link href={"/about"}>
                                <p className='text-indigo-50 hover:border hover:border-indigo-200 '>About Us</p>
                            </Link>
                            <Link href={""}>
                                <p className='text-indigo-50 hover:border hover:border-indigo-200 '>Contact Us</p>
                            </Link>
                        </div>
                    </div>
                    <div className='col2 h-fit'>
                        <h1 className='colHeading border border-t-0 border-r-0 border-l-0 border-b-indigo-200 w-fit  text-lg lg:text-2xl'>Connect with Us</h1>
                        <div className='links pt-2'>
                            <Link href={""}>
                                <p className='text-indigo-50 hover:border hover:border-indigo-200 '>FaceBook</p>
                            </Link>
                            <Link href={""}>
                                <p className='text-indigo-50 hover:border hover:border-indigo-200 '>Twitter</p>
                            </Link>
                            <Link href={""}>
                                <p className='text-indigo-50 hover:border hover:border-indigo-200 '>Instagram</p>
                            </Link>
                        </div>
                    </div>
                    <div className='col3 h-fit'>
                        <h1 className='colHeading border border-t-0 border-r-0 border-l-0 border-b-indigo-200 w-fit  text-lg lg:text-2xl'>Let us help You</h1>
                        <div className='links pt-2'>
                            <Link href={"/Account"}>
                                <p className='text-indigo-50 hover:border hover:border-indigo-200 '>Your Account</p>
                            </Link>
                            <Link href={"/cart"}>
                                <p className='text-indigo-50 hover:border hover:border-indigo-200 '>Cart</p>
                            </Link>
                            <Link href={"/help"}>
                                <p className='text-indigo-50 hover:border hover:border-indigo-200 '>Help</p>
                            </Link>
                        </div>
                    </div>
                    <div className='col4 h-fit'>
                        <h1 className='colHeading border border-t-0 border-r-0 border-l-0 border-b-indigo-200 text-lg lg:text-2xl min-[511px]:w-fit'>Shop</h1>
                        <div className='links min-[588px]:pt-2 max-[588px]:pt-9 flex flex-col items-center max-[510px]:pt-0'>
                            <Link href={"/search/ad"}>
                                <p className='text-indigo-50 hover:border hover:border-indigo-200 '>ADVENTURE</p>
                            </Link>
                            <Link href={"/search/my"}>
                                <p className='text-emerald-50 hover:border hover:border-indigo-200 '>MYSTERY</p>
                            </Link>
                            <Link href={"/search/ho"}>
                                <p className='text-emerald-50 hover:border hover:border-indigo-200 '>HORROR</p>
                            </Link>
                            <Link href={"/search/hi"}>
                                <p className='text-emerald-50 hover:border hover:border-indigo-200 '>HISTORY</p>
                            </Link>
                            <Link href={"/search/fi"}>
                                <p className='text-emerald-50 hover:border hover:border-indigo-200 '>FICTION</p>
                            </Link>
                            <Link href={"/search/co"}>
                                <p className='text-emerald-50 hover:border hover:border-indigo-200 '>COMICS</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex items-center max-[850px]:mt-8 max-[409px]:flex-col'>
                    <div className='logo max-[409px]:mb-20'>
                        <Link href={"/"}>
                            <Image
                                src={"/static/logo.png"}
                                width={40}
                                height={0}
                                alt="logo"
                                style={{ width: "auto", height: "auto" }}
                            />
                        </Link>
                    </div>
                    <div className='copyright w-fit mx-auto -mt-12 '>
                        <p className='text-center border border-b-indigo-100 border-t-0 border-r-0 border-l-0'>BookMerce</p>
                        <p>(c) CopyRight 2024. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer