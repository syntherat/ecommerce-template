import React from "react";
import './Footer.css';
import logo from '../assets/logoipsum-288.svg';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear();

    return(
        <div className="footer">
            <div className="wrapper">
                <div className="col col1">
                    <img src={logo} alt="" />
                    <p className="about">We curate high-quality products to help you express your unique style. 
                    Our mission is to provide exceptional shopping experiences.</p>
                    <div className="socials">
                        <FacebookOutlinedIcon />
                        <InstagramIcon />
                        <XIcon />
                        <YouTubeIcon />
                    </div>
                </div>
                <div className="col col2">
                    <div className="header">
                        <p>Shop</p>
                    </div>
                    <div className="links">
                        <ul>
                            <li><p>Shop All</p></li>
                            <li><p>T-shirts</p></li>
                            <li><p>Shoes</p></li>
                            <li><p>Accessories</p></li>
                            <li><p>New Arrivals</p></li>
                        </ul>
                    </div>
                </div>
                <div className="col col3">
                    <div className="header">
                        <p>Customer Service</p>
                    </div>
                    <div className="links">
                        <ul>
                            <li><p>Contact Us</p></li>
                            <li><p>FAQs</p></li>
                            <li><p>Shipping & Returns</p></li>
                            <li><p>Terms & Conditions</p></li>
                            <li><p>Privacy Policy</p></li>
                        </ul>
                    </div>
                </div>
                <div className="col col4">
                    <div className="header">
                        <p>Contact Us</p>
                    </div>
                    <div className="links">
                        <ul>
                            <li className="address">
                                <LocationOnOutlinedIcon style={{color: 'rgb(249,116,21)', cursor: 'default'}} />
                                <p>123 Fashion Street, Style City, SC 12345</p>
                            </li>
                            <li className="phone">
                                <LocalPhoneOutlinedIcon style={{color: 'rgb(249,116,21)', cursor: 'default'}} />
                                <p>+1 (800) 555-0199</p>
                            </li>
                            <li className="email">
                                <EmailOutlinedIcon style={{color: 'rgb(249,116,21)', cursor: 'default'}} />
                                <p>support@logoipsum.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {currentYear} LogoIpsum. All rights reserved.</p>
                <p>Owned, Operated & Funded by Proud Indians. <br />
                    Everything on this website has been made with a lot of love and hard work. If you copy anything we will hunt you down. We mean it.</p>
            </div>
        </div>
    );
}

export default Footer;