import Image from "next/image";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="">
      <div className="relative aspect-3/1 mb-12">
        <Image src="/banner_example.png"alt="Producto promocional" fill/>
      </div>
      <ProductList/>
    </div>
  );
}
