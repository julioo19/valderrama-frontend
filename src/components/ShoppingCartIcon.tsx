"use client"
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import useCartStore from '../stores/cartStore'

const ShoppingCartIcon = () => {
  const {cart, hasHydrated} = useCartStore();

  if(!hasHydrated) return null;
  return (
    <Link href="/cart" className='relative'>
        <ShoppingCart className='w-4 h-4 text-black'/>
        <span className='absolute -top-3 -right-3 bg-green-500 text-black rounded-full w-4 h-4 flex items-center
        justify-center text-sm font-medium '>{cart.reduce((acc, item)=> acc + item.quantity,0)}</span>
    </Link>
  )
}

export default ShoppingCartIcon