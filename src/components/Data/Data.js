import React, { useState, useEffect } from 'react';
import udemy from './Data.json'
import './Data.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Data = () => {
    const first4 = udemy.slice(0, 4);
    const second4 = udemy.slice(4, 8);
    const third4 = udemy.slice(8, 12);
    const [cart, setCart] = useState([]);
    

    const handleAddProduct = (data) => {
        console.log('object', data);


        // const newCart = [...cart, data];
        setCart([...cart, data]);
    }

   

    return (
        <div className="shop-container">
            <div className="product-container">
                <div className="sub-product-container">
                    {
                        first4.map(dta => <Product key={dta.id}
                            handleAddProduct={handleAddProduct} 
                            data={dta}
                        ></Product>)
                    }
                    {/* <h1>{datas.length}</h1> */}
                </div>
                <div className="sub-product-container">
                    {
                        second4.map(dta => <Product key={dta.id}
                            handleAddProduct={handleAddProduct}
                            data={dta}
                        ></Product>)
                    }
                </div>
                <div className="sub-product-container">
                    {
                        third4.map(dta => <Product key={dta.id}
                            handleAddProduct={handleAddProduct}
                            data={dta}
                        ></Product>)
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