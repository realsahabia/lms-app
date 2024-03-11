import React from 'react'
import { Book } from 'lucide-react'

export default function CourseDetails({ course }) {
  return (
    <div className="mt-5 p-5 rounded-lg border">
        <h2 className='text-[20px] font-medium'>{course?.name}</h2>
    <div className='flex items-center gap-2 mt-2'>
    <Book className='h-6 w-6 text-purple-600
    rounded-full bg-purple-100 p-1' />
    <h2 className='text-[12px] text-gray-400'>{course?.totalChapters} Chapters</h2>
    </div>
    <p className='line-clamp-4 text-gray-500 mt-5'>{course?.description}</p>
    </div>
  )
}
