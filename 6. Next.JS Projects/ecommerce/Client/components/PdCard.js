import { useState, useEffect } from "react"
import IndPd from "./IndPd";
import { useRouter } from "next/navigation"

const PdCard = ({ props }) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [indexPrice, setIndexPrice] = useState(0);
  const [indexDel, setIndexDel] = useState(0);
  const [indexBestS, setIndexBestS] = useState(0);
  const [Arr, setArr] = useState([]);
  const [GetToday, setGetToday] = useState([]);
  const [BestSell, setBestSell] = useState([]);
  const [Display, setDisplay] = useState("hidden");
  const [Price, setPrice] = useState([]);
  useEffect(() => {
    if (props.Price&&props.Price.length!==0) {
      setPrice(props.Price)
    }
    else if (props.arr&&props.arr.length!==0) {
      setArr(props.arr)
    }
  }, [props.Price,props.arr])


  const IncIndex = (title) => {
    setIndex(index + 1)
    if (title.includes("299")) {
      setIndexPrice(indexPrice + 1)
    }
    else if (title.includes("Delivered")) {
      setIndexDel(indexDel + 1)
    }
    else {
      setIndexBestS(indexBestS + 1)
    }
  }
  const DecIndex = (title) => {
    setIndex(index - 1)
    if (title.includes("299")) {
      setIndexPrice(indexPrice - 1)
    }
    else if (title.includes("Delivered")) {
      setIndexDel(indexDel - 1)
    }
    else {
      setIndexBestS(indexBestS - 1)
    }
  }
  if (!(props.wfull)) {
    return (
      <>
        <div className="border border-indigo-900 rounded-md px-6 py-2 overflow-x-hidden w-full" id="imgs">
          <h1 className="text-2xl font-medium my-2 text-indigo-900">{props.title}</h1>
          {props.title.includes("299") ? <div className="my-4 w-full h-50 cursor-pointer" onClick={() => { router.push(`/product/${Price[indexPrice]._id}`) }}>
            <div className="content flex flex-col items-center">
              <div className="flex w-full justify-between max-[530px]:flex-col">
                {Price[indexPrice] ? <img src={Price[indexPrice].ImageURL} key={index} alt="img" className="w-52" /> : ""}
                <div className="flex justify-between flex-col w-[45%] py-1 max-[530px]:w-full">
                  {Price[indexPrice] ? <h2 className="text-4xl font-bold opacity-80 text-center mb-2">₹ {Price[indexPrice].BookPrice}</h2> : ""}
                  <div className="btns space-y-4">
                    <button className="bg-indigo-500 w-full text-md py-2 rounded-md hover:bg-indigo-600 text-indigo-50" onClick={() => { router.push(`/product/${Price[indexPrice]._id}`) }}>Buy Now</button>
                    <button className="border border-indigo-500 w-full text-md py-2 rounded-md hover:bg-indigo-100 ">Add to Cart</button>
                  </div>
                </div>
              </div>
              {Price[indexPrice] ? <div className="mt-4 w-full text-justify">{Price[indexPrice].BookName}</div> : ""}
            </div>
          </div> : ""}
          <div className='NavArrow w-full flex justify-between text-indigo-900'>
            <button className='w-fit mx-4 disabled:opacity-40' onClick={() => { DecIndex(props.title) }} disabled={index === 0}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
            </button>
            <button className='w-fit mx-4 disabled:opacity-40' onClick={() => { IncIndex(props.title) }} disabled={index === 3}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div className="border border-indigo-900 rounded-md px-6 pt-2 pb-12 overflow-x-hidden w-full" id="imgs">
          <h1 className="text-2xl w-fit font-medium my-2 text-indigo-900">{props.title}</h1>
          <div role="status" className={`${Display}`}>
            <svg aria-hidden="true" className="w-8 mx-auto h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
          <div className="flex justify-between flex-wrap space-y-4 max-[628px]:justify-center">
            {Arr?.length !== 0? Arr.map((item, index) => {
              return <IndPd key={index} data={item} />
            }) : ""}
          </div>
        </div>
      </>
    )
  }
}

export default PdCard
