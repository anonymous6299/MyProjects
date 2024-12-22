import React from 'react'

const OrderTable = ({props}) => {
  return (
    <>
    <div className="overflow-x-auto mx-10 mt-12 shadow-md rounded-lg max-h-[38rem] mb-20">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400 h-full">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
                {props.THeads.map((item,index)=>{
                    return <th scope="col" className="text-center px-6 py-3" key={index}>item</th>
                })}
            </tr>
          </thead>
          <tbody>
            {
              props.Data?props.Data.map((item, index) => {
                if(props.OutOfStock){
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
                }
                else{
                    return (
                        <tr className="bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600" key={index}>
                          <td scope="row" className="text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600">
                            <p>{item.User}</p>
                          </td>
                          <td scope="row" className="text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600">
                            <p>{item.BookName}</p>
                          </td>
                          <td scope="row" className="text-center px-6 py-4 font-medium text-white">
                            <p>{item.qty}</p>
                          </td>
                          <td scope="row" className="text-center px-6 py-4 font-medium text-white">
                            <p>{item.DelAddress}</p>
                          </td>
                        </tr>
                      ) 
                }
              }):<p>No data</p>
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default OrderTable