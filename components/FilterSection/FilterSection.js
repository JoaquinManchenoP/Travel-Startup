import React from 'react'
import { motion } from "framer-motion";

export default function FilterSection() {
    return (
        <div className='filter__container h-24 w-full flex items-center justify-center text-sm'>
            <div className="filter__section h-12 w-11/12 flex items-center space-x-4 font-roboto font-bold">
                <motion.div
                    className="north__america__filter h-10 w-28 bg-slate-200 flex items-center justify-center rounded-md shadow-md cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                >
                    North America
                </motion.div>
                <motion.div
                    className="south__america__filter h-10 w-28 bg-slate-200 flex items-center justify-center rounded-md shadow-md cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                >
                    South America
                </motion.div>
                <motion.div
                    className="north__america__filter h-10 w-28 bg-slate-200 flex items-center justify-center rounded-md shadow-md cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                >
                    Nort America
                </motion.div>
                <motion.div
                    className="south__america__filter h-10 w-28 bg-slate-200 flex items-center justify-center rounded-md shadow-md cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.99 }}
                >
                    Europe
                </motion.div>
            </div>
        </div>
    )
}
