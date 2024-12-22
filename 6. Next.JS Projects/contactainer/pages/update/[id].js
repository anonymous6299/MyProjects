"use client"
import { useState } from "react";
import Head from "next/head";
import NavBar from "@/components/NavBar"
import { useRouter } from "next/router";

const Update = (props) => {
  const router = useRouter()
  const {data} = props
  const [Data, setData] = useState({id:data.data._id,Cname:data.data.Cname,phoneNo:data.data.phoneNo,SphoneNo:data.data.SphoneNo})

  const onChange = (e) => {
    setData({...Data,[e.target.name]:e.target.value})
  }

  const Submit = async(e) => {
    e.preventDefault()
    const data = await fetch("http://localhost:3000/api/updateContact",{
      method:'PUT',
      headers:{"Content-Type" : 'application/json'},
      body:JSON.stringify(Data)
    })
    router.push("/")
    
  }

  return (
    <>
    <Head>
        <title>Update Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20220615/094749/1089256194222587913/1089256194222587913.png" />
      </Head>
    <NavBar/>
    <div className="container">
      <h2 className="my-5 text-center">Update Contact</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input autoComplete="off" required type="text" name="Cname" className="form-control" id="exampleInputEmail1" 

        value={Data.Cname} onChange={onChange} 
        
        aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Contact Number</label>
        <input autoComplete="off" required type="text" name="phoneNo" 
        value={Data.phoneNo} onChange={onChange}
        
        className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword2" className="form-label">Secondary Contact Number</label>
        <input autoComplete="off" type="text" className="form-control" name="SphoneNo" id="exampleInputPassword2" 
        value={Data.SphoneNo} onChange={onChange} 
        placeholder="Tyepe none if none" />
      </div>
      <div className="d-flex justify-content-end"><button type="submit" className="btn btn-primary my-3" 
      onClick={Submit} 
      >Submit</button></div>
    </form>
    </div>
    </>
  )
}

export async function getServerSideProps(context) {
  
  const {params} = context
  const {id} = params
  const res = await fetch(`http://localhost:3000/api/getUpdContact/${id}`
    ,{
    method:'GET',
    headers:{'Content-Type':'application/json'
    }
  }
)
  const data = await res.json()
  return { props: { data } }
}

export default Update