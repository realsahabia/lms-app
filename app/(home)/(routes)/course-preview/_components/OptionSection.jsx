import React from 'react'
import Image  from 'next/image';

export default function OptionSection() {

    const optionList = [
        {
            id: 1,
            name: "Github",
            icon: "/github.png"
        },
        {
            id: 2,
            name: "Demo",
            icon: "/demo.png"
        },
        {
            id: 3,
            name: "Youtube",
            icon: "/youtube.png",
        },
    ]

  return (
    <div className='flex items-center gap-3'>
        {optionList.map((option, index) => (
            <div key={index} className='p-2 border rounded-lg flex flex-col  items-center w-full cursor-pointer'>
                <Image src={option.icon} alt="Icon" width={30} height={30} />
            </div>
        ))}
    </div>
  )
}
