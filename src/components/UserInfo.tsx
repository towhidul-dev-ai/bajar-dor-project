// 'use client';
// import { authClient } from '@/lib/auth-client';
// import Link from 'next/link';
// import React from 'react';

// const UserInfo = () => {
//     const {data: session} = authClient.useSession()
//     const user = session?.user
//     console.log(user)

//     const handleSignOut = async ()=>{
//         await authClient.signOut();
//     }
//     return (
//         <div>
//             {
//                 user ? ( 
//                 <div className='flex flex-col items-center gap-2'>
//             <Link href={'/profile'}>
//             <div className="avatar">
//   <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
//     <img alt="Tailwind-CSS-Avatar-component"
//      src= {user?.image as string}
//      />
//   </div>
// </div>
                 
//                  </Link>   

// <h2>{user?.name}</h2>
// <button onClick={handleSignOut} className='btn btn-error btn-xs'>SignOut</button>

//                 </div> 
//                  ) : (
//                 <div className="flex shrink-0 items-center gap-3 sm:gap-6">
//          <Link href={'/signin'}>
//           <button
//             type="button"
//             className="rounded-lg px-3 py-2.5 font-semibold text-gray-800 transition-colors hover:bg-green-50 hover:text-green-700"
//           >
//             সাইন ইন
//           </button>
//          </Link>

//          <Link href={'/signup'}>
//           <button
//             type="button"
//             className="rounded-xl bg-green-700 px-4 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-800 hover:shadow-lg active:scale-95 sm:px-5"
//           >
//             সাইন আপ
//           </button>
//          </Link>
//         </div>
//             )}
            
//         </div>
//     );
// };

// export default UserInfo;

"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const UserInfo = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [open, setOpen] = useState(false);

  // Sign Out
  const handleSignOut = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error("সাইন আউট করতে সমস্যা হয়েছে।");
      return;
    }

    setOpen(false);
    toast.success("সফলভাবে সাইন আউট হয়েছে!");
  };

  // User is not logged in
  if (!user) {
    return (
      <div className="flex shrink-0 items-center gap-3 sm:gap-6">
        <Link
          href="/signin"
          className="rounded-lg px-3 py-2.5 font-semibold text-gray-800 transition-colors hover:bg-green-50 hover:text-green-700"
        >
          সাইন ইন
        </Link>

        <Link
          href="/signup"
          className="rounded-xl bg-green-700 px-4 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-800 hover:shadow-lg active:scale-95 sm:px-5"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  const firstLetter = user.name?.charAt(0).toUpperCase() || "U";

  return (
    <div className="relative">
      {/* User Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-50"
      >
        {/* Avatar */}
        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-green-700 text-sm font-semibold text-white">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || "User"}
              className="h-full w-full object-cover"
            />
          ) : (
            firstLetter
          )}
        </div>

        {/* User Name */}
        <span className="hidden max-w-40 truncate font-medium text-gray-800 sm:block">
          {user.name}
        </span>

        {/* Dropdown Arrow */}
        <span className="text-xs text-gray-500">
          ▼
        </span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 top-12 z-50 w-80 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl">
          {/* User Information */}
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              {user.name}
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              {user.email}
            </p>
          </div>

          {/* My Profile */}
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-800 transition hover:bg-gray-100"
          >
            <span className="text-lg">👤</span>

            <span className="font-medium">
              আমার প্রোফাইল
            </span>
          </Link>

          {/* Sign Out */}
          <button
            type="button"
            onClick={handleSignOut}
            className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-red-500 transition hover:bg-red-50"
          >
            <span className="text-lg">↪</span>

            <span className="font-medium">
              সাইন আউট
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;