"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";



const Filter = () => {
const searchParams = useSearchParams();
const router = useRouter();
const pathName = usePathname();
const handleFilter = (value:string) =>{
    const params = new URLSearchParams(searchParams)
    params.set("filter", value);
    router.push(`${pathName}?${params.toString()}`, {scroll: false});
  }
  return (
    <div className='flex items-center justify-end gap-2 text-sm text-zinc-950 my-6'>
        <span>Filtrar por</span>
        <select name='filter' id='filter' className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleFilter(e.target.value)}>
            <option value="Nuevo">Mas nuevo</option>
            <option value="Antiguo">Mas viejo</option>
            <option value="asc">Mayor precio</option>
            <option value="desc">Menor precio</option>
        </select>
    </div>
  )
}

export default Filter