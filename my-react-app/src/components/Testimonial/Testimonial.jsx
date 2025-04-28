import React from "react";
import './Testimonial.css';
import TestimonialCard from "../TestimonialCard/TestimonialCard";

function Testimonial() {
    return(
        <div className="testimonial">
            <h2>What Our Customers Say</h2>
            <p>Don't just take our word for it. Here's what our customers have to say.</p>
            <div className="feedback-cards">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    );
}

export default Testimonial;