import { useRouter } from 'next/navigation'

const IndContacts = (props) => {
  const router = useRouter()
  const {contact} = props


  return (
    <>
    <div className="card my-5" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{contact.Cname}</h5>
        {contact.createdAt===contact.updatedAt?
        <p className="card-text d-flex align-items-center" style={{height:"40px"}}>
          Added {contact.createdAt.slice(0,10)}
        </p>
        :
        <p className="card-text">
          
          Added {contact.createdAt.slice(0,10)}
          <br/>
          Updated {contact.updatedAt.slice(0,10)}
        </p>
          }
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{contact.phoneNo}</li>
        <li className="list-group-item">{contact.SphoneNo==="none"?"No Secondary Phone No":contact.SphoneNo}</li>
      </ul>
      <div className="container d-flex justify-content-between my-2">
      <button type="button" className="btn btn-primary" 
      onClick={()=>{router.push(`/update/${contact._id}`)}} 
      style={{width:"125px"}}>Update</button>
      <button type="button" className="btn btn-primary"
      
      onClick={
        async() => {
          await fetch( `http://localhost:3000/api/deleteContact/${contact._id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
          })
          router.push("/")
        }
      }


      style={{width:"125px"}}>Delete</button>
      </div>
    </div>
    </>
  )
}

export default IndContacts