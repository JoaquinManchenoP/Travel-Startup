import React from 'react'
import SideBarCard from './SideBarCard'

export default function LeftSideBar() {
  return (
    <div className='left__sideBar h-full w-80 flex flex-col items-center space-y-5 bg-green-500'>
      <SideBarCard />
      <SideBarCard />
    </div>
  )
}
