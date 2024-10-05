import React from 'react'
import outcomePoster from "@/app/components/assetes/outcomePoster.webp"
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'
const Outcome = () => {
  return ( <section>
     <Wrapper>
        <div className=' py-6 px-14'>
        <div className=" -z-20 absolute -right-10 mix-blend-soft-light transform -translate-y-1/2 w-60 h-72 bg-teal-200 rounded-full blur-3xl items-stretch opacity-100 mt-28"></div>
    <div className='flex flex-col md:flex-row items-center mt-12 gap-8'>
  {/* Left side image */}
  <div className='md:w-1/2'>
    <Image
      src={outcomePoster}  width={0} height={0}
      alt='Program Outcome Image' 
      className='  rounded-lg  w-full h-auto object-cover'
    />
  </div>

  {/* Right side content */}
  <div className='md:w-1/2'>
    {/* Heading */}
    <h2 className='text-2xl font-bold text-black mb-4'>
      The Outcome for Participants of the Program
    </h2>

    {/* Description */}
    <p className='text-slate-600 mb-6 text-xs  '>
      As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.
    </p>

    {/* Options */}
    <ul className='space-y-4'>
      {/* Option 1 */}
      <li className='flex items-center'>
        {/* SVG Diamond with Check */}
        <svg 
          className='w-6 h-6 fill-teal-700 mr-3 ' 
          viewBox='0 0 24 24'>
          <polygon points='12 2 2 12 12 22 22 12 12 2' />
          <polyline 
            points='9 12 11 14 15 10' 
            fill='none' 
            stroke='white' 
            strokeWidth='2' />
        </svg>
        <span>Product Ownership</span>
      </li>

      {/* Option 2 */}
      <li className='flex items-center'>
        <svg 
          className='w-6 h-6 fill-teal-600 mr-3' 
          viewBox='0 0 24 24'>
          <polygon points='12 2 2 12 12 22 22 12 12 2' />
          <polyline 
            points='9 12 11 14 15 10' 
            fill='none' 
            stroke='white' 
            strokeWidth='2' />
        </svg>
        <span>Freelancing</span>
      </li>

      {/* Option 3 */}
      <li className='flex items-center'>
        <svg 
          className='w-6 h-6 fill-teal-600 mr-3' 
          viewBox='0 0 24 24'>
          <polygon points='12 2 2 12 12 22 22 12 12 2' />
          <polyline 
            points='9 12 11 14 15 10' 
            fill='none' 
            stroke='white' 
            strokeWidth='2' />
        </svg>
        <span>Global Marketing by Panaverse DAO</span>
      </li>

      {/* Option 4 */}
      <li className='flex items-center'>
        <svg 
          className='w-6 h-6 fill-teal-600 mr-3' 
          viewBox='0 0 24 24'>
          <polygon points='12 2 2 12 12 22 22 12 12 2' />
          <polyline 
            points='9 12 11 14 15 10' 
            fill='none' 
            stroke='white' 
            strokeWidth='2' />
        </svg>
        <span>Boosting Economy</span>
      </li>
    </ul>
  </div>
</div>
</div>
</Wrapper>
</section>
  )
}

export default Outcome