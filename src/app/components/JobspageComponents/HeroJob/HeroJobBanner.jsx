import React from 'react'
import Image from 'next/image'
function HeroJobBanner() {
  return (
    <div style={{
        paddingTop:"5rem"
    }}>
        <Image src="/jobHero.png" width={600} height={520}/>
    </div>
  )
}

export default HeroJobBanner