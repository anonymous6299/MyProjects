"use client"
import GetPd from '@/actions/GetPd'
import UpdPd from '@/actions/UpdPd'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const page = ({ params }) => {
  const [Data, setData] = useState(null);
  const onChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  }
  const submit = async (e) => {
    e.preventDefault();
    await UpdPd(FormIP);
  }
  useEffect(() => {
    GetPd(params.id).then((resp) => {
      if (resp) {
        setData(
          {
            id: resp._id,
            BookName: resp.BookName,
            BookPrice: resp.BookPrice,
            Rating: resp.Rating,
            BookDelivery: resp.BookDelivery,
            DeliveryCharges: resp.DeliveryCharges,
            AvailQty: resp.AvailQty,
            ImageURL: resp.ImageURL,
            category: resp.category,
            BookDesc: resp.BookDesc,
            OutOfStock: resp.OutOfStock,
          }
        )
      };
    })
  }, [])
  if (!Data) {
    return (
      <>
        <p className="text-center text-3xl mt-10">BookMerce - Update Product</p>
        <p className="mx-auto w-fit mt-10 mb-12 underline hover:text-indigo-800"><Link href="/">Home</Link></p>

        <div role="status" className='w-fit mx-auto'>
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>

      </>
    )
  }
  else {
    return (
      <>
        <p className="text-center text-3xl mt-10">BookMerce - Update Product</p>
        <p className="mx-auto w-fit mt-10 mb-12 underline hover:text-indigo-800"><Link href="/">Home</Link></p>
        <form className="w-[44rem] mx-auto">
          <div className="flex w-full space-x-4">
            <div className="mb-5 w-full">
              <label htmlFor="BookName" className="block mb-2 text-sm font-medium text-gray-900 ">Book Name</label>
              <input onChange={onChange} type="text" id="BookName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required value={Data.BookName} name="BookName" />
            </div>
            <div className="mb-5 w-full">
              <label htmlFor="BookPrice" className="block mb-2 text-sm font-medium text-gray-900 ">Book Price</label>
              <input onChange={onChange} type="text" id="BookPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required value={Data.BookPrice} name="BookPrice" />
            </div>
            <div className="mb-5 w-48">
              <label htmlFor="BookRating" className="block mb-2 text-sm font-medium text-gray-900 ">Book Rating</label>
              <input name="Rating" type="text" id="BookRating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required autoComplete="off" onChange={onChange} value={Data.Rating} />
            </div>
          </div>
          <div className="flex w-full space-x-4">
            <div className="mb-5 w-full">
              <label htmlFor="BookDelivery" className="block mb-2 text-sm font-medium text-gray-900 ">Book Delivery</label>
              <input onChange={onChange} type="text" id="BookDelivery" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required value={Data.BookDelivery} name="BookDelivery" />
            </div>
            <div className="mb-5 w-full">
              <label htmlFor="AvailQty" className="block mb-2 text-sm font-medium text-gray-900 ">Avail Qty</label>
              <input onChange={onChange} type="text" id="AvailQty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required value={Data.AvailQty} name="AvailQty" autoComplete="off" />
            </div>
            <div className="mb-5 w-72">
              <label htmlFor="DeliveryCharges" className="block mb-2 text-sm font-medium text-gray-900 ">Delivery Charges</label>
              <input onChange={onChange} type="text" id="DeliveryCharges" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required value={Data.DeliveryCharges} name="DeliveryCharges" autoComplete="off" />
            </div>
          </div>
          <div className="flex w-full space-x-4">
            <div className="mb-5 w-full">
              <label htmlFor="ImageURL" className="block mb-2 text-sm font-medium text-gray-900 ">Image URL</label>
              <input onChange={onChange} type="text" id="ImageURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required value={Data.ImageURL} name="ImageURL" />
            </div>
            <div className="mb-5 w-full">
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
              <select id="category" value={Data.category} name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={onChange}>
                <option value="AD">Adventure</option>
                <option value="MY">Mystery</option>
                <option value="HO">Horror</option>
                <option value="HI">History</option>
                <option value="FI">Fiction</option>
                <option value="CO">Comics</option>
              </select>
            </div>
          </div>
          <div className="mb-5 w-full flex space-x-6">
            <div className="w-full">
              <label htmlFor="BookDesc" className="block mb-2 text-sm font-medium text-gray-900 ">Book Description</label>
              <textarea id="BookDesc" name="BookDesc" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none" autoComplete="off" onChange={onChange} value={Data.BookDesc}></textarea>
            </div>
            <div className="w-full">
              <label htmlFor="OutOfStock" className="block mb-2 text-sm font-medium text-gray-900 ">Out Of Stock</label>
              <textarea id="OutOfStock" name="OutOfStock" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none" autoComplete="off" onChange={onChange} value={Data.OutOfStock}></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={submit}>Update Product</button>
          </div>
        </form>
      </>
    )
  }
}

export default page