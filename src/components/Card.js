import React from 'react';
import { NavLink } from 'react-router-dom';
import GitHub from '../images/GitHub.png';

export const Card = (props) => {
    return (
        <>
            <div className="col-md-6 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        {/* <NavLink to="#" className="btn btn-primary">
                            Surge Link
                        </NavLink> */}
                        <img className="surge" src={GitHub} alt={GitHub} width="100" height="60" usemap="#workmap"/>
                            <map name="workmap">
                                <area shape="default" href={props.repo} />
                            </map>
                        <a href={props.surge}>Surge Link</a>
                    </div>
                </div>
            </div>
        </>
    )
}
