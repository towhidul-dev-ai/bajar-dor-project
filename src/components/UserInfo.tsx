'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const UserInfo = () => {
    const {data: session} = authClient.useSession()
    const user = session?.user
    console.log(user)

    const handleSignOut = async ()=>{
        await authClient.signOut();
    }
    return (
        <div>
            {
                user ? ( 
                <div className='flex flex-col items-center gap-2'>
                    <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
    <img alt="Tailwind-CSS-Avatar-component"
     src= {user?.image as string}
     />
  </div>
</div>

<h2>{user.name}</h2>
<button onClick={handleSignOut} className='btn btn-error btn-xs'>SignOut</button>

                </div> 
                 ) : (
                <div className="flex shrink-0 items-center gap-3 sm:gap-6">
          <button
            type="button"
            className="rounded-lg px-3 py-2.5 font-semibold text-gray-800 transition-colors hover:bg-green-50 hover:text-green-700"
          >
            সাইন ইন
          </button>

          <button
            type="button"
            className="rounded-xl bg-green-700 px-4 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:bg-green-800 hover:shadow-lg active:scale-95 sm:px-5"
          >
            সাইন আপ
          </button>
        </div>
            )}
            
        </div>
    );
};

export default UserInfo;