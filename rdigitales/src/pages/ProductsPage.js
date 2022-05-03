import { Link } from 'react-router-dom'

function ProductsPage(props){
 
  return( <div className='container' >
    <h1 className="card"> Administración de Productos </h1>

    <Link className="btn btn-primary" to="/products/add/">Agregar producto</Link> 
    <table className="table table-sm table-responsive">
      <thead>                                                         
        <tr>
          <th></th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr> 
      </thead>
      <tbody>
        {props.data.map((item)=> 
          (
            <tr key={item.id}>
              <td><img width="50px" alt="Imagen del producto" src={item.image} /></td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <span><i className="fa-solid fa-eye"></i> </span>
                <span><i className="fa-solid fa-pen"></i> </span>
                <i className="fa-solid fa-trash-can"></i>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
)};

export default ProductsPage;
