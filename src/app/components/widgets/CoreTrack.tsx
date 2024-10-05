import React from 'react'
import Wrapper from "@/app/components/shared/Wrapper"
const coreTrack = () => {
  return (
    <section className='max-w-screen-2xl  py-6 px-14'>
        <Wrapper>
      <div className='lg:mt-20 '>
        <div>
            <h4 className='text-teal-700 font-semibold text-base  mt-4'>Program of Studies</h4>
            <h2 className='text-2xl font-bold whitespace-pre-line '>Core Courses</h2>
            <h2 className='text-2xl font-bold whitespace-pre-line '>(Common in All Specializations)</h2>
            <p className='mt-3 text-xs text-slate-600 '>Every participant of the program will start by completing the following three core courses.

</p>
  <div className=" -z-20 absolute left-0 mix-blend-soft-light transform -translate-y-1/2 w-64 h-64 bg-teal-200 rounded-full blur-3xl items-stretch opacity-70"></div>
  <div className=" -z-20 absolute -right-8 mix-blend-soft-light -translate-y-1/2 w-52 h-52
   bg-gray-200 rounded-full  items-stretch opacity-70 "></div>

        </div>
        <div>
        <button className="bg-teal-950 text-white text-xs font-medium pb-2 py-1 px-3 rounded-full text-md transition-transform duration-300 transform hover:scale-110 hover:bg-teal-900 mt-3">
                Enroll Now
               </button>
        </div>
      </div>

      <div className="relative w-full h-96 flex justify-center items-center -mt-60 mb-40">
      {/* SVG for the curved line */}
      <svg className=" absolute w-full h-full"  viewBox="35 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 350 C300 600, 250 200, 450 300 C700 450, 750 100, 950 100" stroke="#38B2AC" strokeWidth="4" fill="transparent " />
      </svg>

      {/* First Square and Content for Q1 */}
      <div className="absolute w-40 h-40 left-[120px] top-[330px] text-center mt-8 ">
      <div className="w-10 h-10 bg-white mb-1 rounded-full -z-10">
        <div className='right-6 w-6 h-6 bg-slate-400 mb-1 rounded-full '></div>
      </div>
        <div className="relative -mt-2">
          <p className="text-sm font-bold text-left">Quarter I</p>
          <p className="text-xs text-slate-900 text-left">CS-101: Object-Oriented Programming using TypeScript </p> 
          <span className='absolute -z-10 text-slate-300 text-9xl font-bold  right-1 -top-9'>1</span>
        </div>
      </div>

      {/* Second Square and Content for Q2 */}
      <div className="absolute w-60 h-20 left-[370px] top-[280px] items-center -mt-25">
        <div className="w-10 h-10 bg-white mb-1 rounded-full -z-10 items-center">
            <div className='right-6 w-6 h-6 bg-slate-400 mb-1 rounded-full items-center'></div>
        </div>
        <div className="relative p-3 rounded-lg -mt-2 font-normal">
          <p className="text-sm font-bold">Quarter II</p>
          <p className="text-xs text-slate-900 text-balance">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
          <span className='absolute -z-10 text-slate-300 text-9xl font-bold  right-1 -top-9'>2</span>
        </div>
      </div>

      {/* Third Square and Content for Q3 */}
      <div className="absolute w-40 h-40 left-[650px] top-[110px] text-center">
        <div className="w-10 h-10 bg-white mb-1 rounded-full -z-10">
            <div className='right-6 w-6 h-6 bg-slate-400 mb-1 rounded-full ' ></div>
        </div>
        <div className="relative p-3 ">
          <p className="text-sm font-bold text-left">Quarter III</p>
          <p className="text-xs text-slate-900 text-left">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</p>
          <span className='absolute -z-50 text-slate-300 text-9xl font-bold  -right-8 -top-7 transition-transform duration-300 transform hover:scale-125 '>3</span>
        </div>
      </div>
    </div>

      </Wrapper>
    </section>
  )
}

export default coreTrack