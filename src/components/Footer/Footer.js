import React from "react";
import './Footer.css';
import LeaveMessage from "../LeaveMessage/LeaveMessage"
import Navigation from '../Navigation/Navigation';

function Footer (){
    return (
        <div className="footer">
            <LeaveMessage/>
            <div className="navBar">
            <Navigation/>
            </div>
        </div>
    );    
}

export default Footer;