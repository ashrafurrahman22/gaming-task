import React from 'react';
import './Styles/Header.css';

const Header = () => {
    return (
        <div>
        <div className='main-container'>
        <div className='bigimage'>
            

         {/* heading text  */}
         <div className='overlay'>
                <h1>EVOLVE YOUR</h1>
                <h1>GAMING EXPERIENCE</h1>
                <p>PLAY WITH FRIENDS AND COMPETE AGAINST RIVALS FROM AROUND THE WORLD</p>
                    <br />
                <button className='join-btn'>JOIN NOW</button>
                </div>  

        </div>
        <div className='smallImage'>
    
        </div>
    </div>
   </div>
    );
};

export default Header;