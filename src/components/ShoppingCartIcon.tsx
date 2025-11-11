"use client"
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ShoppingCartIcon = () => {
  return (
    <Link href="/cart" className='relative'>
        <ShoppingCart className='w-4 h-4 text-black'/>
        <span className='absolute -top-3 -right-3 bg-sky-400 text-black rounded-full w-4 h-4 flex items-center
        justify-center text-sm font-medium'>0</span>
    </Link>
  )
}

export default ShoppingCartIcon