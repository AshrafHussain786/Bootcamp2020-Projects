import React from 'react';
import web from '../images/contentWriting.svg'
import { Common } from './Common';
import useWebAnimations from "@wellyshen/use-web-animations";

export const Home = () => {
    const { ref } = useWebAnimations({
        keyframes: {
            transform: "translateX(10%)",
        },
        timing: {
            duration: 1000,
            iterations: 1,
            direction: "normal",
            easing: "ease-in-out",
        },
    });
    return (
        <>
            <section ref={ref} id="header" className="animate__animated animate__lightSpeedInRight d-flex align-items-center">
                <Common
                    name=" Grow your business with "
                    imgsrc={web}
                    visit="/about"
                    btname="Get Started"
                />
            </section>
            <ul className="social">
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" ><i className="fa fa-envelope"></i><a href="mailto: noumanatiqsatti.92@gmail.com">ashrafhussain786@yahoo.com</a></li>
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s" ><i className="fa fa-phone"></i><a href="callto:+92 312 564 6074">+92 345 1234567</a></li>
                <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s" ><i className="fa fa-github" aria-hidden="true"></i><a href="https://github.com/AshrafHussain786">Git Hub: ashrafhussain786</a></li>
            </ul>

        </>
    )
}