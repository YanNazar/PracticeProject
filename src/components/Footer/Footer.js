import React from "react";
import './Footer.css';
import Logo from '../Logo/Logo';
import LeaveMessage from "../LeaveMessage/LeaveMessage"
import Navigation from '../Navigation/Navigation';

function Footer (){
    return (
        <div className="footer" 
            id="contact">
                
            <LeaveMessage/>
            <div className="lastLine">
                <Logo/>
                <Navigation/>
            </div>
        </div>
    );    
}

export default Footer;