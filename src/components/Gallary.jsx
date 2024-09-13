import '../css/Gallary.css'
import '../css/variables.css'
import { useRef, useEffect, useState } from 'react'

function Gallary({ imageCount }) {
    const galaryRef = useRef(null)
    const innerGallaryRef = useRef(null)
    const [childWidth, setChildWidth] = useState(0)
    const [innerGallarySlide, setInnerGallarySlide] = useState(0)

    const forward = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="48px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>

    const gallaryItems = [
        {
            img:'logo192.png',
        },
        {
            img:'logo192.png',
        },
        {
            img:'logo192.png',
        },
        {
            img:'logo192.png',
        },
        {
            img:'logo192.png',
        },
        {
            img:'logo192.png',
        },
        {
            img:'logo192.png',
        },
        {
            img:'logo192.png',
        },
    ]

    //positive direction is right, negative is left
    const slideInnerGallary = (dir) => {
        setInnerGallarySlide(innerGallarySlide + dir * galaryRef.current.offsetWidth)
    }

    //runs on mount
    useEffect(() => {
        const updateChildWidth = () => {
            setChildWidth(galaryRef.current.offsetWidth/imageCount);
        }
        updateChildWidth()
        window.addEventListener('resize', updateChildWidth);

        //cleanup
        return () => window.removeEventListener('resize', updateChildWidth);
    }, [imageCount])
    
    const shouldShowNextButton = () => {
        if(innerGallaryRef.current){
            return innerGallarySlide+galaryRef.current.offsetWidth < (galaryRef.current.offsetWidth/imageCount)*gallaryItems.length
        }
    }
    const shouldShowPrevButton = () => {
        if(innerGallaryRef.current){
            return innerGallarySlide != 0
        }
    }
    
  return (
    <div className="galary" ref={galaryRef}>
        {shouldShowNextButton() && <button onClick={() => slideInnerGallary(1)}className="gallary-button gallary-next gallary-svg">{forward}</button>}
        {shouldShowPrevButton() && <button onClick={() => slideInnerGallary(-1)}className="gallary-button gallary-prev gallary-svg">{forward}</button>}
        <div className="inner-gallary" ref={innerGallaryRef} style={{ transform: `translate(${-innerGallarySlide}px)`, transition: 'transform .5s ease' }}>
            {gallaryItems.map((obj, i) => {
                return <img className="galary-item" key={i} src={obj.img} width={childWidth+'px'} />
            })}
        </div>
    </div>
  )
}

export default Gallary