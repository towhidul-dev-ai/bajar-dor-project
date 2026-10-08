import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/logo-icon.png";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo and Website Info */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-700 text-2xl">
            🛒
          </div>
           {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-green-700 p-1.5 shadow-sm"> */}
           {/* <Image
//               src={Logo}
//               width={48}
//               height={48}
//               alt="বাজার দর লোগো"
//               priority
//               className="h-full w-full object-contain"
//             />
//           </div> */}

          <div>
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
              বাজার দর
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              বুধবার, ৭ অক্টোবর, ২০২৬
            </p>
          </div>
        </Link>

        {/* Authentication Buttons */}
        <UserInfo />
      </div>

      {/* Category Navigation */}
      <NavLinks />
    </header>
  );
};

export default Header;