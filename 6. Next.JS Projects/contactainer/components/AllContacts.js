import { useEffect, useState } from "react"
import IndContacts from "./IndContacts"


const AllContacts = (props) => {

  return (
    <>
    
    <div className="container">
        <h2>Contacts</h2>
        <div className="d-flex flex-wrap justify-content-between">
        {props.data?props.data.map((item,index)=>{return <IndContacts contact={item} key={index} />}):<h4>All your Contacts shall appear here.</h4>}
        </div>
    </div>
    </>
  )
}

export default AllContacts