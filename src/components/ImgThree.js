import { Parallax } from 'react-parallax';
import Test3 from '../img/test3.jpg'

const ImgThree = () => (
    <Parallax className='image' bgImage={Test3} strength={800}>
        <div className='content'>
            <span className='img-txt'>
                hobbies?!
            </span>
        </div>
    </Parallax>
);

export default ImgThree