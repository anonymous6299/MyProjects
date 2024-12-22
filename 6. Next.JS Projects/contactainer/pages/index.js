import Head from "next/head";
import Form from "@/components/Form";
import NavBar from "@/components/NavBar";
import AllContacts from "@/components/AllContacts";

export default function Home(props) {
  const {data} = props
  return (
    <>
      <Head>
        <title>Contactainer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20220615/094749/1089256194222587913/1089256194222587913.png" />
      </Head>
      <NavBar/>
      <div className="container text-center my-5"><h2>Contactainer - Store your Contacts</h2></div>
      <Form/>
      <AllContacts data={data.data}/>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/fetchContacts"
    ,{
    method:'GET',
    headers:{'Content-Type':'application/json'
    }
  }
)
  const data = await res.json()
  return { props: { data } }
}
