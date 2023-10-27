"use client"

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { auth } from "@config/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser: any) => {
      if (authUser) {
        setUser(authUser);
        const uid = authUser.uid;
        console.log("uid", uid);
      } else {
        setUser(null);
        console.log("user is logged out");
      }
    });
  }, []);
  

  const handleLogout = () => {               
    signOut(auth).then(() => {
        window.location.href = "/";
        console.log("Signed out successfully")
    }).catch((error) => {
      console.log(error)
    });
  }
  
  return(
    <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      {user ? (
        <div>
          <p>Bienvenue Root</p>
          <CustomButton
            title='Sign out'
            btnType='button'
            containerStyles='text-yellow-500 rounded-full bg-white min-w-[130px]'
            handleClick={handleLogout}
          />
        </div>
      ) : (
        <Link href="/login">
          <CustomButton
            title='Sign in'
            btnType='button'
            containerStyles='text-yellow-500 rounded-full bg-white min-w-[130px]'
          />
        </Link>
      )}
    </nav>
  </header>
  )
};

export default NavBar;
