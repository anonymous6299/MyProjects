"use client"
import DelPd from "@/actions/DelPd";
import ViewPd from "@/actions/ViewPd"
import Link from "next/link";
import { useState } from "react"
import { useEffect } from "react";

const AllProducts = () => {
  const [Display, setDisplay] = useState("");
  const [DisplayCopy, setDisplayCopy] = useState("block");
  const [DisplayToast, setDisplayToast] = useState("hidden");
  const [data, setData] = useState([]);
  useEffect(() => {
    setDisplay("block");
    ViewPd().then((resp) => {
      setData(resp);
    }
    );
    setDisplay("hidden");
  }, [])

  const Delete = async (id) => {
    await DelPd(id);
    const newData = data.filter((item) => {
      return item._id !== id;
    })
    setData(newData);
  }
  const copy = (url) => {
    navigator.clipboard.writeText(url);
    setDisplayToast("block");
    setTimeout(() => {
      setDisplayToast("hidden")
    }, 1000);
  }
  return (
    <>
      <p className="text-center text-3xl mt-8">BookMerce - All Products</p>
      <p className="mx-auto w-fit mt-10 mb-12 underline hover:text-indigo-800"><Link href="/">Home</Link></p>
      <p className={`w-fit mx-auto ${DisplayToast}`}>Link Copied!</p>
      <div role="status" className={`w-fit mx-auto ${Display}`}>
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>

      <div className="overflow-x-auto mx-10 mt-12 shadow-md rounded-lg max-h-[38rem] mb-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400 h-full">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="text-center px-6 py-3">
                Book Name
              </th>
              <th scope="col" className="text-center px-6 py-3">
                Book Price
              </th>
              <th scope="col" className="text-center px-6 py-3">
                Book Delivery
              </th>
              <th scope="col" className="text-center px-6 py-3">
              Delivery Charges
              </th>
              <th scope="col" className="text-center px-6 py-3">
                Avail Qty
              </th>
              <th scope="col" className="text-center px-6 py-3">
                Image
              </th>
              <th scope="col" className="text-center px-6 py-3">
                Category
              </th>
              <th scope="col" className="text-center px-6 py-3">
              Rating
              </th>
              <th scope="col" className="text-center px-6 py-3">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => {
                return (
                  <tr className="bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600" key={index}>
                    <td scope="row" className="text-center px-6 py-4 font-medium text-white">
                      <p>{item.BookName}</p>
                    </td>
                    <td className="text-center px-6 py-4">
                      <p>{item.BookPrice}</p>
                    </td>
                    <td className="text-center px-6 py-4">
                      <p>{(item.BookDelivery).toString().slice(0, 15)}</p>
                    </td>
                    <td className="text-center px-6 py-4">
                      <p>{item.DeliveryCharges}</p>
                    </td>
                    <td className="text-center px-6 py-4">
                      <p>{item.AvailQty === 0 ? "Out Of Stock" : item.AvailQty}</p>
                    </td>
                    <td className="py-4 text-justify w-40 h-0">
                      <div className="flex w-full justify-between">
                        <div>
                          <p>{item.ImageURL.slice(0, 40)}....</p>
                        </div>
                        <div className={`${DisplayCopy} cursor-pointer`} onClick={() => { copy(item.ImageURL) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="text-center px-6 py-4">
                      <p>{item.category}</p>
                    </td>
                    <td className="text-center px-6 py-4">
                      <p>{item.Rating}</p>
                    </td>
                    <td className="py-4 flex space-x-8 justify-center items-center">


                      <Link href={`/updProduct/${item._id}`}>
                        <svg className="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>
                      </Link>


                      <svg className="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" onClick={() => { Delete(item._id) }}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                      </svg>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default AllProducts