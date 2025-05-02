import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CiSearch } from "react-icons/ci";
import Data from "@/Shared/Data"

function Search() {
  return (
    <div className='p-2 bg-gray-200 rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5
    item-center w-[70%] md:p-5'>
      
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Used">Used</SelectItem>
          <SelectItem value="New">New</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="h-6 w-[2px] bg-gray-400 mx-2" />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Brand" />
        </SelectTrigger>
        <SelectContent>
          {Data.Brands.map((maker, index) => (
            <SelectItem key={`${maker.name}-${index}`} value={maker.name}>
              {maker.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="h-6 w-[2px] bg-gray-400 mx-2" />

      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          {Data.Prices.map((maker, index) => (
            <SelectItem key={`${maker.amount}-${index}`} value={maker.amount}>
              {maker.amount}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex items-center bg-zinc-700 rounded-full p-2">
        <CiSearch className="text-2xl text-white" />
      </div>
    </div>
  )
}

export default Search
