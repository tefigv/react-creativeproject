import tooth from '../img/toothbits.png';
import mouth from '../img/mouthwash.png';
import gel from '../img/whitening-gel.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style-shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);
  
   const fetchProducts = async() => {
    try {      
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    } catch(error) {
      setError("error retrieving prodcuts: " + error);
    }
  }
  
    const fetchCart = async() => {
    try {      
      const response = await axios.get("/api/cart");
      setCart(response.data);
    } catch(error) {
      setError("error retrieving cart: " + error);
    }
  }
  
  const addCart = async(product) => {
    try {
      await axios.post("/api/cart/" + product.id);
    } catch(error) {
      setError("error adding to cart" + error);
    }
  }
  
    useEffect(() => {
    fetchProducts();
  },[]);
  
    const addToCart = async(product) => {
    await addCart(product);
    fetchCart();
  }
  
  return (        
  <>
  <div className='One'>     
    <div className='banner'>
      <h1>All Products</h1>
      <h4>Build your own plastic-free routine</h4>
    </div>
  </div>     
  <div className='content'>
    <div className='product-list'>
      <div className='type'>
        <h1 className ='content-h1'>Oral Care</h1>
          <div className='line'></div>
      </div>
      <div className='products-wraper'>
        <div className='products'>
          <div className='product'>
            <img src={tooth} alt = "thoothpaste"/>
            <p>Toothpaste Bits</p>
            <p><em>Fresh Mint</em></p><br/>
            <div className="star">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>    
          </div>    
          <div className='product'>
            <img src={mouth} alt = "mouthwash"/>
            <p>Mouthwash Bits</p>
            <p><em>Fresh Mint</em></p><br/>
            <div className="star">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>    
          </div>
          <div className='product'>
            <img src={gel} alt = "whiteing-gel"/>
            <p>Whitening Gel</p>
            <p><em>Teeth Whitening Kit</em></p><br/>
            <div className="star">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>    
          </div>
        </div>
      </div>
                
    </div>
    
    <div>
      <h1>Products</h1>
      {products.map( product => (
        <div key={product.id} className="product">
          <div className="display">
            <img src={product.image} alt = {product.name}/>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
          <button onClick={e => addToCart(product)}>Add to Cart</button>
        </div>
      ))} 
    </div>
    
  </div> 
  </>
  );
};

export default Shop;