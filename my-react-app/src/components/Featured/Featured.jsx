import React from "react";
import './Featured.css';
import Item from "../Item/Item";
import { useNavigate } from "react-router-dom";
import data_product from "../assets/data";

function Featured() {

    const navigate = useNavigate();

    return(
        <div className="featured">
            <h2>Featured Products</h2>
            <p>Discover our hand-picked selection of this season's must-have items</p>
            <div className="items">
                {data_product.map((item, i) => {n
                    return <Item key={i}
                                 id={item.id}
                                 name={item.name}
                                 price={item.price}/>
                })}
            </div>
            <button onClick={() => navigate('/shop')}>View All Products</button>
        </div>
    );
}

export default Featured;