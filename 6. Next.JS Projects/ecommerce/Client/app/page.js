"use client"
import NavBar from "@/components/NavBar";
import PdCard from "@/components/PdCard";
import Slider from "@/components/Slider";
import ConnectDB from "@/database/Connect";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";


export default function Home() {
  const router = useRouter();
  const [Adventure, setAdventure] = useState([]);
  const [Mystery, setMystery] = useState([]);
  const [Horror, setHorror] = useState([]);
  const [Comics, setComics] = useState([]);
  const [Fiction, setFiction] = useState([]);
  const [History, setHistory] = useState([]);
  const [Price, setPrice] = useState([]);
  const [DB, setDB] = useState(true);

  const getBooks = async(cat,qty) => {
    const data = await (await fetch("/api/GetBooks/",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({category:cat,all:qty})
    })).json();
    return data;
  }
  useEffect(() => {
    if (DB) {
      ConnectDB().then(()=>{setDB(false)}).catch((error)=>{console.log("error:\n",error)})
    }
    if (!(localStorage.getItem('auth-token'))) {
      router.push("/SignIn");
    }
    getBooks("MY",2).then((resp)=>{setMystery(resp.message)});
    getBooks("AD",2).then((resp)=>{setAdventure(resp.message)});
    getBooks("HO",2).then((resp)=>{setHorror(resp.message)});
    getBooks("CO",2).then((resp)=>{setComics(resp.message)});
    getBooks("FI",2).then((resp)=>{setFiction(resp.message)});
    getBooks("HI",2).then((resp)=>{setHistory(resp.message)});
    fetch("/api/GetBooks",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({lowerprice:299,all:true})
    }).then((resp)=>{return resp.json()}).then((resp)=>{setPrice(resp.message)})
  }, [])
  return (
    <>
      <div className="overflow-x-hidden">
      <NavBar />
      <Slider/>
      <div className="CardRow px-12 flex justify-between min-[1267px]:space-x-4 max-[1267px]:flex-col max-[1267px]:space-y-4 ">
        <PdCard props={{title:"BookMerce Best Seller",wfull:false}}/>
        <PdCard props={{title:"Get Delivered Today",wfull:false}}/>
        <PdCard props={{title:"Best Books upto ₹299",Price,wfull:false}}/>
      </div>
      <div className="CardRow px-12 flex justify-between flex-col max-[1005px]:space-y-4 space-y-8 mt-20">
        <PdCard props={{title:"Mystery & Horror",arr:Mystery.concat(Horror),wfull:true}}/>
        <PdCard props={{title:"Adventure & Comics",arr:Adventure.concat(Comics),wfull:true}}/>
        <PdCard props={{title:"Fiction and History",arr:Fiction.concat(History),wfull:true}}/>
      </div>
      </div>
    </>
  );
}
