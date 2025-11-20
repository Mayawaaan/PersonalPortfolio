import React from 'react'
import Shape from './Shape'
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div >
        <div className='flex flex-col md:flex-row min-h-[90vh] items-center justify-center gap-10 pt-20 md:pt-0'>
            <motion.div 
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='flex flex-col justify-center items-center px-6 md:px-20 w-full md:w-1/2 text-center md:text-left'
            >
                <h1 className='text-4xl mb-10 font-bold'>Hello! I'm <span className='text-emerald-500'> Ayan Magardey</span></h1>
                <h1 className='text-xl font-semibold italic mb-2 text-emerald-400'>"Crafting Digital Worlds, Not Just Websites"</h1>
                <p className=' text-lg text-center'>Welcome to the next generation of web design. I don't build standard pages, I architect interactive digital worlds. Through a fusion of design and code, I deliver breathtaking 3D experiences that elevate brand storytelling and user engagement.</p>
                <button className='mt-4 p-2 border rounded-lg text-emerald-600 hover:text-emerald-600/60 cursor-pointer'>Hire Me</button>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='w-full md:w-1/2 h-[50vh] md:h-[90vh]'
            >
                <Shape/>
            </motion.div>
        </div>

    </div>
  )
}

export default HeroSection