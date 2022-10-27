import React from 'react'

export default function CountryPageLayout({ children }) {
    return (
        <div className='flex items-center justify-center w-screen h-screen '>
            <div className='h-full main__container w-layoutWidth'>
                <div className='logo h-16 w-full bg-purple-400'>
                    {/* the site logo goes here */}
                </div>
                {children}
            </div>
        </div>
    )
}
