import React from 'react'
import webImg from './images/illustration-mockups.svg'
function LeftHero() {
  return (
    <div className="left_hero_section">
      {/* image */}
      <img src={webImg} alt="illstration" className="illustration_image" />
    </div>
  )
}

export default LeftHero
