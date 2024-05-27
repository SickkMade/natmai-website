import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxImg = ({ bgImage, strength, children }) => {
    return (
        <Parallax bgImage={bgImage} strength={strength} className="image">
            <div className="content">
                {children}
            </div>
        </Parallax>
    );
};

export default ParallaxImg;
