"use client"
import AddPd from "@/actions/AddPd"
import Link from "next/link"

const AddProduct = () => {
  return (
    <>
      <p className="text-center text-3xl mt-10">BookMerce - Add Product</p>
      <p className="mx-auto w-fit mt-10 mb-12 underline hover:text-indigo-800"><Link href="/">Home</Link></p>
      <form className="w-[44rem] mx-auto" action={AddPd}>
        <div className="flex w-full space-x-4">
          <div className="mb-5 w-full">
            <label htmlFor="BookName" className="block mb-2 text-sm font-medium text-gray-900 ">Book Name</label>
            <input name="BookName" type="text" id="BookName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required autoComplete="off" />
          </div>
          <div className="mb-5 w-full">
            <label htmlFor="BookPrice" className="block mb-2 text-sm font-medium text-gray-900 ">Book Price</label>
            <input name="BookPrice" type="text" id="BookPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required autoComplete="off" />
          </div>
          <div className="mb-5 w-48">
            <label htmlFor="Rating" className="block mb-2 text-sm font-medium text-gray-900 ">Book Rating</label>
            <input name="Rating" type="text" id="Rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required autoComplete="off" />
          </div>
        </div>
        <div className="flex w-full space-x-4">
          <div className="mb-5 w-full">
            <label htmlFor="BookDelivery" className="block mb-2 text-sm font-medium text-gray-900 ">Book Delivery</label>
            <input name="BookDelivery" type="date" id="BookDelivery" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required autoComplete="off" />
          </div>
          <div className="mb-5 w-full">
            <label htmlFor="AvailQty" className="block mb-2 text-sm font-medium text-gray-900 ">Avail Qty</label>
            <input name="AvailQty" type="text" id="AvailQty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required autoComplete="off" />
          </div>
          <div className="mb-5 w-72">
            <label htmlFor="DeliveryCharges" className="block mb-2 text-sm font-medium text-gray-900 ">Delivery Charges</label>
            <input name="DeliveryCharges" type="text" id="DeliveryCharges" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " autoComplete="off" />
          </div>
        </div>
        <div className="flex w-full space-x-4">
          <div className="mb-5 w-full">
            <label htmlFor="ImageURL" className="block mb-2 text-sm font-medium text-gray-900 ">Image URL</label>
            <input name="ImageURL" type="text" id="ImageURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required autoComplete="off" />
          </div>
          <div className="mb-5 w-full">
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name="category" >
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
            <textarea id="BookDesc" name="BookDesc" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none" autoComplete="off"></textarea>
          </div>
          <div className="w-full">
            <label htmlFor="OutOfStock" className="block mb-2 text-sm font-medium text-gray-900 ">Out Of Stock</label>
            <textarea id="OutOfStock" name="OutOfStock" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none" autoComplete="off"></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
        </div>
      </form>
    </>
  )
}

export default AddProduct