import React from 'react';
import Shoes from './../Shoes.json';    
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
    const { id } = useParams();
    const shoe = Shoes[id];
    // console.log(id);
    if(!shoe)
        return <h2>Product Not Found...</h2>
    return (
        <div>
            <h1>Product Details Page</h1>
            <div className="productDetail animate__animated animate__zoomIn"> 
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={500} alt="Shoe-Name"></img>
            </div>)
        </div>
    )
}
