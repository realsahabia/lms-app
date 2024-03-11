import React from 'react'

export default function VideoPlayer({videoUrl}) {
    console.log("Video URL:", videoUrl); // This will log the URL to verify it's passed correctly

  return (
    <div className='border rounded-lg p-3'>
        <h2 className='text-gray-400 mb-2'>Course Preview</h2>
        <video width="100%" height="auto" controls controlsList='nodownload'>
            <source src={videoUrl} type='video/mp4' />
        </video>
    </div>
  )
}
