import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ img, altimg, header, text, href }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      // check if href is an external link
      if (href.startsWith('http')) {
        window.open(href, '_blank');
      } else {
        navigate(href);
      }
    };
  
    return (
      <div className='card-container'>
          <div className="card-image">
              <img src={img} alt={altimg || 'image description'} />
          </div>
          <div className="card-section">
              <h1>{header}</h1>
              <p>{text}</p>
              <button className='card-button' onClick={handleClick}>
                check it out!
              </button>
          </div>
      </div>
    );
  }
  

export default Card;
