import React,{ useState } from 'react'
import profile from '../assets/profile.jpg'
import navbarLinks from '../data/navbarLinks';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='shadow-md w-full top-0 left-0 bg-white z-10'>
        <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <img className='w-12 rounded-full' src={profile} alt="Profile" />
                <h1 className='text-2xl font-serif font-semibold tracking-tight'>Ayan Magardey</h1>
            </div>

            <div onClick={() => setIsOpen(!isOpen)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                {isOpen ? <X className='w-7 h-7'/> : <Menu className='w-7 h-7 text-emerald-500'/>}
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:bg-white md:z-auto z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20 opacity-100' : 'top-[-490px]'}`}>
                {
                    navbarLinks.map((link) => (
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7' onClick={() => setIsOpen(false)}>
                            <a 
                              href={link.href} 
                              className='text-emerald-600 hover:text-emerald-200 duration-500 cursor-pointer'
                            >
                              {link.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar