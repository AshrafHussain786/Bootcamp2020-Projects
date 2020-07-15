import React from 'react';
import Shoes from './../Shoes.json';
import { Link } from 'react-router-dom';

export const Product = () => {    
    return (
        <div>
            <h1>Welcome to Products Page</h1>
            <div className="productContainer">
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} 
                            className="link animate__animated animate__rotateIn"
                            to={`/product/${keyName}`}>
                                <h4>{shoe.name}</h4>
                                <img src={shoe.img} height={160} alt="shoe" />
                    </Link>)
                })}
            </div>
        </div>
    )
}
