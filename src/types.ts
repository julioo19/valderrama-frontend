export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    longDescription: string;
    price: number;
    images: Record<string, string>
}

export type ProductsType = ProductType[];