import { z } from "zod"
export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    images: Record<string, string>
}

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
    quantity: number;
    selectedColor?: string;
}

export type CartItemsType = CartItemType[]

export const shippingFormSchema = z.object({
    name: z.string().min(1, "Coloque su nombre"),
    email: z.email().min(1, "Coloque su email"),
    phone: z.string().min(9, "El numero debe ser de 9 digitos")
        .max(9, "El numero debe ser 9 digitos").regex(/^\d+$/, "El telefono solo debe contener numeros"),
    address: z.string().min(1, "Coloque su direccion"),
    city: z.string().min(1, "Coloque su ciudad")
})
export type ShippingFormInputs = z.infer<typeof shippingFormSchema>

export const paymentFormSchema = z.object({
    cardHolder: z.string().min(1, "Coloque el titular de la tarjeta"),
    cardNumber: z.string().min(16, "Coloque su numero de tarjeta"),
    expirationDate: z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Coloque en formato MM/YY"),
    cvv: z.string().min(3, "Coloque el CVV de la tarjeta")
        .max(3, "Coloque el CVV de la tarjeta"),
})
export type PaymentFormInputs = z.infer<typeof paymentFormSchema>

export type CartStoreStateType = {
    cart: CartItemsType;
    hasHydrated: boolean;
}
export type CartStoreActionsType = {
    addToCart: (product: CartItemType) => void;
    removeFromCart: (product: CartItemType) => void;
    clearCart: () => void;

}