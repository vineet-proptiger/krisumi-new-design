'use client'
import React from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const VirtualTour = ({ setIsOpen }) => {
  return (
    <section id="virtual-tour" className="relative w-full h-[60vh] min-h-[400px] md:min-h-[550px] flex items-center justify-center cursor-pointer overflow-hidden group" onClick={() => setIsOpen(true)}>
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
        <Image src={heroImages.banner} alt="Virtual Tour" fill className="object-cover" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 text-center text-white flex flex-col items-center">
        
        {/* Play Icon Circle */}
        <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] border border-white/60 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:border-white">
          <svg className="w-6 h-6 md:w-8 md:h-8 ml-1 md:ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>

        {/* Text */}
        <h2 style={{
          fontFamily: F_JOST,
          fontWeight: '500',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          margin: 0
        }} className="text-[16px] md:text-[20px] drop-shadow-md">
          STEP INTO YOUR FUTURE HOME
        </h2>
      </div>
    </section>
  )
}

export default VirtualTour
