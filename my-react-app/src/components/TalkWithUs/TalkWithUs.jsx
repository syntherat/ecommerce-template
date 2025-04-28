import React from "react";
import './TalkWithUs.css';
import telephoneGIF from '../assets/icons8-telephone.gif';
import contactGIF from '../assets/icons8-contact-us.gif';

function TalkWithUs() {
    return(
        <div className="talk-with-us">
            <div className="header">
                <h2>Talking To Us Is Easy</h2>
                <p>Get in Touch with Our Team directly - We're Here to Help</p>
            </div>
            <div className="body">
                <div className="card">
                    <img src={telephoneGIF} alt="" />
                    <h3>Request a Callback</h3>
                    <p>Our team is available for callbacks Monday to Friday, 9:00 AM to 6:00 PM.</p>
                    <button>SPEAK TO US</button>
                </div>

                <div className="card">
                    <img src={contactGIF} alt="" />
                    <h3>Write to Us</h3>
                    <p>Prefer to drop us a line? Our team will get back to you via email within a working day.</p>
                    <button>MAIL US</button>
                </div>
            </div>
        </div>
    );
}

export default TalkWithUs;