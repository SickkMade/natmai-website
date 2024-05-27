import React from 'react'

import NavBar from '../components/NavBar'
import FullTextBox from '../components/FullTextBox'
import ParallaxImg from '../components/ParallaxImg';
import AboutMe from '../components/AboutMe';
import PdfReader from '../components/PdfReader';

import Image1 from '../img/test.jpg';
import Image2 from '../img/test2.jpg';
import Image3 from '../img/test3.jpg';
import Resume from '../documents/revising copy-1.pdf'

const Home = () => {
  return (
    <div>
    <NavBar/>

    <ParallaxImg bgImage={Image1} strength={800}>
        <AboutMe/>
    </ParallaxImg>

    <FullTextBox/>

    <ParallaxImg bgImage={Image2} strength={800}>
         <PdfReader Pdf={Resume}/>
    </ParallaxImg>   

    <FullTextBox/>

    <ParallaxImg bgImage={Image3} strength={800}>
        <span className='img-txt'>
            projects
        </span>
    </ParallaxImg>  
  </div>
  
  )
}

export default Home