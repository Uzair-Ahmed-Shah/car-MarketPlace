import {UserButton, useUser} from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    const {user, isSignedIn} = useUser()
  return (
    <div className = "flex justify-between items-center shadow-sm py-2.5 px-4 ">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" width={40} height={25} />
        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-800">Car MarketPlace</h1>
      </div>

      <ul className="hidden md:flex gap-18">
        <li className= "font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</li>
        <li className= "font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
        <li className= "font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">New</li>
        <li className= "font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">Used</li>
      </ul>

      {isSignedIn?
        <div className = "flex items-center gap-5">
            <UserButton/>
            <Link to={'/profile'}>
                <Button>Submit Listing</Button>
            </Link>
        </div>
        :
        <div>
        
            <Button>Submit Listing</Button>
        
        </div>

      }
    </div>
  )
}

export default Header
