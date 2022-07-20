import React from 'react';
import './Styles/Tournaments.css';

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
        </div>
    );
};

export default Tournaments;