// 'use client';
// import { authClient } from '@/lib/auth-client';
// import { redirect } from 'next/navigation';
// import React from 'react';

// const SignUpPage = () => {
//     const onSubmit = async (e:React.SubmitEvent<HTMLElement>) => {
//       e.preventDefault()
//       const formData = new FormData(e.target)
//       const user = Object.fromEntries(formData.entries()) as {name: string, email: string, password: string,}
//     //   console.log(user);
//     const {data, error} = await authClient.signUp.email({
//         ...user,
//         callbackURL: "/"
//      })

//      if(data){
//         console.log(data)
//         redirect('/')
        
//      }
//      if(error){
//         console.log(error)
//      }
//     }
//     const handleGoogleSignIn = async() => {
//             const data = await authClient.signIn.social({
//             provider: "google",
//               });
//               console.log(data)
//            }
         
    
//            const handleGithubSignIn = async ()=>{
//              const data = await authClient.signIn.social({
//             provider: "github",
//               });
//               console.log(data)
    
//            }
//     return (
//          <div className="flex flex-col items-center justify-center mt-5">
//       <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>
//       <form onSubmit={onSubmit}>
//         <fieldset className="fieldset   rounded-box w-md">
//           <label className="label">নাম</label>
//           <input
//             name="name"
//             type="text"
//             className="input w-md"
//             placeholder="রহিম উদ্দিন"
//           />

//           <label className="label">ইমেইল</label>
//           <input
//             name="email"
//             type="email"
//             className="input w-md"
//             placeholder="you@example.com"
//           />

//           <label className="label">পাসওয়ার্ড</label>
//           <input
//             name="password"
//             type="password"
//             className="input w-md"
//             placeholder="কমপক্ষে ৮ অক্ষর"
//           />
//           <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
//           <input
//             name="password"
//             type="password"
//             className="input w-md"
//             placeholder="আবার লিখুন"
//           />

//           <button type="submit" className="btn text-white bg-red-700 mt-4 ">
//             অ্যাকাউন্ট তৈরি করুন
//           </button>
//         </fieldset>
//       </form>

//           <button onClick={handleGoogleSignIn} className="btn ">Sign In With Google</button>
//       <button onClick={handleGithubSignIn} className="btn ">Sign In With Github</button> 
//     </div>
//     );
// };

// export default SignUpPage;
 "use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    if (user.password !== user.confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি একই নয়।");
      return;
    }

    if (user.password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "অ্যাকাউন্ট তৈরি করতে সমস্যা হয়েছে।");
      return;
    }

    if (data) {
      toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Google দিয়ে সাইন আপ করা যায়নি।");
    }
  };

  const handleGithubSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "GitHub দিয়ে সাইন আপ করা যায়নি।");
    }
  };

  return (
    <main className="min-h-screen bg-[#F1F7F3] px-4 py-10 md:py-14">
      <div className="mx-auto max-w-xl">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            সাইন আপ
          </h1>

          <p className="mt-2 text-sm text-gray-500 md:text-base">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্ট তৈরি করুন।
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <form onSubmit={onSubmit}>

            {/* Name */}
            <fieldset className="fieldset">
              <label className="label text-sm font-medium">
                নাম
              </label>

              <input
                name="name"
                type="text"
                required
                className="input w-full"
                placeholder="রহিম উদ্দিন"
              />
            </fieldset>

            {/* Email */}
            <fieldset className="fieldset mt-3">
              <label className="label text-sm font-medium">
                ইমেইল
              </label>

              <input
                name="email"
                type="email"
                required
                className="input w-full"
                placeholder="you@example.com"
              />
            </fieldset>

            {/* Password */}
            <fieldset className="fieldset mt-3">
              <label className="label text-sm font-medium">
                পাসওয়ার্ড
              </label>

              <input
                name="password"
                type="password"
                required
                className="input w-full"
                placeholder="কমপক্ষে ৮ অক্ষর"
              />
            </fieldset>

            {/* Confirm Password */}
            <fieldset className="fieldset mt-3">
              <label className="label text-sm font-medium">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <input
                name="confirmPassword"
                type="password"
                required
                className="input w-full"
                placeholder="আবার লিখুন"
              />
            </fieldset>

            {/* Sign Up */}
            <button
              type="submit"
              className="btn mt-5 w-full border-0 bg-[#05893E] text-white hover:bg-[#047A37]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-sm text-gray-500">
              অথবা
            </span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn btn-outline"
            >
              🌐 Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={handleGithubSignIn}
              className="btn btn-outline"
            >
              ◉ GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Sign In */}
          <p className="mt-6 text-center text-sm text-gray-500">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signin"
              className="font-semibold text-[#05893E] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        {/* Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 underline hover:text-[#05893E]"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;