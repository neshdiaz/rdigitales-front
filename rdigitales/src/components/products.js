import Product from './product.js'

function Products(props){
  
  return( 
  <div className='container'>
    <div className='row justify-content-center'>
      {props.data.map((item)=>(
        <div className='col'  key={item.id} >
          <Product image ={item.image}
          addItemToCart = {props.addItemToCart }
          deleteItemToCart = {props.deleteItemToCart }
          title = {item.title} 
          description = {item.description} 
          price = {item.price} 
          availability = {item.stock} />
        </div>)
      )}  
    </div>    
  </div>  
)}

export default Products