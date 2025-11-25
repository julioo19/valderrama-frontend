"use client"

import PaymentForm from "@/src/components/PaymentForm"
import ShippingForm from "@/src/components/ShippingForm"
import useCartStore from "@/src/stores/cartStore"
import { CartItemsType, ShippingFormInputs } from "@/src/types"
import { ArrowRight, Trash2 } from "lucide-react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

const steps = [
    {
        id: 1,
        title: "Carrito de compras"
    },
    {
        id: 2,
        title: "Direccion de envio"
    },
    {
        id: 3,
        title: "Metodo de pago"
    }
]

/*/temporal
const cartItems: CartItemsType = [
    {
        id: 1,
        name: "Laptop Magna Aliqua",
        shortDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
        longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: 1299.99,
        images: {
            main: "/products/1g.png",
        },
        quantity: 1
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
        quantity: 1
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
        quantity: 1
    },
]
/*/

const CartPage = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [shippingForm, setShippingForm] = useState<ShippingFormInputs>()
    const activeStep = parseInt(searchParams.get("step") || "1");
    const {cart, removeFromCart} = useCartStore();
    return (
        <div className="flex flex-col gap-8 items-center justify-center mt-12">
            {/* TITLE*/}
            <h1 className="text-2xl font-medium">Tu carrito de compras</h1>
            {/* STEPS */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {steps.map((step) => (
                    <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-primary" : "border-gray-200"

                        }`} key={step.id}
                    >
                        <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-primary" : "bg-gray-200"}`}>
                            {step.id}
                        </div>
                        <p className={`text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}>{step.title}</p>
                    </div>
                ))}
            </div>
            {/* STEPS AND DETAILS*/}
            <div className="w-full flex flex-col lg:flex-row gap-16">
                {/* STEPS*/}
                <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
                    {activeStep === 1 ? (
                        cart.map(item => (
                            //item
                            <div className="flex items-center justify-between" key={item.id}>
                                {/* Image and Details*/}
                                <div className="flex gap-8">
                                    {/* Image*/}
                                    <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                                        <Image src={item.images.main} alt={item.name} fill className="object-contain" />
                                    </div>
                                    {/* Item details*/}
                                    <div className="flex flex-col justify-between">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium">{item.name}</p>
                                            <p className="text-xs text-gray-500">Cantidad:{" "}{item.quantity}</p>
                                            {/*toDO -> agregar marca */}
                                        </div>
                                        <p className="font-medium">S/. {" "}{item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                {/* Delete button*/}
                                <button onClick={() => removeFromCart(item)} className="w-8 h-8 rounded-full hover:bg-red-200 transition-all duration-300 bg-red-100 text-red-400 flex items-center justify-center cursor-pointer">
                                    <Trash2 className="w-3 h-3" />
                                </button>
                            </div>
                        ))
                    ) : activeStep === 2 ? (
                        <ShippingForm setShippingForm={setShippingForm}/>
                    ) : activeStep === 3 && shippingForm ?
                        (<PaymentForm />
                        ) : (
                            <p className="text-sm text-gray-500">Por favor complete los datos de envio para continuar</p>
                        )}
                </div>
                {/* DETAILS */}
                <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
                    <h2 className="font-semibold">Detalles de la compra</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Subtotal</p>
                            <p className="font-medium">
                                S/. {cart.reduce((acc, item) => acc + item.price * item.quantity,
                                    0
                                ).toFixed(2)}
                            </p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Descuento(10%)</p>
                            <p className="font-medium">
                                S/. 10
                            </p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Costo de envio</p>
                            <p className="font-medium">
                                S/. 10
                            </p>
                        </div>
                        <hr className="border-b-gray-950" />
                        <div className="flex justify-between">
                            <p className="text-gray-800 font-semibold">Total</p>
                            <p className="font-medium">
                                S/. {cart.reduce((acc, item) => acc + item.price * item.quantity,
                                    0
                                ).toFixed(2)}
                            </p>
                        </div>

                    </div>
                    {activeStep === 1 &&
                        <button onClick={() => router.push("/cart?step=2", { scroll: false })} className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                            Continuar
                            <ArrowRight className="w-3 h-3 " />
                        </button>}
                </div>
            </div>
        </div>
    )

}
export default CartPage;