import React, { useState, useEffect } from 'react';
import udemy from './Data.json'
import './Data.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Data = () => {
    const first4 = udemy.slice(0,5);
    const [datas, setData] = useState(first4);
    useEffect( () => {
        setData(first4)
    }, [first4])
    const second4 = udemy.slice(5,10);
    const [mata, setMata] = useState(second4);
    useEffect( () => {
        setMata(second4)
    }, [second4])

    const [cart, setCart]=useState([])  

    const handleAddProduct = (data) => {
        console.log('product addeded', data);
        const newCart = [...cart, data];
        setCart(newCart)
    }
    return (
    <div className="shop-container">
        <div className="product-container">
            <div className="sub-product-container">
                {
                datas.map(dta =><Product 
                    handleAddProduct = {handleAddProduct}
                    data={dta}
                    ></Product> )
                }
                {/* <h1>{datas.length}</h1> */}
            </div>
            <div className="sub-product-container">
                {
                mata.map(dta =><Product 
                    handleAddProduct = {handleAddProduct}
                    data={dta}
                    ></Product> )
                }
            </div>
        </div>
        <div className="cart-container">
           <Cart cart={cart}></Cart> 
        </div>
    </div>
        
    );
};

export default Data;