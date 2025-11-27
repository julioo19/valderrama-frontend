"use client"
import React, { useState } from 'react'

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
  Plus,
  ChevronDown
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Subcategory = {
  name: string;
  slug: string;
  items?: { name: string; slug: string; }[];
}

type Category = {
  name: string;
  icon: React.ReactElement;
  slug: string;
  subcategories?: Subcategory[];
}

const categories: Category[] = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "Papeleria",
    icon: <NotebookText className="w-4 h-4" />,
    slug: "stationery",
    subcategories: [
      { 
        name: "Artículos de escritura", 
        slug: "writing-supplies",
        items: [
          { name: "Lápices", slug: "pencils" },
          { name: "Bolígrafos", slug: "pens" },
          { name: "Marcadores", slug: "markers" },
          { name: "Plumones", slug: "highlighters" },
        ]
      },
      { 
        name: "Papelería", 
        slug: "stationery-items",
        items: [
          { name: "Libretas", slug: "notebooks" },
          { name: "Cuadernos", slug: "exercise-books" },
          { name: "Agendas", slug: "planners" },
          { name: "Calendarios", slug: "calendars" },
          { name: "Papel", slug: "paper" },
          { name: "Carpetas", slug: "folders" },
        ]
      },
    ]
  },
  {
    name: "Oficina",
    icon: <ToolCase className="w-4 h-4" />,
    slug: "office",
    subcategories: [
      { 
        name: "Equipos y herramientas", 
        slug: "office-equipment",
        items: [
          { name: "Calculadoras", slug: "calculators" },
          { name: "Anilladoras", slug: "binders" },
          { name: "Guillotinas", slug: "paper-cutters" },
        ]
      },
    ]
  },
  {
    name: "Manualidades",
    icon: <ScissorsLineDashed className="w-4 h-4" />,
    slug: "crafts",
    subcategories: [
      { 
        name: "Material para arte y dibujo", 
        slug: "art-supplies",
        items: [
          { name: "Bases de corte", slug: "cutting-mats" },
          { name: "Instrumentos de dibujo", slug: "drawing-tools" },
        ]
      },
      { 
        name: "Manualidades", 
        slug: "craft-supplies",
        items: [
          { name: "Lentejuelas", slug: "sequins" },
          { name: "Pompones", slug: "pompoms" },
          { name: "Figuras de fomix", slug: "foam-figures" },
          { name: "Productos para manualidades", slug: "craft-products" },
        ]
      },
    ]
  },
  {
    name: "Regaleria",
    icon: <Gift className="w-4 h-4" />,
    slug: "gifts",
    subcategories: [
      { 
        name: "Decoración", 
        slug: "decoration",
        items: [
          { name: "Velas", slug: "candles" },
          { name: "Portarretratos", slug: "photo-frames" },
          { name: "Álbumes", slug: "albums" },
          { name: "Adornos", slug: "ornaments" },
        ]
      },
      { 
        name: "Accesorios personales", 
        slug: "personal-accessories",
        items: [
          { name: "Relojes", slug: "watches" },
          { name: "Bolsos", slug: "bags" },
          { name: "Llaveros", slug: "keychains" },
          { name: "Joyería", slug: "jewelry" },
        ]
      },
      { 
        name: "Juguetes y peluches", 
        slug: "toys-plush",
        items: []
      },
      { 
        name: "Otros", 
        slug: "gift-others",
        items: [
          { name: "Copas", slug: "cups" },
          { name: "Jarros", slug: "mugs" },
          { name: "Bolsas de regalo", slug: "gift-bags" },
          { name: "Globos", slug: "balloons" },
          { name: "Tarjetas de regalo", slug: "gift-cards" },
        ]
      },
    ]
  },
  {
    name: "Juegos",
    icon: <GamepadDirectional className="w-4 h-4" />,
    slug: "games",
    subcategories: [
      { name: "Juegos de mesa", slug: "board-games", items: [] },
      { name: "Rompecabezas", slug: "puzzles", items: [] },
    ]
  },
  {
    name: "Hogar",
    icon: <Birdhouse className="w-4 h-4" />,
    slug: "home",
    subcategories: [
      { 
        name: "Artículos para el hogar", 
        slug: "home-items",
        items: [
          { name: "Accesorios", slug: "accessories" },
          { name: "Vajillas", slug: "dinnerware" },
          { name: "Cristalería", slug: "glassware" },
        ]
      },
      { 
        name: "Decoración del hogar", 
        slug: "home-decor",
        items: []
      },
      { 
        name: "Artículos de temporada", 
        slug: "seasonal",
        items: [
          { name: "Decoración navideña", slug: "christmas-decor" },
        ]
      },
    ]
  },
  {
    name: "Otros",
    icon: <Plus className="w-4 h-4" />,
    slug: "others",
    subcategories: [
      { 
        name: "Cuidado personal y cosmética", 
        slug: "personal-care",
        items: []
      },
      { 
        name: "Confitería y alimentos", 
        slug: "confectionery",
        items: []
      },
    ]
  },
];

