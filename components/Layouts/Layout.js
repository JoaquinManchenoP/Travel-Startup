import React from "react";

export default function Layout({ children }) {
  return (
    <div className='flex items-center justify-center w-screen h-screen '>
      <div className='h-full main__container w-layoutWidth'>
        {children}
      </div>
    </div>
  )
} 