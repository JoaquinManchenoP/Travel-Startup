import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { motion } from "framer-motion";

export default function CarouselButtons({ counter, setCounter }) {
    return (
        <div className="buttons h-20 w-full flex justify-center">
            <motion.div
                className="header__button__prev h-11 w-16 flex items-center justify-center cursor-pointer bg-slate-200 shadow-md rounded-sm absolute mr-24" onClick={() => setCounter(counter - 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.99 }}
            >
                <AiFillCaretLeft size={30} className='text-pink-600' />
            </motion.div>
            <motion.div
                className="header__button__prev h-11 w-16 flex items-center justify-center cursor-pointer rounded-sm bg-slate-200 shadow-md absolute ml-24" onClick={() => setCounter(counter + 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.99 }}
            >
                <AiFillCaretRight size={30} className='text-pink-600' />
            </motion.div>
        </div>
    )
}
