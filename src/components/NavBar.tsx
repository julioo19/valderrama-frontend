import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import SearchBar from "@/src/components/SearchBar";
import { Bell, Home, ShoppingCart, User } from 'lucide-react';
import ShoppingCartIcon from './ShoppingCartIcon';
import LoginButton from '@/components/ui/LoginLogoutButton';

const NavBar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-200 pb-4'>
      <Link href="/" className='flex items-center gap-2'>
        <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg"'>
          🛒
        </div>
        <p className='hidden md:block text-md font-medium text-primary tracking-wider'>Bazar+</p>
      </Link>
      {/* RIGHT */}
      <div className='flex items-center gap-6'>
        <SearchBar />
        <Link href={"/"}>
          <Home className='w-4 h-4 text-black ' />
        </Link>
        <Bell className='w-4 h-4 text-black ' />
        <ShoppingCartIcon />
        <LoginButton/>
      </div>
    </nav>
  )
}

export default NavBar;