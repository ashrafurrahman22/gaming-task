import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Header.css';

const Header = () => {
    return (
        <div>
        <div className='main-container'>
        <div className='bigimage'>
            <nav>

                   <ul>
                        <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/'>Tournaments</Link>
                    <Link className='links' to='/'>Compare Devices</Link>
                    <Link className='links' to='/'>Shop</Link>
                    <input className='searchOpt links' type="text" placeholder='Search' />
                    <Link className='links' to='/'>Login</Link>
                    <Link className='links' to='/'>Sign Up</Link>
                       
                   </ul>
                
            </nav>

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