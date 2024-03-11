"use client"
import { getCourseById } from '@/app/_services';
import React, { useState, useEffect } from 'react';
import VideoPlayer from '../_components/VideoPlayer';
import CourseDetails from '../_components/CourseDetails';
import OptionSection from '../_components/OptionSection';
import EnrollmentSection from '../_components/EnrollmentSection';

export default function CoursePreview({ params }) {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    console.log(params.courseId);
    if (params.courseId) {
      fetchCourse(params.courseId);
    }
  }, [params]);

  const fetchCourse = (id) => {
    getCourseById(id).then((resp) => {
      console.log("Let me see response:", resp.academy);
      setCourse(resp.academy);
    }).catch(error => {
      console.error("Failed to fetch course:", error);
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className='col-span-2'>
          {course?<VideoPlayer videoUrl={course?.coursePreview?.url} /> : null}
          <CourseDetails course={course}/>
        </div>
        <div className='mx-5'>
          <OptionSection />
          <EnrollmentSection />
        </div>
      </div>
    </div>
  );
}
