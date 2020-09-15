import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTags } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {picture, title, details, balance} = props.data;
    //console.log(props);
    return (
        <div className="product">
            <div className="sub-product">
                <img width="230" height="200" src={picture} alt=""/>
                
            </div>
            <div className="sub-product2">
                <h3>{title}</h3>
                <h6 className="details">{details}</h6>
                <h2>${balance} <FontAwesomeIcon icon={faTags} /> </h2>
                
                <br/>
                <button className="button" 
                onClick = {() => props.handleAddProduct(props.data)}
                >Bestseller</button>
            </div>
            
        </div>
    );
};

export default Product;