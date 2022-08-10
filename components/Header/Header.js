import React from 'react'
import { motion } from "framer-motion"

export default function Header() {
  return (
    <div className='h-4/6 w-full'>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        src="https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='image__container h-full w-full bg-red-300'>
        this is a test again status
      </motion.img>
    </div >
  )
}
