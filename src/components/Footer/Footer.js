import React from "react";
import './Footer.css';
import LeaveMessage from "../LeaveMessage/LeaveMessage"

function Footer (){
    return (
        <div className="footer">
            <LeaveMessage/>
        </div>
    );    
}

export default Footer;