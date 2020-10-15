import React from 'react';
import { NavLink } from 'react-router-dom'
import BrandLogo from "../images/contentWriting.svg"

export function Header() {
    return (
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg  navbar-dark  bg-dark fixed-top ">
                        <NavLink className="navbar-brand" to='/'><img src={BrandLogo} alt='brandlogo' /></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink activeClassName="" className="nav-link" to='/'   >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active_Item" className="nav-link" to='/About' >About</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeClassName="active_Item" className="nav-link" to='/Projects' >Projects</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active_Item" className="nav-link" to='/Contact' >Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}