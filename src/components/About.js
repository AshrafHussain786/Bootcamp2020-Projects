import React from 'react';
import copy from '../images/contentCopyWrite.svg'
import useWebAnimations from "@wellyshen/use-web-animations";

export function About() {
    const { ref } = useWebAnimations({
      keyframes: {
        transform: "translateX(-100%)",  
      },
      timing: {
        duration: 1000, 
        iterations: 1, 
        direction: "alternate-reverse",
        easing: "ease-in-out", 
      },  
    });
    return (
        <>
        <section ref={ref} id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className='row'>
                            <div className="col-md-6 order-1 pt-0 pt-lg-5  header-img">
                                <img src={copy} className="img-fluid animated" alt='developer' />
                            </div>

                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                                <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" >
                                    <h1>About Me</h1>
                                </div>
                                <p>Hi, My name is Muhammad Ashraf. I am web / software developer based in Karachi, Pakistan. I have good experience in web site design & development. My experties are:- </p>
                                <div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" >
                                    <ul>
                                        <li><span>HTML</span></li>
                                        <li><span>CSS</span></li>
                                        <li><span>Javascript</span></li>
                                        <li><span>Bootstrap</span></li>
                                        <li><span>React</span></li>
                                        <li><span>Redux</span></li>                                        
                                    </ul>
                                </div>
                                <div className="mt-2">
                                    <a href="https://www.facebook.com/ashraf.hussain.1428/" rel="noopener noreferrer" target="_blank"><span className="fa fa-facebook footersocial"></span></a>
                                    <a href="https://www.linkedin.com/in/ashraf-hussain-acma-certified-sap-fi-consultant-80644233/" rel="noopener noreferrer" target="_blank"><span className="fa fa-linkedin  footersocial"></span></a>
                                    <a href="https://github.com/AshrafHussain786" rel="noopener noreferrer" target="_blank"><span className="fa fa-github footersocial"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
        <ul className="social">
            <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s" ><i className="fa fa-envelope"></i><a href="mailto: ashrafhussain786@yahoo.com">ashrafhussain786@yahoo.com</a></li>
            <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s" ><i className="fa fa-phone"></i><a href="callto:+92 312 564 6074">+92 345 1234567</a></li>
            <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s" ><i className="fa fa-github footer-social" aria-hidden="true"></i><a href="https://github.com/AshrafHussain786">Git Hub: ashrafhussain786</a></li>
        </ul>
        </>
    );
}