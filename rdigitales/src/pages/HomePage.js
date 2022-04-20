import Products from '../components/products';
import InformationBar from '../components/InformationBar';
import CartBar from '../components/CartBar';
import { useState } from 'react';

function HomePage(props){
  const [totalItemsInCart, setTotalItemsInCart] = useState(0)
   
  function addItemToCart(){
    setTotalItemsInCart(totalItemsInCart + 1) 
  }

  function deleteItemToCart(){
    setTotalItemsInCart(totalItemsInCart - 1) 
  }

  return(<div>
    <div className='container card'>
      <InformationBar />
    </div>  
    <div className='container'>
      <CartBar totalItems = {totalItemsInCart} /> 
    </div>
    <Products 
      totalItemsInCart = {totalItemsInCart}
      addItemToCart={addItemToCart}
      deleteItemToCart={deleteItemToCart}
    />
  </div>
)};

export default HomePage;