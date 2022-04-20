import { useState } from 'react'
//import { Link } from 'react-router-dom'

function Product(props){

  const [quantity, setQuantity] = useState(0)
  
  const addQuantity = () => {
    setQuantity(quantity + 1)
    props.addItemToCart()
  }

  const decreaseQuantity = () => {
    if (quantity > 0){
      setQuantity(quantity - 1)
      props.deleteItemToCart()
    }
  }

  const total = quantity * parseInt(props.price)


  return (
    <div className='card m-2 p-0' style={{width: '14rem'}}>  
      <img src ={ props.image } className='card-img-top' alt='logo'/>
      <div className='card-body text-center'>
        <h5 className='card-title'> { props.title } </h5>
        <p className='card-text'> {props.description } </p>
        <h6 className=' card-text'> $ {props.price} </h6>
        <p className='card-text text-decoration-underline'> {props.availability } </p>
      </div>
      <div className = 'card-footer text-center'>
        
        <div className='row' >
          <div className='col'>
            <button onClick = { decreaseQuantity } className='btn btn-primary' type="button ">-</button> 
          </div>  
          <div className='col'>
            {quantity}
          </div>  
          <div className='col'>
            <button onClick = { addQuantity} className='btn btn-primary' type="button ">+</button>    
          </div>  
        </div>
        
        <h6 className='card-text'> Total: {total} </h6>
      </div>
    </div>
  )};

export default Product