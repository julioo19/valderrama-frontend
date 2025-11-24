"use client"
import React, { useState } from 'react'
import { ProductType } from '../types'
import { Minus, Plus, ShoppingCart, TypeOutline } from 'lucide-react'
import useCartStore from '../stores/cartStore';
import { toast } from 'react-toastify';

const ProductInteraction = ({ product }: { product: ProductType }) => {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCartStore();

    const handleQuantityChange = (type: "increment" | "decrement") => {
        if (type === "increment") {
            setQuantity((prev) => prev + 1);
        } else {
            if (quantity > 1) {
                setQuantity((prev) => prev - 1);
            }
        }
    }

    const handleAddToCart = () => {
        addToCart({
            ...product, quantity
        });
        toast.success("Producto agregado al carrito")
    }
    return (
        <div className='flex flex-col gap-4 mt-4'>
            {/* Quantity*/}
            <div className='flex flex-col gap-2 text-sm'>
                <span className='text-gray-500'>Cantidad</span>
                <div className='flex items-center gap-2'>
                    <button className='cursor-pointer border border-gray-300 p-1' onClick={() => handleQuantityChange("decrement")}>
                        <Minus className='w-4 h-4' />
                    </button>
                    <span>{quantity}</span>
                    <button className='cursor-pointer border border-gray-300 p-1' onClick={() => handleQuantityChange("increment")}>
                        <Plus className='w-4 h-4' />
                    </button>
                </div>
            </div>
            {/* Buttons*/}
            <button onClick={handleAddToCart} className='bg-green-600 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium'>
                <Plus className='w-4 h-4'/>
                Añadir al carrito
            </button>
            <button className='ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer text-sm font-medium'>
                <ShoppingCart className='w-4 h-4' />
                Comprar Ahora
            </button>
        </div>
    );
};

export default ProductInteraction