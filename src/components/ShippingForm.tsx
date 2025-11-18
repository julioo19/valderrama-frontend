import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import { ShippingFormInputs, shippingFormSchema } from '../types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
const ShippingForm = ({ setShippingForm }: { setShippingForm: (data: ShippingFormInputs) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter()
  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data)
    router.push("/cart?step=3", {scroll: false})

  }
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleShippingForm)}>
      <div className='flex flex-col gap-1'>
        <label htmlFor='name' className='text-xs text-gray-500 font-medium'>
          Nombre
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type='text'
          id='name'
          placeholder='Adrian Perez' {...register("name")} />
        {errors.name && (
          <p className='text-xs text-red-500'>{errors.name.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='email' className='text-xs text-gray-500 font-medium'>
          Email
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type='email'
          id='email'
          placeholder='adrianperez@gmail.com' {...register("email")} />
        {errors.email && (
          <p className='text-xs text-red-500'>{errors.email.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='phone' className='text-xs text-gray-500 font-medium'>
          Telefono
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type='text'
          id='phone'
          placeholder='999111333' {...register("phone")} />
        {errors.phone && (
          <p className='text-xs text-red-500'>{errors.phone.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='address' className='text-xs text-gray-500 font-medium'>
          Direccion
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type='text'
          id='address'
          placeholder='Mz BB Lote 69 Surco' {...register("address")} />
        {errors.address && (
          <p className='text-xs text-red-500'>{errors.address.message}</p>
        )}
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='city' className='text-xs text-gray-500 font-medium'>
          Ciudad
        </label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type='text'
          id='city'
          placeholder='Lima' {...register("city")} />
        {errors.city && (
          <p className='text-xs text-red-500'>{errors.city.message}</p>
        )}
      </div>
      <button
        type='submit'
        className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
        Continuar
        <ArrowRight className="w-3 h-3 " />
      </button>
    </form>
  )
}

export default ShippingForm