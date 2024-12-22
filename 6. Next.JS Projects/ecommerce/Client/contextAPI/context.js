'use client'
const { createContext, useState } = require("react");

export const Context = createContext();

export const ContextState = (props) => {
    const [Tdisplay, setTdisplay] = useState("hidden");
    const [UserAddress, setUserAddress] = useState([]);
    const [bDisplay, setBDisplay] = useState({display:"hidden",url:"",btnBody:""});
    const [toastBody, setToastBody] = useState({ToastHeading:"",ToastBody:""})
    const [AddressLength, setAddressLength] = useState(0);
    return (
        <Context.Provider value={{Tdisplay,bDisplay,toastBody, setToastBody,setTdisplay,setBDisplay,UserAddress,setUserAddress}}>
            {props.children}
        </Context.Provider>
    )
}