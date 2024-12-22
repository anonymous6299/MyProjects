import Products from "@/components/Products"
import NavBar from "@/components/NavBar"


const page = () => {
  return (
    <>
    <NavBar/>
    <h2 className="text-3xl my-10 text-center">Your Returns</h2>
    <div className="flex items-center space-y-10 flex-col my-10">
    <Products/>
    </div>
    </>
  )
}

export default page