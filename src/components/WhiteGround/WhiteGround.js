import React from 'react';
import BackGroundFigures from '../BackGroundFigures/BackGroundFigures';
import Footer from '../Footer/Footer';
import './WhiteGround.css';

function WhiteGround(){
    return (
        <div className='ground'>
            <BackGroundFigures/>
            <Footer/>
        </div>
    );
}

export default WhiteGround;