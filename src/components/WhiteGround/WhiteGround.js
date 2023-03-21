import React from 'react';
import Apply from '../Apply/Apply';
import BackGroundFigures from '../BackGroundFigures/BackGroundFigures';
import Footer from '../Footer/Footer';
import './WhiteGround.css';

function WhiteGround(){
    return (
        <div className='ground'>
            <BackGroundFigures/>
            <Apply/>
            <Footer/>
        </div>
    );
}

export default WhiteGround;