"use client"
import { useState } from "react"
import { useRouter } from 'next/router'

const Form = () => {
  const router = useRouter()
  const [Contact, setContact] = useState({Cname:"",phoneNo:"",SphoneNo:""})

  const onChange = (e) => {
    setContact({...Contact,[e.target.name]:e.target.value})
  }

  const Submit = async(e) => {
    e.preventDefault()

    let data = await fetch("http://localhost:3000/api/addContact",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(Contact)
    })
    data=await data.json()
    router.push("/")
  }
  return (
    <>
    
    <div className="container">
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input autoComplete="off" required type="text" name="Cname" className="form-control" id="exampleInputEmail1" value={Contact.Cname} onChange={onChange} aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Contact Number</label>
        <input autoComplete="off" required type="text" name="phoneNo" value={Contact.phoneNo} onChange={onChange} className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">Secondary Contact Number</label>
        <input autoComplete="off" type="text" className="form-control" name="SphoneNo" id="exampleInputPassword2" value={Contact.SphoneNo} onChange={onChange} placeholder="Type none if none" />
      </div>
      <div className="d-flex justify-content-end"><button type="submit" className="btn btn-primary my-3" onClick={Submit} >Submit</button></div>
    </form>
    </div>
    </>
  )
}

export default Form