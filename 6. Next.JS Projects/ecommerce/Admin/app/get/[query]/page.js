"use client"
import GetPd, { GetOrders, GetStockPd } from "@/actions/GetPd"
import { useEffect, useState } from "react"
import Link from "next/link"


const page = ({ params }) => {
  const { query } = params;
  const [Data, setData] = useState([]);
  useEffect(() => {
    if (query === "OutOfStock") {
      GetStockPd().then((resp) => { setData(resp); });
    }
    else {
      GetOrders().then((resp) => {
        Promise.all(
          resp.map(async (order) => {
            order.orders = await Promise.all(
              order.orders.map(async (item) => {
                const bookData = await GetPd(item.book);
                return {
                  ...item,
                  book: bookData.BookName,
                };
              })
            );
            return order;
          })
        ).then((updatedResp) => {
          setData(updatedResp);
        });
      });
    }
  }, [])
  return (
    <>
      <p className="text-center text-3xl mt-4">BookMerce - {query}</p>
      <p className="mx-auto w-fit mt-10 mb-12 underline hover:text-indigo-800"><Link href="/">Home</Link></p>
      <div className="overflow-x-auto mx-10 mt-12 shadow-md rounded-lg max-h-[38rem] mb-20">
        {
          query === "OutOfStock" ? <table className="w-full text-sm text-left rtl:text-right text-gray-400 h-full">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="text-center px-6 py-3">
                  Book Name
                </th>
                <th scope="col" className="text-center px-6 py-3">
                  Out Of Stock
                </th>
              </tr>
            </thead>
            {console.log(Data)}
            <tbody>
              {
                Data ? Array.isArray(Data) ? Data.map((item, index) => {
                  return (
                    <tr className="bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600" key={index}>
                      <td scope="row" className="text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600">
                        <p>{item.BookName}</p>
                      </td>
                      <td scope="row" className="text-center px-6 py-4 font-medium text-white" dangerouslySetInnerHTML={{
                        __html: item.OutOfStock[0].replace(/\n/g, '<br />')
                      }}>
                      </td>
                    </tr>
                  )
                }) : <p>No data</p> : <p>No data</p>
              }
            </tbody>
          </table> : <table className="w-full text-sm text-left rtl:text-right text-gray-400 h-full">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="text-center px-6 py-3">
                  User
                </th>
                <th scope="col" className="text-center px-6 py-3">
                  Orders
                </th>
              </tr>
            </thead>
            <tbody>{Data.map((item, index) => {
              return (
                <tr className="bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600" key={index}>
                  <td scope="row" className="text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600">
                    <p>{item.user}</p>
                  </td>
                  <td scope="row" className="text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600">
                    <div className="flex w-full justify-between mb-3 border border-t-0 border-l-0 border-r-0 border-white">
                      <p>Book</p>
                      <p>Qty</p>
                      <p>Delivery Address</p>
                    </div>
                    {
                      item.orders.map((item, index) => {
                        return (<div className="flex w-full justify-between items-center" key={index}>
                          <p>{item.book}</p>
                          <p>{item.qty}</p>
                          <p>{item.DelAddress}</p>
                        </div>
                        )
                      })
                    }
                  </td>
                </tr>
              )

            })}</tbody>
          </table>
        }
      </div>
    </>
  )
}

export default page