import React from "react";
import './Footer.css';
import Logo from '../Logo/Logo';
import LeaveMessage from "../LeaveMessage/LeaveMessage"
import Navigation from '../Navigation/Navigation';
import Contacts from "../Contacts/Contacts";

function Footer (){
    return (
        <div className="footer" 
            id="contact">
            <div className="twoColumns">
                <LeaveMessage/>
                <Contacts/>
            </div>    
            <div className="lastLine">
                <Logo/>
                <Navigation/>
            </div>
        </div>
    );    
}

export default Footer;