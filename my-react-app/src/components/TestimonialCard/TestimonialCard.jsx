import React from "react";
import './TestimonialCard.css';
import Rating from '@mui/material/Rating';
import profilePlaceholder from '../assets/placeholder-profile.png';

function TestimonialCard() {
    return(
        <div className="testimonial-card">
            <Rating name="read-only" value='5' size='medium' readOnly />
            <p className="feedback"><i>"I've been shopping here for years and the quality is always top-notch. Fast shipping and great customer service!"</i></p>
            <div className="customer">
                <img src={profilePlaceholder} alt="" />
                <div className="customer-info">
                    <p className="name">John Doe</p>
                    <p className="about">Loyal Customer</p>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;