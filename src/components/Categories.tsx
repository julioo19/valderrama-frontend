"use client"
import React from 'react'

import {
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
  Panda,
  BrushCleaning,
  Cable,
  BookOpen,
  PartyPopper,
  PackageOpen,
  Coffee,
  Gift,
  Milk,
  BottleWine,
  NotebookText,
  ToolCase,
  ScissorsLineDashed,
  GamepadDirectional,
  Birdhouse,
  Plus
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "Papeleria",
    icon: <NotebookText className="w-4 h-4" />,
    slug: "stationery",
  },
  {
    name: "Oficina",
    icon: <ToolCase className="w-4 h-4" />,
    slug: "office",
  },

  {
    name: "Manualidades",
    icon: <ScissorsLineDashed className="w-4 h-4" />,
    slug: "crafts",
  },
  {
    name: "Regaleria",
    icon: <Gift className="w-4 h-4" />,
    slug: "gifts",
  },
  {
    name: "Juegos",
    icon: <GamepadDirectional className="w-4 h-4" />,
    slug: "games",
  },
  {
    name: "Hogar",
    icon: <Birdhouse className="w-4 h-4" />,
    slug: "home",
  },
    {
    name: "Otros",
    icon: <Plus className="w-4 h-4" />,
    slug: "others",
  },
];

const Categories = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()
  const selectedCategory = searchParams.get("category")

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams)
    params.set("category", value || "all");
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 
    bg-gray-100 p-2 rounded-lg mb-4 text-sm'>
      {categories.map(category => (
        <div className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:text-white hover:bg-green-600 transition-all duration-300
          ${category.slug === selectedCategory ? "bg-green-600 font-bold text-white" : "text-primary-light"}
        `} key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          {category.name}
        </div>
      ))}
    </div>
  )
}

export default Categories