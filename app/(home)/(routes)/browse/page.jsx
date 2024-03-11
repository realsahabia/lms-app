"use client"
import React, { useEffect, useState } from 'react'
import CategoryFilter from './_components/CategoryFilter'
import { getCourseLists } from '@/app/_services'
import CourseList from './_components/CourseList'

export default function Browse() {
  const [coursesData, setCoursesData] = useState([])

  useEffect(() => {
    getCourses();
  }, [])

  const getCourses = () =>{
      getCourseLists().then(resp =>{
        console.log(resp)
        setCoursesData(resp.academies)
  })
  }

  return (
    <div>
      <CategoryFilter />
      {coursesData ? <CourseList courses={coursesData}/> : null}
    </div>
  )
}
