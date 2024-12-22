
import Image from 'next/image'
import Link from 'next/link'


const RightSlider = ({props}) => {
    return (
        <>
            <div className={`rightSlider bg-indigo-50 w-80 absolute h-[154vh] top-0 py-4 z-10 right-0 ${props.Display}`} style={{transition:"right 0.2s"}}>
                <div className='heading flex w-full justify-between px-4 items-center'>
                    <div className='logo'>
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
                    <div className='siteName text-3xl font-medium w-full text-center'>BookMerce</div>
                    <div className='btnClose border border-indigo-900 rounded-lg px-1 py-1' onClick={()=>{props.setDisplay("hidden")}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className="input w-full my-8 px-4">
                    <input className="border-2 border-indigo-900 rounded-lg text-indigo-950 focus:outline-none focus:ring-2 focus:ring-indigo-300 px-2 w-full placeholder:text-indigo-950 py-[0.28rem] focus:bg-indigo-50 bg-transparent" placeholder="Search..." name="search" />
                </div>
                <div>
                    <hr className='border-1 border-indigo-200 w-full' />
                    <div className='category px-4 mt-6'>
                        <p className='heading text-2xl font-medium tracking-normal text-center mb-2'> Shop by Category</p>
                        <div className="flex flex-col items-center font-medium w-full space-y-2 mb-6">
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.7rem] rounded-md'>DELIVERED TODAY</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.7rem] rounded-md'>SPECIAL OFFER</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.7rem] rounded-md'>ADVENTURE</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.7rem] rounded-md'>BEST SELLER</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.7rem] rounded-md'>FROM ₹299</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.7rem] rounded-md'>MYSTERY</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.7rem] rounded-md'>HORROR</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.7rem] rounded-md'>HISTORY</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.7rem] rounded-md'>FICTION</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.7rem] rounded-md'>COMICS</p>
                        </div>
                    </div>
                    <hr className='border-1 border-indigo-200 w-full' />
                    <div className='category px-4 mt-5'>
                        <p className='heading text-2xl font-medium tracking-normal text-center mb-2'> Help & Settings</p>
                        <div className="flex flex-col items-center font-medium w-full space-y-1">
                            <p className='hover:bg-indigo-100 w-full text-center py-2 rounded-md'>Customer Service</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.6rem] rounded-md'>Your Account</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.6rem] rounded-md'>Sign Out</p>
                            <p className='hover:bg-indigo-100 w-full text-center py-[0.6rem] rounded-md'>Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSlider