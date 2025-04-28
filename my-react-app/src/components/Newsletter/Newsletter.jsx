import React from "react";
import './Newsletter.css';
import newsletterImage from '../assets/Headphone-Zone-Popup-Newsletter-4_1.png';

function Newsletter() {
    return(
        <div className="newsletter">
            <div className="wrapper">
                <img src={newsletterImage} alt="" />
                <div className="subscribe">
                    <h2>@</h2>
                    <h2>Subscribe to our<br /> Newsletter</h2>
                    <p>Be the first to know about exclusive offers, free giveaways, and <br />once-in-a-lifetime deals you won't want to miss.</p>
                    <div className="newsletter-form">
                        <form>
                            <input type="email" className="email-input" name="email" placeholder="E-mail" required/>
                            <button>SUBSCRIBE</button>
                        </form>
                    </div>
                    <p>By completing this form you are signing up to receive our emails. You can <br /> unsubscribe at any time.</p>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;