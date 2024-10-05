// import React from 'react';

import Image from "next/image"
import Wrapper from "@/app/components/shared/Wrapper"

import heropos from "@/app/components/assetes/heropos.png"




const Hero = () => {
  return (

  <Wrapper>


    <section>
        <div className="flex flex-col md:flex-row items-center max-w-screen-2xl mx-auto py-6 px-14 md:px-14 space-y-5 md:space-y-0 md:space-x-10 ">
            <div className="flex-1 ">
               <h4 className=" flex-1 -mt-8 text-xs font-bold text-teal-800 ">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                <h1 className=" font-medium text-3xl text-pretty">Certified Web 3.0 and Metaverse Developer</h1>
                <p className="text-sm font-extralight mt-3">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet  </p>
                <p className="text-sm font-extralight mt-2">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>

               <button className="bg-teal-900 text-white text-xs font-medium pb-2 py-1 px-3 rounded-full text-md transition-transform duration-300 transform hover:scale-110 hover:bg-teal-900 mt-3">
                Learn more
               </button>

            </div>

             <div className="relative h-auto w-full md:w-auto px-6 md:px-12 mt-5 md:mt-0">
              <Image src={heropos} width={310} height={1500} alt="hero"/>
             </div>
        
        </div>
    </section>
    </Wrapper>
    
  )
}

export default Hero