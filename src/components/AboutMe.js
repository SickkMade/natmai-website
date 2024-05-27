import React from 'react'
import Headshot from '../img/silly.jpg'

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="profile-image-section">
        <img src={Headshot} alt="nathan mai" />
      </div>
      <div className="bio-section">
        <h1>nathan mai</h1>
        <p>Elit exercitation fugiat anim reprehenderit eiusmod in magna. Lorem fugiat id deserunt adipisicing. Ut non consequat fugiat laboris consequat minim do nulla Lorem ad tempor ut minim non. Eiusmod eu deserunt mollit labore adipisicing ex labore qui nisi.</p>

      </div>
    </div>

  )
}

export default AboutMe