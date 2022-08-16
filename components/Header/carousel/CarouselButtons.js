import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";

export default function CarouselButtons({ counter, setCounter }) {
    return (
        <div className="buttons h-20 w-full flex justify-center">
            <div className="header__button__prev h-16 w-16 flex items-center justify-center cursor-pointer bg-slate-200 shadow-md rounded-md absolute mr-24" onClick={() => setCounter(counter - 1)}>
                <AiFillCaretLeft size={30} className='text-pink-600' />
            </div>
            <div className="header__button__prev h-16 w-16 flex items-center justify-center cursor-pointer rounded-md bg-slate-200 shadow-md absolute ml-24" onClick={() => setCounter(counter + 1)}>
                <AiFillCaretRight size={30} className='text-pink-600' />
            </div>
        </div>
    )
}
