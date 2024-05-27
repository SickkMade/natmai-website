import { Parallax } from 'react-parallax';
import Test2 from '../img/test2.jpg'

const ImgTwo = () => (
    <Parallax className='image' bgImage={Test2} strength={800}>
        <div className='content'>
            <span className='img-txt'>
                portfolio
            </span>
        </div>
    </Parallax>
);

export default ImgTwo