import React from 'react'
import { motion } from "framer-motion"

export default function CountryCard({ countryName, countryFlag }) {

    return (
        <motion.div className='flex flex-col items-center justify-center space-y-8 rounded-sm shadow-md h-72 w-60 bg-slate-200'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
        >
            <img className='object-cover w-40 h-40 bg-slate-500 rounded-full' src={countryFlag}></img>
            <div>
                <span>{countryName}</span>
            </div>
        </motion.div>
    )
}
