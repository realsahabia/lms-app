import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBar() {
  return (
    <div className='flex gap-3 text-[14px items-center border p-2 rounded-md bg-gray-50 text0--gray-500 '>
        <Search height={20}/>
        <input type='text' placeholder='Search Course' className='bg-transparent outline-none '/>
    </div>
  )
}
