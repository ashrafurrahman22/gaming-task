import React from 'react';
import './Styles/Middle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faUserPlus, faUsersGear } from '@fortawesome/free-solid-svg-icons';

const Middle = () => {
    return (
        <div className='main'>
            <div className='container'>
                <FontAwesomeIcon className='vector' id='trophy' icon={faUserPlus}/>
                <h3>SIGN UP</h3> 
                <p><small>Create New Account</small></p>
            </div>
            <div className='line'>
            </div>
            <div className='container'>
                <FontAwesomeIcon className='vector' id='trophy' icon={faUsersGear}/>
                <h3>COMPETE</h3>
                <p><small>Join Tournaments to compete with others</small></p>
            </div>
            <div className='line'>
            </div>
            <div className='container'>
                <FontAwesomeIcon className='vector' id='trophy' icon={faTrophy} />
                <h3>WIN & EARN</h3>
                <p><small>Win & Earn in the form of crypto</small></p>
            </div>
        </div>
    );
};

export default Middle;