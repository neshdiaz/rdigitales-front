
function AddProductForm(){
  
  return (
    
    <div className="container-fluid p-1 card">
      <div className='row'>
        <h3>Crear nuevo producto</h3>
        <form>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Nombre del producto"></input> 
          </div>
          <div className="form-group">
            <label>Selecciona la imagen para el producto </label>
            <input className="form-control" type="file" placeholder="Logo"></input> 
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Título para mostrar"></input> 
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Descripción detallada"></input> 
          </div>
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Precio 1"></input> 
          </div>  
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Precio 2"></input> 
          </div>  
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Precio 3"></input> 
          </div>  
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Estado"></input> 
          </div>  
          <button className="btn btn-primary" type="submit">Agregar Producto</button> 
        </form>   
      </div>
    </div>
  )}

export default AddProductForm;
