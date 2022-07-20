import React from 'react';
import person from '../../assets/person.png';
import compete from '../../assets/compete.png';
import trophy from '../../assets/trophy.png';
import './Styles/Middle.css'

const Middle = () => {
    return (
        <div className='main'>
            <div className='container'>
                <img className='vector' src={person} alt="" />
                <h3>SIGN UP</h3>
                <p><small>Create New Account</small></p>
            </div>
            <div className='line'>
            </div>
            <div className='container'>
                <img className='vector' src={compete} alt="" />
                <h3>COMPETE</h3>
                <p><small>Join Tournaments to compete with others</small></p>
            </div>
            <div className='line'>
            </div>
            <div className='container'>
                <img className='vector' src={trophy} alt="" />
                <h3>WIN & EARN</h3>
                <p><small>Win & Earn in the form of crypto</small></p>
            </div>
        </div>
    );
};

export default Middle;