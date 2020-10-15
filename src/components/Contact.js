import React from 'react';
import Lottie from "react-lottie";
import ContactAnim from "./Contact.json";

export function Contact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ContactAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    return (
        <>
            <div id="contact" style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "100px",                
            }}>
                <div>
                    <Lottie
                        options={defaultOptions}
                        height={"50%"}
                        width={"300%"}                        
                    />
                </div>
                <div>
                    <div className="my-6">
                        <p className="text-center"> If you have any query, please send me an email....</p>
                    </div>
                    <div className="container-fluid mb-5">
                        {/* <div className="row"> */}
                            <div className="col-md-12 col-10 mx-auto">
                               <form action="mailto: ashrafhussain786@yahoo.com" className="needs-validation" novalidate method="post" encType="text/plain">
                                    <div className="form-group">
                                        <label htmlFor="uname">Name</label>
                                        <input type="text" name='uname' onChange={(e) => (e.target.value)} required className="form-control" placeholder="Enter you full name" />
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="number" name='phone' className="form-control" onChange={(e) => (Number(e.target.value))} placeholder="Enter you phone number" />
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" name='email' required className="form-control" onChange={(e) => (e.target.value)} placeholder="Enter you email address" />
                                        <div class="valid-feedback">Valid.</div>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <div>    
                                        <label htmlFor="msg">Message</label>
                                        <textarea required className="form-control" rows={5} name='msg' onChange={(e) => (e.target.value)}  ></textarea>
                                        <br /> <br />
                                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}