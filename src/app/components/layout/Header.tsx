'use client'

import React from 'react';

import Hero from '@/app/components/widgets/Hero'
import Wrapper from "@/app/components/shared/Wrapper"
import { Children } from 'react'
import CoreTrack from '@/app/components/widgets/CoreTrack'
import Specialized from '@/app/components/widgets/Specialized'
import Outcome from "@/app/components/widgets/Outcome"



export default function Home() {
  return (
  <>
  <head>
  {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
  </head>
  <main>
    
    {/* Hero section */}
       <Hero/>
    {/* core Track section */}
       <CoreTrack/>
    {/* specialized section */}
       <Specialized/>
    {/* Outcome */}
       <Outcome/>
    {/*footer */}
    
  </main>
  </>)
}

