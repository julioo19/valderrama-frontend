import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-6 bg-footer-background-light p-8 rounded-lg bg-green-50'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Link href="/" className='flex items-center'>
          <p className='hidden md:block text-md font-medium tracking-wider text-primary-light'>BAZAR +</p>
        </Link>
        <p className='text-sm font-bold text-primary-light'>© 2025 Bazar +</p>
        <p className='text-sm text-primary-light'>Todos los derechos reservados</p>
      </div>
      <div className='flex flex-col gap-4 text-sm text-footer-light items-center md:items-start'>
        <p className='text-sm text-primary-light font-semibold'>Links</p>
        <Link href="/">Pagina de Inicio</Link>
        <Link href="/">Contacto</Link>
        <Link href="/">Terminos de servicio</Link>
        <Link href="/">Politica de privacidad</Link>
      </div>
      <div className='flex flex-col gap-4 text-sm text-footer-light items-center md:items-start'>
        <p className='text-sm text-primary-light font-semibold'>Productos</p>
        <Link href="/">Todos los productos</Link>
        <Link href="/">Novedades</Link>
        <Link href="/">Mas vendidos</Link>
        <Link href="/">Ofertas</Link>
      </div>
      <div className='flex flex-col gap-4 text-sm text-footer-light items-center md:items-start'>
        <p className='text-sm text-primary-light font-semibold'>Empresa</p>
        <Link href="/">Acerca de</Link>
        <Link href="/">Contacto</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Programa de afiliados</Link>
      </div>
    </div>
  )
}

export default Footer;