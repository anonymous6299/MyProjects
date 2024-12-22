"use client"

import { useRouter } from "next/navigation"


const Products = ({ props }) => {
  const router = useRouter();
  if (props.item) {
    return (
      <div className="border border-indigo-900 rounded-md px-6 w-[90%] mx-auto" id="imgs">
        <div className="my-4 w-full">
          <div className="content flex flex-row items-center">
            <img src={props.item.ImageURL} alt="img" className="w-52 h-40 cursor-pointer" onClick={() => { router.push(`/product/${props.item._id}`) }} />
            <div className="w-full flex justify-between space-x-4">
              <div className="flex flex-col w-full">
                <div className="w-full px-4 text-justify ml-4 py-2">
                  <div className="flex">
                    <p className="underline cursor-pointer hover:text-indigo-600" onClick={() => { router.push(`/product/${props.item._id}`) }}>{props.item.BookName}</p>
                    <p className="font-medium ml-4">(₹ {props.item.BookPrice})</p>
                  </div>
                  <p>{props.item.BookDesc}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="info w-fit ml-8">
                    <div className="rating flex space-x-3 items-center">
                      <div className="ratingText text-3xl">{props.item.Rating}</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="indigo" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    </div>
                    {props?.qty ? <><hr className="border-indigo-100" />

                      <div className="flex items-center">
                        <p className="font-bold text-lg">Qty:</p>
                        <p className="mx-2 text-lg">1</p>

                      </div></> : ""}
                  </div>
                  <div className="date">
                    <h2 className=" text-center font-bold opacity-90 text-[23px] text-indigo-950 border-2 border-t-0 border-l-0 border-r-0 border-b-indigo-800">Delivery</h2>
                    <h2 className="font-medium text-center text-lg text-indigo-700">{props.item.BookDelivery?.slice(0, 10)}</h2>
                  </div>
                  <div className="fare">
                    <h2 className=" text-center font-bold opacity-90 text-[23px] text-indigo-950 border-2 border-t-0 border-l-0 border-r-0 border-b-indigo-800">Fare</h2>
                    <h2 className="font-medium text-center text-lg text-indigo-700">₹ {props.item.DeliveryCharges}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="icon w-fit relative float-right left-10 bottom-20" onClick={() => { props.IconFunction(props.item._id) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 cursor-pointer bg-indigo-50 hover:bg-indigo-100 border-2 border-indigo-800 rounded-full px-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default Products