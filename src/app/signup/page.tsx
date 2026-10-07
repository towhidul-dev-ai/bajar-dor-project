'use client';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';

const SignUpPage = () => {
    const onSubmit = async (e:React.SubmitEvent<HTMLElement>) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string,}
    //   console.log(user);
    const {data, error} = await authClient.signUp.email({
        ...user,
        callbackURL: "/"
     })

     if(data){
        console.log(data)
        redirect('/')
        
     }
     if(error){
        console.log(error)
     }
    }
    return (
         <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset   rounded-box w-md">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="রহিম উদ্দিন"
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="you@example.com"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="কমপক্ষে ৮ অক্ষর"
          />
          <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="আবার লিখুন"
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </fieldset>
      </form>

         {/* <button onClick={handleGoogleSignIn} className="btn ">Sign In With Google</button>
      <button onClick={handleGithubSignIn} className="btn ">Sign In With Github</button> */}
    </div>
    );
};

export default SignUpPage;