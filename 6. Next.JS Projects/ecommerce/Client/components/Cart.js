import Products from '@/components/Products'
import { Context } from '@/contextAPI/context';
import { useContext, useEffect, useState } from 'react'
import Toast from './Toast';

const Cart = ({ props }) => {
  const context = useContext(Context);
  const [Data, setData] = useState([]);
  const { setToastBody, setTdisplay } = context;
  useEffect(() => {
    if (props.cart) {
      fetch("/api/GetBooks/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: props.cart })
      }
      ).then((resp) => { return resp.json() }).then((resp) => {
        setData(resp.message)
      }
      )
    }
  }, [props.cart])
  const RemoveFromCart = async (id) => {
    const resp = await (await fetch('/api/AddCart/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Cart: false,
        user: props.User,
        book: id
      })
    })).json();
    const arr = Data.filter((item) => {
      return item._id !== id;
    })
    setData(arr);
    setTdisplay("block");
    if (resp.success) {
      setToastBody({ ToastHeading: "Success!", ToastBody: resp.message });
    } else {
      setToastBody({ ToastHeading: "Error!", ToastBody: resp.message });
    }
  }
  if (Data) {
    return (
      <>
        <div className={`pds mx-20 mt-18 max-h-96 overflow-y-scroll ${props.display ? "block" : "hidden"}`}>
          <Toast />
          <div className='flex flex-col w-full space-y-10 pb-4'>
            {Data.length !== 0 ? Data.map((item, index) => {
              return <Products qty={true} key={index} props={{ item, IconFunction: RemoveFromCart }} />
            }) : <p className="w-fit mx-auto">Cart is empty.</p>}
          </div>
        </div>
      </>
    )
  }
}

export default Cart