const Categories = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()
  const selectedCategory = searchParams.get("category")
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(null)
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const handleChange = (value: string | null, parentSlug?: string) => {
    const params = new URLSearchParams(searchParams)
    
    if (parentSlug) {
      params.set("category", parentSlug);
      params.set("sub", value || "");
    } else {
      params.set("category", value || "all");
      params.delete("sub"); 
    }
    
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  }

  const handleMouseEnterCategory = (slug: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setHoveredCategory(slug)
    setHoveredSubcategory(null)
  }

  const handleMouseLeaveCategory = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(null)
      setHoveredSubcategory(null)
    }, 300)
  }

  const handleMouseEnterSubcategory = (slug: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setHoveredSubcategory(slug)
  }

  const handleMouseLeaveSubcategory = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredSubcategory(null)
    }, 200)
  }

  const handleCategoryClick = (slug: string, parentSlug?: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    handleChange(slug, parentSlug)
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 
    bg-gray-100 p-2 rounded-lg mb-4 text-sm'>
      {categories.map(category => (
        <div 
          key={category.name}
          className="relative"
          onMouseEnter={() => handleMouseEnterCategory(category.slug)}
          onMouseLeave={handleMouseLeaveCategory}
        >
          <div className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md hover:text-white hover:bg-green-600 transition-all duration-300
            ${category.slug === selectedCategory ? "bg-green-600 font-bold text-white" : "text-primary-light"}
          `}
            onClick={() => handleCategoryClick(category.slug)}
          >
            {category.icon}
            {category.name}
            {category.subcategories && <ChevronDown className="w-3 h-3" />}
          </div>

          {category.subcategories && hoveredCategory === category.slug && (
            <div 
              className="absolute top-full left-0 -mt-[2px] bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50 min-w-[220px]"
              onMouseEnter={() => handleMouseEnterCategory(category.slug)}
              onMouseLeave={handleMouseLeaveCategory}
            >
              {category.subcategories.map(subcategory => (
                <div
                  key={subcategory.slug}
                  className="relative"
                  onMouseEnter={() => handleMouseEnterSubcategory(subcategory.slug)}
                  onMouseLeave={handleMouseLeaveSubcategory}
                >
                  <div
                    className="px-4 py-2 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-all duration-200 text-gray-700 flex items-center justify-between"
                    onClick={() => handleCategoryClick(subcategory.slug, category.slug)}
                  >
                    <span>{subcategory.name}</span>
                    {subcategory.items && subcategory.items.length > 0 && (
                      <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                    )}
                  </div>

                  {subcategory.items && subcategory.items.length > 0 && hoveredSubcategory === subcategory.slug && (
                    <div 
                      className="absolute left-full top-0 -ml-[2px] bg-white shadow-lg rounded-lg border border-gray-200 py-2 min-w-[200px]"
                      onMouseEnter={() => handleMouseEnterSubcategory(subcategory.slug)}
                      onMouseLeave={handleMouseLeaveSubcategory}
                    >
                      {subcategory.items.map(item => (
                        <div
                          key={item.slug}
                          className="px-4 py-2 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-all duration-200 text-gray-700"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleCategoryClick(item.slug, category.slug)
                          }}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Categories