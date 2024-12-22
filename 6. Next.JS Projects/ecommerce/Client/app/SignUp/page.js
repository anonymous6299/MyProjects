"use client"
import Toast from '@/components/Toast'
import { Context } from '@/contextAPI/context'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'


const SignUp = () => {
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      router.push("/");
    }
  }, [])
  const router = useRouter();
  const context = useContext(Context);
  const { Tdisplay, bDisplay, toastBody, setToastBody, setTdisplay, setBDisplay } = context;
  const [FormInput, setFormInput] = useState({ username: "", phone: "", password: "" });

  const onChange = (e) => {
    setFormInput({ ...FormInput, [e.target.name]: e.target.value })
  };

  const Submit = async (e) => {
    e.preventDefault();
    const data = await (await fetch("/api/SignUp", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(FormInput)
    })).json();
    if (!data.success) {
      setBDisplay({ display: "hidden", url: "", btnBody: "" });
      setTdisplay("block");
      setToastBody({ ToastHeading: "Errors Detected", ToastBody: data.message });
    }
    else {
      if (data.newUserCreated) {
        setBDisplay({ display: "hidden", url: "", btnBody: "" });
        setTdisplay("block");
        setToastBody({ ToastHeading: "Account Created", ToastBody: data.message });
        localStorage.setItem('auth-token',data.AuthToken);
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
      else {
        setBDisplay({ display: "hidden", url: "", btnBody: "" });
        setTdisplay("block");
        setToastBody({ ToastHeading: "Login Failed", ToastBody: data.message });
      }
    }
  }
  return (
    <>
      <Toast />
      <div className='signup w-fit mx-auto'>
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
        <p className="text-2xl font-medium my-4 text-center">Create Account</p>
        <form className="max-w-[25rem] mx-auto">
          <div className="mb-5">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-indigo-900">Username</label>
            <input type="text" id="username" className="focus:bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 focus:outline-none block w-full p-2.5 font-medium" required autoComplete='off' value={FormInput.username} onChange={onChange} name='username' />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-indigo-900">Phone Number</label>
            <input type="text" id="phone" className="focus:bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 focus:outline-none block w-full p-2.5 font-medium" required autoComplete='off' value={FormInput.phone} onChange={onChange} name='phone' />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-indigo-900">Password</label>
            <input type="password" id="password" className="focus:bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 focus:outline-none block w-full p-2.5 font-medium" required autoComplete='off' value={FormInput.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-md text-sm px-5 py-2.5 text-center w-full" onClick={Submit}>Submit</button>
        </form>
      </div>

    </>
  )
}

export default SignUp