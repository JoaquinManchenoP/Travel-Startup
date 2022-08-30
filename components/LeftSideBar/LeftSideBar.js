import React from 'react'
import JobSideBarCard from './sideBarCard/JobSideBarCard'

export default function LeftSideBar() {
  return (
    <div className='left__sideBar h-full w-80 flex flex-col items-center space-y-5 '>
      <JobSideBarCard />
      <JobSideBarCard />
    </div>
  )
}