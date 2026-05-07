'use client'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationItems = [
  { name: 'IGI Airport', time: '35-45 mins' },
  { name: 'Cyber City', time: '25-30 mins' },
  { name: 'Dwarka', time: '30-35 mins' },
  { name: 'IFFCO Chowk', time: '20-25 mins' },
  { name: 'Ambience Mall', time: '25-30 mins' },
  { name: 'NPR', time: '5 mins' },
  { name: 'Pataudi Road', time: '5 mins' },
  { name: 'MG Road', time: '20-25 mins' },
  { name: 'Medanta Hospital', time: '20-25 mins' },
  { name: 'Hero Honda Chowk', time: '10-15 mins' },
  { name: 'Rajiv Chowk', time: '15-20 mins' },
  { name: 'Fortis Hospital', time: '20-25 mins' },
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '72px 0',
      background: '#EAE5DC', // Matched to the screenshot background
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
           <h2 style={{
             fontFamily: F_JOST, fontWeight: '700', fontSize: '18px',
             color: '#684C1B', letterSpacing: '0.22em', textTransform: 'uppercase', margin: 0,
             display: 'flex', alignItems: 'center', justifyContent: 'center',
           }}>
             <svg width="28" height="14" viewBox="0 0 28 14" fill="none" style={{ display: 'inline-block', marginRight: '10px', verticalAlign: 'middle', marginBottom: '3px' }}>
               <path d="M2 12 Q14 2 26 12" stroke="#684C1B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
             </svg>
             LOCATION ADVANTAGES
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Data Table */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{
              border: '1px solid #D5C2A8',
              background: '#EAE5DC',
            }}>
              
              {/* Table Header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                background: '#9b2c2c', // Matches the brand dark red shown
                color: '#fff',
                fontFamily: F_JOST,
                fontWeight: '600',
                fontSize: '13.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                borderBottom: '1px solid #D5C2A8',
              }}>
                <div style={{ padding: '10px 16px', borderRight: '1px solid #D5C2A8' }}>LOCATION</div>
                <div style={{ padding: '10px 16px', textAlign: 'center' }}>APPROX. DRIVE TIME*</div>
              </div>

              {/* Table Rows */}
              <div>
                {locationItems.map((item, i) => (
                  <div key={i} style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr',
                    background: i % 2 === 0 ? '#F4EFE6' : '#EAE5DC', // Alternating row colors
                    color: '#684C1B',
                    fontFamily: F_SANS,
                    fontSize: '13.5px',
                    fontWeight: '600',
                    borderBottom: i < locationItems.length - 1 ? '1px solid #D5C2A8' : 'none',
                  }}>
                    <div style={{ padding: '7px 16px', borderRight: '1px solid #D5C2A8', display: 'flex', alignItems: 'center' }}>
                      {item.name}
                    </div>
                    <div style={{ padding: '7px 16px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              overflow: 'hidden',
              border: '1px solid #D5C2A8',
              height: '100%', minHeight: '420px',
              position: 'relative',
              background: '#EAE5DC'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.06329918875!2d76.9743147!3d28.417346799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d170035b00aeb%3A0x78ecf54754cd4d2d!2sKrisumi%20Waterside%20Residences!5e0!3m2!1sen!2sin!4v1776744612919!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Sector-36A, Gurgaon
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
