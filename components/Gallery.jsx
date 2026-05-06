'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { galleryImages } from '../lib/images'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const ArcIcon = () => (
  <svg width="28" height="14" viewBox="0 0 28 14" fill="none"
    style={{ display: 'inline-block', marginRight: '10px', verticalAlign: 'middle', marginBottom: '3px' }}>
    <path d="M2 12 Q14 2 26 12" stroke="#684C1B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
)

const Gallery = ({ setIsOpen }) => {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const img1 = galleryImages[index % galleryImages.length]
  const img2 = galleryImages[(index + 1) % galleryImages.length]
  const img3 = galleryImages[(index + 2) % galleryImages.length]

  return (
    <section id="gallery" style={{
      padding: '72px 0',
      background: '#fff',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* ── Header Row ── */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          
          {/* Centered Heading for mobile, Left for desktop */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto md:ml-[30%]">
            <ArcIcon />
            <h2 style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
              color: '#684C1B', letterSpacing: '0.22em', textTransform: 'uppercase', margin: 0,
            }}>IMAGE GALLERY</h2>
          </div>

        </div>

        {/* ── Image Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Left Column (2 Stacked Images) */}
          <div className="flex flex-col gap-4">
            
            {/* Top Left */}
            <div className="relative w-full" style={{ aspectRatio: '16/10', background: '#eee' }}>
              <Image src={img1.src} alt={img1.alt || 'Gallery Image'} fill className="object-cover" />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '32px 24px 20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                pointerEvents: 'none'
              }}>
                <span style={{ color: '#fff', fontFamily: F_JOST, fontSize: '15px', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {img1.label || 'MAIN POOL'}
                </span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9"/>
                  <polyline points="9 21 3 21 3 15"/>
                  <line x1="21" y1="3" x2="14" y2="10"/>
                  <line x1="3" y1="21" x2="10" y2="14"/>
                </svg>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="relative w-full" style={{ aspectRatio: '16/10', background: '#eee' }}>
              <Image src={img2.src} alt={img2.alt || 'Gallery Image'} fill className="object-cover" />
            </div>

          </div>

          {/* Right Column (1 Large Image) */}
          <div className="relative w-full h-full min-h-[400px] md:min-h-full" style={{ background: '#eee' }}>
            <Image src={img3.src} alt={img3.alt || 'Gallery Image'} fill className="object-cover" />
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Gallery
