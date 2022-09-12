import React from "react";

export default function Layout({ children }) {
  return (
    <div className=' h-screen w-screen flex items-center justify-center bg-green-500'>
      <div className='main__container w-layoutWidth h-full'>
        {children}
      </div>
    </div>
  )
} 