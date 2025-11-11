import React from 'react'
import { ProductsType } from '../types'
import Categories from './Categories'
import ProductCard from './ProductCard'
import Link from 'next/link'
import Filter from './Filter'

//luego cambiar por el API del backend
const products: ProductsType = [
    {
        id: 1,
        name: "Laptop Magna Aliqua",
        shortDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 1299.99,
        images: {
            main: "/products/1g.png",
        },
    },

    {
        id: 2,
        name: "Smartphone Adipiscing Elit",
        shortDescription: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        longDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        price: 749.50,
        images: {
            main: "/products/2gr.png",

        },
    },
    {
        id: 3,
        name: "Auriculares Ut Labore",
        shortDescription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
        longDescription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        price: 99.95,
        images: {
            main: "/products/3bl.png",
        },
    },
    {
        id: 4,
        name: "Mouse Qui Officia",
        shortDescription: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
        longDescription: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
        price: 45.00,
        images: {
            main: "/products/4w.png"
        },
    },
    {
        id: 5,
        name: "Teclado Voluptatibus",
        shortDescription: "Omnis voluptas assumenda est, omnis dolor repellendus.",
        longDescription: "Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
        price: 135.75,
        images: {
            main: "/products/5r.png",
        }
    },
    {
        id: 6,
        name: "Monitor Repudiandae",
        shortDescription: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.",
        longDescription: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        price: 450.00,
        images: {
            main: "/products/6g.png"
        }
    },
    {
        id: 7,
        name: "Webcam Totam Rem Aperiam",
        shortDescription: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
        longDescription: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
        price: 65.99,
        images: {
            main: "/products/7g.png",
        }
    },
    {
        id: 8,
        name: "Disco Duro Similique",
        shortDescription: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        longDescription: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        price: 89.90,
        images: {
            main: "/products/8b.png",
        },
    },
]

const ProductList = ({category, params}: {category:string, params: "homepage" | "products" }) => {
    return (
        <div className='w-full'>
            <Categories />
            {params === "products" && <Filter/>} 
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Link href={category ? `/products/?category=${category}` : "/products"} 
            className='flex justify-end'>Ver todos los productos</Link>
        </div>
    );
};

export default ProductList;