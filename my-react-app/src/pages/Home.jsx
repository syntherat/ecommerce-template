import React from "react";
import Hero from "../components/Hero/Hero";
import Highlight from "../components/Highlight/Highlight";
import Featured from "../components/Featured/Featured";
import Newsletter from "../components/Newsletter/Newsletter";
import Testimonial from "../components/Testimonial/Testimonial";
import TalkWithUs from "../components/TalkWithUs/TalkWithUs";
import Footer from "../components/Footer/Footer";

function Home() {
    return(
        <div>
            <Hero />
            <Highlight />
            <Featured />
            <Newsletter />
            <Testimonial />
            <TalkWithUs />
        </div>
    );   
}

export default Home;