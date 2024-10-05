'use client'
// import React from 'react'
import Wrapper from "@/app/components/shared/Wrapper"
// import CourseData from './CourseData'
import React, { useState } from 'react'
import Image from 'next/image'
import metaverse from "@/app/components/assetes/metaverse.webp"
import ai from "@/app/components/assetes/ai.webp"
import cloud from "@/app/components/assetes/cloud.webp"
import ambient from "@/app/components/assetes/ambient.webp"
import genomics from "@/app/components/assetes/genomics.webp"
import network from "@/app/components/assetes/network.webp"

const courseList = [
  {
    slug : "metaverse",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    discription: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences...",
    image: metaverse,
    quaters: [
      { header: "Quater 4", discription: "W3-351: Developing Smart Contracts...", number: 4 },
      { header: "Quater 5", discription: "MV-361: Developing Planet-Scale Open Virtual..." }
    ]
  },
  {
    slug : "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    discription: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs...",
    image: ai,
    quaters: [
      { header: "Quater 4", discription: "AI-351: Developing Planet-Scale Intelligent APIs...", number: 4 },
      { header: "Quater 5", discription: "AI-361: Deep Learning and MLOps", number: 5 }
    ]
  },
  {
        slug : "cloud",
        header : "Cloud-Native Computing Specialization",
        discription : "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes",
        image : cloud,
        quaters : [
         {
            header : "Quater 4",
            discription : "CN-351: Certified Kubernetes Application Developer (CKAD)",
            number : 4
         },
         {
            header : "Quater 5",
            discription : "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
            number : 5
         },
        ]  
      },
      {
            slug : "ambient",
            header : "Ambient Computing and IoT Specialization",
            discription : "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
            image : ambient,
            quaters : [
             {
                header : "Quater 4",
                discription : "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number : 4
             },
             {
                header : "Quater 5",
                discription : "AC-361: Embedded Programming using C and Rust",
                number : 5
             },
            ]  
          },
          {
                slug : "genpmic",
                header : "Genomics and Bioinformatics Specialization",
                discription : "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
                image : genomics,
                quaters : [
                 {
                    header : "Quater 4",
                    discription : "Bio-351: Python for Biologists",
                    number : 4
                 },
                 {
                    header : "Quater 5",
                    discription : "Bio-361: Bioinformatics with Python",
                    number : 5
                 },
                ]  
              },
              {
                slug : "network",
                header : "Network Programmability and Automation Specialization",
                discription : "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
                image : network,
                quaters : [
                 {
                    header : "Quater 4",
                    discription : "NPA-351: CCNA 200-301 Certification",
                    number : 4
                 },
                 {
                    header : "Quater 5",
                    discription : "NPA-361: Network Programmability and Automation",
                    number : 5
                 },
                ]  
              },
];


const Specialized : React.FC = () => {

  const [selectedItem, setSelectItem] = useState("metaverse");
  
      const selectedItemData = courseList.find((item) => item.slug === selectedItem )

  return (
    <section>
         <Wrapper>
        <div className='py-6 px-14 cursor-pointer'>

            {/* Header */}
            <div>
            <h2 className='text-2xl font-bold whitespace-pre-line '>Specialized Tracks:</h2>
            <p className='mt-3 text-xs text-slate-600 max-w-screen-md'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
            </div>

            {/* content left */}
            <div className='self-start sticky top-0 mt-8 flex lg:flex-row gap-x-6 gap-y-8'>
            <div className=' shadow-xl justify-self-start basis-8/12 rounded-xl border border-slate-200 py-8 px-8 '>
            <h4 className='text-teal-600 font-semibold text-base  mt-4'>Specialized Track</h4>
            <h2 className='text-lg font-bold whitespace-pre-line'>{selectedItemData?.header}</h2>
            <p className=' text-xs text-slate-600 text-left '>{selectedItemData?.discription}</p>
            
            {/* <button className='text-teal-700 text-xl mt-4 underline'> </button> */}

            <button className="border-emerald-700 border text-teal-800 mt-3 py-1 px-2 flex items-center space-x-2 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-slate-200">
  <span className='text-sm'>Learn More</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 transform hover:translate-x-1" fill="none" viewBox="10 0 20 20" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
  </svg>
</button>

<div className='flex gap-14 '>
     <div className="relative w-40 h-40 left-[10px] top-[330px] text-center mt-4 ">
        <div className="absolute -top-72 text-left">
          <p className="text-sm font-bold text-left">Quarter IV</p>
          <p className="text-xs text-slate-900 text-left">W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</p> 
          <span className='absolute -z-10 text-slate-300 text-9xl font-bold right-1 -top-9'>4</span>
        </div>
      </div>

      <div className="relative w-40 h-40 left-[10px] top-[330px] text-center mt-4 ">
        <div className="absolute -top-72 text-left">
          <p className="text-sm font-bold text-left">Quarter V</p>
          <p className="text-xs text-slate-900 text-left">
MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences

</p> 
          <span className='absolute -z-10 text-slate-300 text-9xl font-bold right-1 -top-9'>5</span>
        </div>
      </div>
      </div>
</div>

            {/* content right */}
            <div className=''>
            <div className='px-5 py-3 '>
     {courseList.map((item, i) => (
         <div onClick={() => setSelectItem(item.slug)} key={item.slug} className='flex items-center gap-4 mb-3 mt-1'>
           {/* Image Container */}
           <div className='w-25 h-14 rounded-md flex-shrink-0 border bg-cover bg-gradient-to-bl from-cyan-500 via-violet-700 to-blue-500 '>
             <Image
               src={item.image}
               alt={item.header}
               className='w-20 h-14 object-cover rounded-md transition-transform duration-300 ease-in-out hover:translate-x-[4px] hover:translate-y-[-5px]'
             />
           </div>
          
          {/* Text Container */}
           <div className='flex flex-col'>
             <h3 className='text-teal-500 text-xs'>Specialize Program</h3>
             <h4 className='text-sm font-semibold text-black'>
               {item.header}
             </h4>
             {/* <p className='text-sm text-gray-700'>
               {item.discription}
             </p> */}
           </div>
         </div>
       ))}
     </div>
            </div>
            </div>

            {/* <div className=" -z-20 absolute left-0 mix-blend-soft-light transform -translate-y-1/2 w-64 h-64 bg-teal-200 rounded-full blur-3xl items-stretch opacity-70"></div> */}

        </div>

         </Wrapper>
    </section>
  )
  
}

export default Specialized