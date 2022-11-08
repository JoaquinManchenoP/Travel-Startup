import React from 'react'
import { motion } from 'framer-motion';

export default function CountryInfoMenuButton({ buttonTitle, buttonSubtitle }) {
    return (
        <motion.div className='h-16 w-56 flex flex-col justify-center rounded-sm bg-white'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
        >
            <div className='buttonText pl-4 space-y-1'>
                <div className='buttonTitle'>
                    <span className='text-lg'>{buttonTitle}</span>
                </div>
                <div className='buttonSubtitle'>
                    <span className='text-xsm'>{buttonSubtitle}</span>
                </div>
            </div>
        </motion.div>
    )
}
