import React from "react";

const Loading = () => {
  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center">

        {/* Logo / Brand */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-2xl bg-primary text-primary-content flex items-center justify-center shadow-lg">
            <span className="text-2xl font-black">ব</span>
          </div>
        </div>

        {/* Loading Spinner */}
        <span className="loading loading-spinner loading-lg text-primary"></span>

        {/* Loading Text */}
        <h2 className="mt-5 text-xl font-bold text-base-content">
          একটু অপেক্ষা করুন
        </h2>

        <p className="mt-2 text-sm text-base-content/60">
          আপনার জন্য পেজটি প্রস্তুত করা হচ্ছে...
        </p>

        {/* Loading Progress */}
        <div className="mt-6 w-48">
          <progress
            className="progress progress-primary w-full"
          />
        </div>

        {/* Brand */}
        <p className="mt-6 text-xs text-base-content/40">
          বাজার দর
        </p>
      </div>
    </main>
  );
};

export default Loading;
