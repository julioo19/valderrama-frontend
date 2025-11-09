import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import SearchBar from "@/src/components/SearchBar";
import { Bell, Home, ShoppingCart, User } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
      <Link href="/" className='flex items-center gap-2'>
        <Image
          src="/bazarplus-logo.png"
          alt="BazarPlus"
          width={36}
          height={36}
          className='w-6 h-6 md:w-9 md:h-9' />
        <p className='hidden md:block text-md font-medium tracking-wider'>VALDERRAMA</p>
      </Link>
      {/* RIGHT */}
      <div className='flex items-center gap-6'>
        <SearchBar />
        <Link href={"/"}>
          <Home className='w-4 h-4 text-black ' />
        </Link>
        <Bell className='w-4 h-4 text-black ' />
        <ShoppingCart className='w-4 h-4 text-black ' />
        <Link href={"/login"}>
          {/* Icono de Usuario, si lo tienes */}
          <User className='w-4 h-4 text-black'/>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;