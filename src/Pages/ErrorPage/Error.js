import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='errors'>
            <h1>404!</h1>
            <h4>Page Not Found!</h4>
            <Link to='/'>Back to home ?</Link>
        </div>
    );
};

export default Error;