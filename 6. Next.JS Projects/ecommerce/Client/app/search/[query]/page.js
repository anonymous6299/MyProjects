"use client"
import NavBar from "@/components/NavBar"
import Sorting from "@/components/Sorting"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const page = ({ params }) => {
    const router = useRouter();
    const [Resp, setResp] = useState([]);
    const [Display, setDisplay] = useState("hidden");
    const fetchBook = async (Data) => {
        let data = await fetch("/api/GetBooks/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Data)
        });
        data = await data.json();
        return data.message;
    }
    useEffect(() => {
        setDisplay("block");
        if (params.query.length === 2) {
            fetchBook({ category: params.query, all:true}).then((resp) => { setResp(resp); })
        }
        else{
            fetchBook({ bookname: params.query, all:true}).then((resp) => { setResp(resp); })
        }
        setDisplay("hidden");
    }, [])

    return (
        <>
            <NavBar />
            <h2 className="text-3xl font-bold text-indigo-950 ml-[17rem] mt-10 opacity-90">Search Results for "{params.query === "ad" ? "Adventure" : params.query === "co" ? "Comics" : params.query === "fi" ? "Fiction" : params.query === "ho" ? "Horror" : params.query === "my" ? "Mystery" : "History"}"</h2>
            <div className="flex space-x-10 mx-10">
                <div className="w-48 mt-10 border border-r-indigo-100 border-l-0 border-t-0 border-b-0 h-fit">
                    <p className="text-indigo-950 font-semibold text-center text-xl mb-4">Sorting Options</p>
                    <Sorting txt={"4 star and above"} />
                    <Sorting txt={"3 star and above"} />
                    <Sorting txt={"2 star and above"} />
                    <Sorting txt={"1 star and above"} />
                    <Sorting txt={"Free Delivery"} />
                    <Sorting txt={"Low to High"} />
                    <Sorting txt={"High to Low"} />
                    <Sorting txt={"Get Today"} />
                    <hr className="border-indigo-100 mb-4 mx-4" />
                    <Sorting txt={"Upto ₹399"} />
                    <Sorting txt={"Upto ₹599"} />
                    <Sorting txt={"Upto ₹799"} />
                    <Sorting txt={"Upto ₹999"} />
                    <Sorting txt={"From ₹1,999"} />
                </div>
                <div role="status" className={`${Display}`}>
                    <svg aria-hidden="true" className="w-8 my-4 mx-auto h-fit text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="w-fit flex flex-wrap">
                    {Array.isArray(Resp) ? Resp.map((item, index) => {
                        return (
                            <div key={index} className="productDiv border border-indigo-900 rounded-lg pb-4 cursor-pointer mr-10 mt-10 h-fit" onClick={() => { router.push(`/product/${item._id}`) }}>
                                <div className="flex flex-col">
                                    <div className="img">
                                        <img src={`${item.ImageURL}`} className="w-[20rem] h-64 rounded-t-lg" />
                                    </div>
                                    <div className="desc mx-4 space-y-2">
                                        <p className="text-4xl font-bold opacity-90 text-center text-indigo-950">₹ {item.BookPrice}</p>
                                        <p className="text-2xl">{item.BookName}</p>
                                        <div className="text-md w-fit px-2 rounded-lg text-indigo-50 bg-indigo-900 flex items-center space-x-1">
                                            <p >{item.Rating}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#eef2ff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>

                                        </div>
                                        <div className="flex space-x-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                            </svg>

                                            <p className="text-md">{(item.BookDelivery).toString().slice(0, 10)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : ""}
                </div>
            </div>
        </>
    )
}

export default page