import React from 'react';
import Header from './Header';
import Middle from './Middle';
import Tournaments from './Tournaments';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Middle></Middle>
            <Tournaments></Tournaments>
        </div>
    );
};

export default Home;