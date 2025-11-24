import ProductInteraction from '@/src/components/ProductInteraction';
import { ProductType } from '@/src/types'
import Image from 'next/image';
import React from 'react'

//temporary
const product: ProductType = {
    id: 1,
    name: "Laptop Magna Aliqua",
    shortDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 1299.99,
    images: {
        main: "/products/1g.png",
    },
};
//

const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
    return (
        <div className='flex flex-col gap-4 lg:flex-row md:gap-12 mt-12'>
            {/*Image */}
            <div className='w-full lg:w-5/12 relative aspect-2/3'>
                <Image
                    src={product.images.main} alt={product.name}
                    fill
                    className='object-contain rounded-md'
                />
            </div>
            {/* Details*/}
            <div className='w-full lg:w-7/12 flex flex-col gap-4'>
                <h1 className='text-2xl font-medium'>{product.name}</h1>
                <p className='text-gray-500'>{product.longDescription}</p>
                <h2 className='text-2xl font-semibold'>S/. {product.price.toFixed(2)}</h2>
                <ProductInteraction product={product}/>
                {/* Card info */}
                <div className='flex items-center gap-2 mt-4'>
                    <Image src="/cards.png" alt='cards' width={50} height={25} className='rounded-md' />
                    <Image src="/stripe.png" alt='cards' width={50} height={25} className='rounded-md' />
                </div>
                <p className='text-gray-500 text-xs'>
                    Al hacer click en Pagar Ahora, aceptas nuestros {" "}
                    <span className='underline hover:text-black'>Terminos y Condiciones</span>{" "}
                    y <span className='underline hover:text-black'>Politica de Privacidad</span>
                    . Nos autorizas a cobrar el importe total indicado a través del método de pago seleccionado. Todas las ventas están sujetas a nuestras {" "}
                    <span className='underline hover:text-black'>Políticas de devolución y reembolso.</span>
                </p>
            </div>
        </div>
    )
}

export default ProductPage