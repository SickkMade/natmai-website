import React from 'react'

import NavBar from '../components/NavBar'
import FullTextBox from '../components/FullTextBox'
import ParallaxImg from '../components/ParallaxImg';
import AboutMe from '../components/AboutMe';
import PdfReader from '../components/PdfReader';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Gallary from '../components/Gallary';

import Image1 from '../img/test.jpg';
import PictoChat from '../img/pictoo.png'
import Image2 from '../img/test2.jpg';
import Image3 from '../img/test3.jpg';
import Image4 from '../img/banana.jpg';
import Rhino from '../img/rhinolocations.png';
import Resume from '../documents/revising copy-1.pdf'
import Physics from '../img/atom.gif';

const Home = () => {
  return (
    <div>
    <NavBar/>
    <section id="home">
        <ParallaxImg bgImage={Image1} strength={800}>
            <AboutMe/>
        </ParallaxImg>
    </section>

    <section id="resume">
        <FullTextBox header="resume" text = 'As a computer science student with a solid academic foundation and practical teaching experience, I merge technical proficiency with a passion for leadership and community engagement. My experience spans creating interactive web applications using modern frameworks like React and mentoring the next generation of tech enthusiasts. '>
        </FullTextBox>

        <ParallaxImg bgImage={Image2} strength={800}>
            <PdfReader Pdf={Resume}/>
        </ParallaxImg>   
    </section>

    <FullTextBox header="projects" text = 'Below are some projects I have worked on throughout my college career.'>
    </FullTextBox>

    <section id="projects">
        <ParallaxImg bgImage={Image3} strength={800}>
            <Card img={Rhino} altimg='image of RhinoLocations.com' header='RhinoLocations' text='Designed and developed a dynamic website aimed at managing over 70 filmable locations to enhance operational capabilities within the film industry. The platform utilizes React for seamless front-end development and Firebase for efficient real-time data management. Leveraged Java Oracle Cloud for hosting, ensuring robust and secure server management with NGINX. Integrated CertBot to automate the renewal and installation of SSL certificates, further enhancing the security and reliability of the website.' href='https://rhinolocations.com' />
            <Card img={PictoChat} altimg='logo of PictoChat' header='PictoChat Rebrand' text='For a local 24 hour Hackathon, MarinaHacks3.5, I reimagined and developed a new version of PictoChat, focusing on significantly improving interactivity and user engagement. I utilized React for responsive front-end development, integrated Flask and WebSockets for real-time backend operations, and used Aseprite for sophisticated graphic design. ' href='https://github.com/harvest7777/marinahacks-3.5' />
            <Card img={Physics} altimg='testing' header='Physics Music Balls ' text='Originating from a hackathon, this project combines physics and music to create an engaging interactive experience, highlighting fun creative applications of JavaScript to enhance gameplay mechanics and user interactions, exploring the interplay of physical concepts and sound.' href='https://github.com/swathis-metaverse/SwathisMetaverse' />
        </ParallaxImg> 
    </section>

    <FullTextBox header="photos" text = 'THANK YOU JACK' />
    <section id="photos">
        <ParallaxImg bgImage={Image4} strength={800}>
            <Gallary imageCount={3}/>
        </ParallaxImg>
    </section>

    <section id="contact">
        <Footer />
    </section>
  </div>

  )
}

export default Home