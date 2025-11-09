"use client"

import React from 'react'
import { ProductType } from '../types'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden'>
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
        <div className='relative aspect-2/3'>
          <Image src={product.images.main}
            alt={product.name}
            fill className='object-cover hover:scale-105 transition-all duration-300' />
        </div>
      </Link>
      {/* PRODUCT DETAIL*/}
      <div className='flex flex-col gap-4 p-4'>
        <h1 className='font-medium '>{product.name}</h1>
        <p className='text-sm text-primary-light'>{product.shortDescription}</p>

        {/* PRICE AND CART BUTTON*/}
        <div className='flex items-center justify-between'>
          <p className='font-medium'>${product.price.toFixed(2)}</p>
          <button className='ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2'>
            <ShoppingCart className='w-4'/>
            Añadir al carrito
            </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard