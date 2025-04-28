import React from "react";
import './Item.css';
import Rating from '@mui/material/Rating';
import productPlaceholder from '../assets/placeholder-product-image-300x300.png';

function Item(props) {
    return(
        <div className="item">
            <img src={productPlaceholder} alt="" />
            <div className="item-info">
                <p>{props.name}</p>
                <Rating name="read-only" value='4.3' size='small' readOnly />
                <div className="price">&#8377; {props.price}</div>
            </div>
        </div>
    );
}

export default Item;