import React from 'react';

const SignInPage = () => {
    return (
         <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>
      {/* <form onSubmit={onSubmit}> */}
      <form>
        <fieldset className="fieldset   rounded-box w-md">

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
          <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            সাইন ইন
          </button>
        </fieldset>
      </form>

         {/* <button onClick={handleGoogleSignIn} className="btn ">Sign In With Google</button>
      <button onClick={handleGithubSignIn} className="btn ">Sign In With Github</button> */}
    </div>
    );
};

export default SignInPage;