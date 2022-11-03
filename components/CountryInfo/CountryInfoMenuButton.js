import React from 'react'
import { motion } from 'framer-motion';

export default function CountryInfoMenuButton() {
    return (
        <motion.div className='h-14 w-full flex items-center justify-center rounded-md bg-white'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
        >
            optionn
        </motion.div>
    )
}
