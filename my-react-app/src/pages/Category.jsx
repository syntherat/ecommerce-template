import React, { useContext } from "react";
import './css/Category.css';
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item/Item";

function Category(props) {
    const {all_product} = useContext(ShopContext);
    const navigate = useNavigate();
    return(
        <div className="category">
            <h1>Explore Our Unique Collections</h1>
            <div className="mens">
                <h2>Mens</h2>
                <div className="item-display">
                    {all_product.filter(item => item.category === "men").slice(0, 4).map((item, i) => (
                        <Item 
                            key={i}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
                <button onClick={() => navigate('/shop/mens')}>View All Products</button>
            </div>
            <div className="mens">
                <h2>Womens</h2>
                <div className="item-display">
                    {all_product.filter(item => item.category === "women").slice(0, 4).map((item, i) => (
                        <Item 
                            key={i}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
                <button onClick={() => navigate('/shop/womens')}>View All Products</button>
            </div>
            <div className="mens">
                <h2>Kids</h2>
                <div className="item-display">
                    {all_product.filter(item => item.category === "kid").slice(0, 4).map((item, i) => (
                        <Item 
                            key={i}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
                <button onClick={() => navigate('/shop/kids')}>View All Products</button>
            </div>
        </div>
    );   
}

export default Category;