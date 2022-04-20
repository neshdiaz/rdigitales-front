import Product from './product.js'

function Products(props){
  
  return( 
  <div className='container'>
    <div className='row justify-content-center'>

      <Product image ="/img/disney.png"
        addItemToCart = {props.addItemToCart }
        deleteItemToCart = {props.deleteItemToCart }
        title = "Disney plus" 
        description = "Paquete de disney plus" 
        price = "5000" 
        availability = "Disponible" />

      <Product image="/img/netflix.jpg"
        addItemToCart = {props.addItemToCart }
        deleteItemToCart = {props.deleteItemToCart }
        title = "Netflix" 
        description = "Paquete de Netflix" 
        price = "7000" 
        availability = "Disponible" />

      <Product image="/img/amazonprimev.png" 
        addItemToCart = {props.addItemToCart }
        deleteItemToCart = {props.deleteItemToCart }
        title = "Amazon Prime Video" 
        description = "Paquete de Amazon Prime Video"
        price = "2000" 
        availability = "Disponible" />
        
      <Product image="/img/amazonprimev.png" 
        addItemToCart = {props.addItemToCart }
        deleteItemToCart = {props.deleteItemToCart }
        title = "Amazon Prime Video x 3 Meses" 
        description = "Paquete de Amazon Prime Video x 3 Meses" 
        price = "6000" 
        availability = "Disponible" />

      <Product image="/img/amazonprimev.png" 
        addItemToCart = {props.addItemToCart }
        deleteItemToCart = {props.deleteItemToCart }
        title = "Amazon Prime Video x 6 Meses" 
        description00 = "Paquete de Amazon Prime Video x 6 Meses"
        price = "12000" 
        availability = "Disponible" />

      <Product image="/img/amazonprimev.png" 
        addItemToCart = {props.addItemToCart }
        deleteItemToCart = {props.deleteItemToCart }
        title = "Amazon Prime Video x 12 Meses " 
        description = "Paquete de Amazon Prime Video Suscripción Anual"
        price = "24000" 
        availability = "Disponible" />

    </div>    
  </div>  
)}

export default Products