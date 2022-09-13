import React from 'react'
import { motion } from "framer-motion"

export default function CountryCard({ countryName, countryFlag }) {
    return (
        <motion.div className='h-72 w-60 bg-slate-200 rounded-sm shadow-md flex flex-col items-center justify-center space-y-8'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
        >
            <img className='object-cover h-40 w-40 bg-green-500 rounded-full' src={countryFlag}></img>
            <div>
                <span>{countryName}</span>
            </div>
        </motion.div>
    )
}
