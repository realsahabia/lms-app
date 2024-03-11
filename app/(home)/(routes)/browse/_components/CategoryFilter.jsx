"use client"
import { useState } from "react"

export default function CategoryFilter() {
    const [activeIndex, setActiveIndex] = useState(0)
    const filterOptions = [
        {
            id: 1,
            name: "All", 
            value: "all"
        },
        {
            id: 2,
            name: "React Js", 
            value: "react"
        },
        {
            id: 3,
            name: "Next Js", 
            value: "next"
        },
        {
            id: 4,
            name: "Tailwind css", 
            value: "tailwind"
        },
        {
            id: 5,
            name: "Firebase", 
            value: "firebase"
        },
    ]

  return (
    <div>
        {filterOptions.map((item, index) =>(
           <button key={index} onClick={() => setActiveIndex(index)} className={`border p-2 px-4 text-[12px] rounded-md hover:border-purple-800 hover:bg-gray-50 font-semibold ${activeIndex === index ? "border-purple-800 bg-purple-50 text-purple-800" : null}`}>
                <h2>{item.name}</h2>
           </button> 
        ))}
    </div>
  )
}
