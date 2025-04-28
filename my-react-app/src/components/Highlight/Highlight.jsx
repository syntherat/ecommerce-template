import React from "react";
import './Highlight.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CachedIcon from '@mui/icons-material/Cached';
import GppGoodIcon from '@mui/icons-material/GppGood';
import VerifiedIcon from '@mui/icons-material/Verified';

const serviceIconStyle = {
    color: 'rgb(249, 116, 21)',
    fontSize: '50px',
    backgroundColor: 'rgba(249, 116, 21, 0.2)',
    padding: '20px',
    borderRadius: '50%',
} 

function Highlight() {
    return(
        <div className="service-highlights">
            <div className="services">
                <LocalShippingIcon style={serviceIconStyle}/>
                <h4>Free Shipping</h4>
                <p>On orders over &#8377;499. Get your items delivered
                    to your doorstep for free.
                </p>
            </div>
            <div className="services">
                <CachedIcon style={serviceIconStyle}/>
                <h4>Easy Returns</h4>
                <p>10-day return policy. No questions asked, hassle-free returns.</p>
            </div>
            <div className="services">
                <GppGoodIcon style={serviceIconStyle}/>
                <h4>Secure Shopping</h4>
                <p>Your data is protected with advanced encryption and secure payment methods.</p>
            </div>
            <div className="services">
                <VerifiedIcon style={serviceIconStyle}/>
                <h4>Quality Guarantee</h4>
                <p>We stand behind the quality of every product we sell.</p>
            </div>
        </div>
    );   
}

export default Highlight;