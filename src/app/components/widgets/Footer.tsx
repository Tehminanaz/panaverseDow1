import React from 'react'
import Image from 'next/image'
import panaverselogo from "@/app/components/assetes/panaverselogo.webp"

const Footer = () => {
  return (
    <footer className=' py-12 px-6'>
  <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
    
    {/* Left Side */}
    <div>
      {/* Small Image */}
      <Image
        src={panaverselogo}
        alt='Footer Image' 
        className='w-16 h-16 mb-4 object-contain'
      />
      {/* Description */}
      <p className='text-sm text-black mb-4'>
        Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.
      </p>

      {/* Social Icons */}
      <div className='flex space-x-4 text-white'>
        {/* LinkedIn Icon */}
        <a href='#' className='bg-teal-500 p-2 rounded-full text-white'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
            <path d='M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-9 19H7V9h3v10zm-1.5-11.75c-.83 0-1.5-.67-1.5-1.5S7.67 4.25 8.5 4.25s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 19h-3v-5.5c0-2.21-4-2.23-4 0V19h-3V9h3v1.25C12.69 8.3 18 8.45 18 12.25V19z'/>
          </svg>
        </a>
        {/* Facebook Icon */}
        <a href='#' className='bg-blue-500 p-2 rounded-full'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
            <path d='M12 2.04C6.477 2.04 2 6.517 2 12.04c0 4.991 3.657 9.128 8.438 9.878v-6.985h-2.54v-2.72h2.54V9.845c0-2.507 1.492-3.89 3.773-3.89 1.093 0 2.238.194 2.238.194v2.467h-1.26c-1.24 0-1.627.772-1.627 1.562v1.891h2.773l-.443 2.72h-2.33V21.92c4.781-.75 8.438-4.887 8.438-9.878 0-5.523-4.477-10-10-10z'/>
          </svg>
        </a>
        {/* YouTube Icon */}
        <a href='#' className='bg-red-500 p-2 rounded-full'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
            <path d='M23.5 6.39a3.03 3.03 0 0 0-2.14-2.14C19.72 4 12 4 12 4s-7.72 0-9.36.25A3.03 3.03 0 0 0 .5 6.39C.25 8.03.25 12 .25 12s0 3.97.25 5.61a3.03 3.03 0 0 0 2.14 2.14C4.28 20 12 20 12 20s7.72 0 9.36-.25a3.03 3.03 0 0 0 2.14-2.14C23.75 15.97 23.75 12 23.75 12s0-3.97-.25-5.61zM9.75 15.5v-7l6 3.5-6 3.5z'/>
          </svg>
        </a>
      </div>
    </div>

    {/* Center Section */}
    <div className='text-center text-black'>
      <h4 className='text-xl font-bold mb-4'>Programs</h4>
      <ul className='space-y-2'>
        <li>Web 3.0 and Metaverse Developer</li>
        <li>Artificial Intelligence</li>
        <li>Cloud-Native Computing</li>
        <li>Ambient Computing and IoT</li>
        <li>Genomics and Bioinformatics</li>
        <li>Network Programmability and Automation</li>
      </ul>
    </div>

    {/* Right Side */}
    <div className='text-center md:text-left'>
      <h4 className='text-xl font-bold mb-4'>Pages</h4>
      <ul className='space-y-2'>
        <li><a href='#' className='hover:underline'>Home</a></li>
        <li><a href='#' className='hover:underline'>Quarter 1</a></li>
        <li><a href='#' className='hover:underline'>Quarter 2</a></li>
        <li><a href='#' className='hover:underline'>Quarter 3</a></li>
      </ul>
    </div>
  </div>
</footer>

  )
}

export default Footer