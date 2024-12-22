"use client"
import Toast from "@/components/Toast"
import { Context } from "@/contextAPI/context"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"


const SignIn = () => {
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      router.push("/");
    }
  }, [])
  const router = useRouter();
  const context = useContext(Context);
  const { setToastBody, setTdisplay, setBDisplay } = context;
  const [FormInput, setFormInput] = useState({ phone: "", password: "" })

  const onChange = (e) => {
    setFormInput({ ...FormInput, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault();
    const data = await (await fetch("/api/SignIn", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(FormInput)
    })).json();
    if (!data.success) {
      setTdisplay("block");
      setToastBody({ ToastHeading: "Errors Detected", ToastBody: data.message });
    }
    else {
      if (data.userLoggedIn) {
        setTdisplay("block");
        setToastBody({ ToastHeading: "Logged In", ToastBody: data.message });
        localStorage.setItem('auth-token',data.AuthToken);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
      else {
        setTdisplay("block");
        setBDisplay({ display: "block", url: "/SignUp", btnBody: "Sign Up" });
        setToastBody({ ToastHeading: "Login Failed", ToastBody: data.message });
      }
    }

  }
  return (
    <>
      <Toast />
      <div className="signin w-fit mx-auto mt-[10%]">
        <div className='logo mt-20 mb-2 flex items-center justify-between'>
          <Link href={"/"}>
            <Image
              src={"/static/logo.png"}
              width={70}
              height={0}
              alt="logo"
              priority
              style={{ width: "auto", height: "auto", margin: "0px auto" }} />
          </Link>
          <p className="text-5xl font-medium ml-4">BookMerce</p>
        </div>
        <p className="text-2xl font-medium w-fit my-4">Sign In</p>
        <form className="max-w-[25rem] mx-auto">
          <div className="mb-5">
            <input type="text" id="phone" className="focus:bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 focus:outline-none block w-full p-2.5 font-medium" required autoComplete='off' placeholder="Phone Number" value={FormInput.phone} onChange={onChange} name="phone" />
          </div>
          <div className="mb-5">
            <input type="password" id="password" className="focus:bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-md focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 focus:outline-none block w-full p-2.5 font-medium" required autoComplete='off' placeholder="Password" value={FormInput.password} onChange={onChange} name="password" />
          </div>
          <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-md text-md px-5 py-2 text-center w-full" onClick={submit}>Submit</button>
          <div className="alt">
            <Link href={"SignUp"}>
              <p className="text-sm my-4 text-center hover:underline">
                Not having an Account?
              </p>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignIn