import { Parallax } from 'react-parallax';
import Test from '../img/test.jpg'
import AboutMe from './AboutMe';

const ImgOne = () => (
    <Parallax className='image' bgImage={Test} strength={800}>
        <div className='content'>
            <AboutMe/>
        </div>
    </Parallax>
);

export default ImgOne