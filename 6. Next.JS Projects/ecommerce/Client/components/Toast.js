'use client'
import { Context } from "@/contextAPI/context";
import { useRouter } from 'next/navigation'
import { useContext} from "react"


const Toast = (props) => {
    const router = useRouter();
    const context = useContext(Context);
    const {Tdisplay,bDisplay,toastBody, setToastBody,setTdisplay,setBDisplay} = context;
    return (
        <>
            <div className={`toast border border-indigo-900 bg-indigo-50 z-10 w-fit absolute right-10 ${props?.className?props.className:""} ${Tdisplay} px-4 py-1 rounded-md bottom-10 cursor-pointer` }>
                <div className='flex items-center'>
                    <div className='toastBody text-indigo-900'>
                        <div className='textmessage my-4 pr-6 w-64'>
                            <p className='font-bold text-xl'>{toastBody.ToastHeading}!</p>
                            <p className='break-all leading-[1.2rem] text-md'>{toastBody.ToastBody}</p>
                        </div>
                    </div>
                    <div className={`btnGrp mt-[1.6rem] ${bDisplay.display} `}>
                        <button className='border border-indigo-900 rounded-md px-2 py-1.5 hover:bg-indigo-50' onClick={()=>{router.push(bDisplay.url)}}>
                            <div className='flex items-center'>
                                <p>{bDisplay.btnBody}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>

                        </button>
                    </div>
                    <div className='icon -mt-14' onClick={()=>{setTdisplay("hidden")}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toast