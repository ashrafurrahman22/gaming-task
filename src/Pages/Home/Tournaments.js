import React from 'react';
import './Styles/Tournaments.css';
import image1 from '../../assets/Rectangle 466.png';
import image2 from '../../assets/Rectangle 467.png';
import image3 from '../../assets/Rectangle 468.png';
import image4 from '../../assets/Rectangle 469.png';
import image5 from '../../assets/Rectangle 471.png';
import image6 from '../../assets/Rectangle 472.png';
import image7 from '../../assets/Rectangle 473.png';
import image8 from '../../assets/Rectangle 474.png';
import image9 from '../../assets/Rectangle 487.png';
import image10 from '../../assets/Rectangle 488.png';
import image11 from '../../assets/Rectangle 491.png';
import image12 from '../../assets/Rectangle 492.png';

const Tournaments = () => {
    return (
        <div className='main-div'>
            {/* mother div */}
            <div className='header-part'>
            <div>
                <h2>Available Tournaments</h2>
            </div>
            <div className='line'>

            </div>
            <div>
                <input id='search' type="text" placeholder='  search' /> 
                
            </div>
            </div>

            {/* image part */}
            <div className='mesorny'>
                <div className='grid-images'>
                    <img src={image1} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image2} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image3} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image4} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image5} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image6} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image7} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image8} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image9} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image10} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image11} alt="" />
                </div>
                <div className='grid-images'>
                    <img src={image12} alt="" />
                </div>

            </div>
        
        </div>
    );
};

export default Tournaments;