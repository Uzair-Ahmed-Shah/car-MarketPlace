import React from 'react'
import {Separator} from './ui/separator'
import { BsFuelPumpDiesel } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";





function CarItem({car}) {
  return (
    <div className='rounded-xl bg-white border hover:shadow-md cursor'>
    <h2 className='absolute m-2 bg-green-500 text-white px-2 rounded-full text-sm'>New</h2>
      <img src={car?.image} width={'100%'} height={250} className='rounded-t-xl'/>
      <div className='p-4'>
        <h2 className='font-bold text-black text-lg mb-2 '>{car?.name}</h2>
        <Separator />
        <div className='grid grid-cols-3 mt-3 '>
            <div className='flex flex-col items-center'>
                <BsFuelPumpDiesel className='text-lg mb-2'/>
                <h2>{car.miles} Miles</h2>
            </div>
            <div className='flex flex-col items-center'>
                <IoIosSpeedometer className='text-lg mb-2'/>
                <h2>{car.fuelType}</h2>
            </div>
            <div className='flex flex-col items-center'>
                <FaGear className='text-lg mb-2'/>
                <h2>{car.gearType}</h2>
            </div>
        </div>
      </div>
      <Separator className="my-2"/>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-xl'>${car.price}</h2>
        <h2 className='text-blue-600 text-sm flex  gap-2 items-center'>
        <MdOpenInNew />
        View Details</h2>
      </div>
    </div>
  )
}

export default CarItem
