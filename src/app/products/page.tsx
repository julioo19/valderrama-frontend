import ProductList from '@/src/components/ProductList';
import React from 'react'



const ProductPage  = async ({
    searchParams,
}: {
    searchParams: Promise<{ category: string }>;
}) => {
    const category = (await searchParams).category;
    return (
        <ProductList category={category} params='products'/>
    )
}

export default ProductPage