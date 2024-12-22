"use client"
import Toast from "@/components/Toast";
import { Context } from "@/contextAPI/context";
import { useContext, useEffect, useState } from "react"


const Address = ({props}) => {
    const context = useContext(Context);
    const [Token, setToken] = useState("")
    const [Address, setAddress] = useState("");
    const [Addresses, setAddresses] = useState([])
    const { setToastBody, setTdisplay, setUserAddress } = context;
    const onChange = (e) => {
        setAddress(e.target.value)
    }
    const submit = async (e) => {
        e.preventDefault();
        const resp = await (await fetch("/api/Address", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: Token, address: Address })
        })).json();
        if (resp.success) {
            setTdisplay("block");
            setToastBody({ ToastHeading: "Added", ToastBody: resp.message });
            setAddresses([...Addresses, Address]);
            setUserAddress([...Addresses, Address]);
            setAddress("");
        }
        else {
            setTdisplay("block");
            setToastBody({ ToastHeading: "Error", ToastBody: resp.data });
            setAddress("");
        }
    }

    const deleteAddress = async(ind) => {
        const resp = await (await fetch("/api/Address", {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: Token, index: ind })
        })).json();
        if (resp.success) {
            setTdisplay("block");
            setToastBody({ ToastHeading: "Deleted", ToastBody: resp.message });
            setAddresses(resp.newAddress);
            setUserAddress(resp.newAddress);
            setAddress("");
        }
        else {
            setTdisplay("block");
            setToastBody({ ToastHeading: "Error", ToastBody: resp.data });
            setAddress("");
        }
    }
    const fetchAddress = async (id) => {
        const add = await (await fetch("/api/Address", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: id })
        })).json();
        return add.data;
    }


    useEffect(() => {
        setToken(localStorage.getItem("auth-token"));
        fetchAddress(localStorage.getItem("auth-token"))
            .then((resp) => { setAddresses(resp); })
            .catch((error) => {
                setTdisplay("block");
                setToastBody({ ToastHeading: "Error", ToastBody: "Internal Server Error" });
            })
    }, [])

    return (
        <div className={props?"block":"hidden"}>
            <Toast className="bottom-40" />
            <div className="flex w-[46rem] mx-auto my-6 space-x-10">
                <div className="savedAdd border border-indigo-900 rounded-lg px-10 py-4 w-full">
                    <p className="text-2xl text-center">Saved Addresses</p>
                    <div className="addresses max-h-24 overflow-y-scroll">
                        {
                            Array.isArray(Addresses) && Addresses.length !== 0 ? Addresses.map((item, index) => {
                                return (<div className="flex pr-10 items-center justify-between" key={index}>
                                    <div className="add">
                                        <p className="my-2">{index + 1}. {item}</p>
                                    </div>
                                    <div className="icon cursor-pointer" onClick={()=>{deleteAddress(index)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>

                                    </div>
                                </div>)
                            }) : <p className="my-2 text-center">No addresses saved yet.</p>
                        }
                    </div>
                </div>
                <form className="w-full">
                    <p className="text-2xl text-center my-3 mb-5">Add Address</p>
                    <div className="mb-6">
                        <input type="text" id="phone" className="focus:bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 focus:outline-none block w-full p-2.5 font-medium" required autoComplete='off' placeholder="With PinCode" value={Address} onChange={onChange}/>
                    </div>
                    <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-md text-md px-5 py-2 text-center w-full" onClick={submit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Address