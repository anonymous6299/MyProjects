"use client"
import Products from "@/components/Products"
import { useContext, useEffect, useState } from "react"
import Toast from "./Toast";
import { Context } from "@/contextAPI/context";


const Orders = ({ props }) => {
  const context = useContext(Context);
  const [Data, setData] = useState([]);
  const [Ids, setIds] = useState([]);
  const { setToastBody, setTdisplay } = context;
  useEffect(() => {
    if (props.orders) {
      const arr = props.orders.map((item) => {
        return item.book
      })
      setIds(arr)
      if (Ids.length === props.orders.length) {
        fetch("/api/GetBooks/", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ids: Ids })
        }
        ).then((resp) => { return resp.json() }).then((resp) => setData(resp.message)
        )
      }
    }
  }, [props.orders])

  const RemoveFromOrders = async (id) => {
    const resp = await (await fetch('/api/BuyPd/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Purchase: false,
        user: props.User,
        book: id
      })
    })).json();
    const arr = Data.filter((item) => {
      return item._id != id;
    })
    setData(arr);
    setTdisplay("block");
    if (resp.success) {
      setToastBody({ ToastHeading: "Success!", ToastBody: resp.message });
    } else {
      setToastBody({ ToastHeading: "Error!", ToastBody: resp.message });
    }
  }
  return (
    <div className={`mx-20 mt-18 max-h-96 overflow-y-scroll flex flex-col space-y-10  ${props.display ? "block" : "hidden"}`}>
      <Toast />
      {Data?.length !== 0 ? Data.map((item, index) => {
        return <Products key={index} props={{ item, qty: true, IconFunction: RemoveFromOrders }} />
      }) : <p className="w-fit mx-auto">No Orders Placed Yet.</p>}
    </div>
  )
}

export default Orders