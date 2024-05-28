import React from 'react'
import Headshot from '../img/headshot.jpg'

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="profile-image-section">
        <img src={Headshot} alt="nathan mai" />
      </div>
      <div className="bio-section">
        <h1>nathan mai</h1>
        <p>
        I am a third year Computer Science student at California State University Long Beach. I have experience in technologies such as React, Flask, and Java Oracle Cloud, and am proficient in programming languages including Python, JavaScript, and C#. I currently serve as the president of the Society of Hispanic Professional Engineers (SHPE). As a coding instructor I develop curriculum and teach programming classes for students. I am passionate about leveraging my skills to make impactful contributions in diverse environments.         
        </p>

      </div>
    </div>

  )
}

export default AboutMe