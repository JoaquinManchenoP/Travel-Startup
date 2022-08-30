import React from 'react'

export default function EmailInputBox() {
    return (
        <div className='md:h-full md:w-full sm:h-0 sm:w-0 rounded-sm shadow-2xl overflow-hidden bg-slate-300 bg-opacity-50'>
            <div className='card__header h-1/2 w-full'>
                <div className="container h-5/6 w-10/23 flex items-center justify-center">
                    <div className="placeholder__image h-full w-10/12 mt-10 bg-gray-700 bg-opacity-100 rounded-md ">placeholder</div>
                </div>
            </div>
            <div className='login__divider text-sm h-8 w-full flex items-center justify-center font-light pt-8'>
                <span>Already a member</span>
                <span className='text-pink-600 hover:text-pink-800 pl-1 '>Login</span>
            </div>
            <div className='email__form h-32 w-full flex flex-col justify-center items-center space-y-2'>
                <input placeholder='Type in your email' className='h-10 w-10/12 bg-gray-200 rounded-md text-center' />
                <button className='bg-pink-600 hover:bg-pink-800 text-white font-bold px-4 rounded-md md:h-10 md:w-10/12 sm:w-0 sm:h-0' >Join Us</button>
            </div>
        </div>
    )
}
