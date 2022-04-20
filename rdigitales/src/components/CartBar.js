
function CartBar(props){
  
  return ( <div className="container-fluid m-1">
    <div className='row'>
      <div className='col-12 d-grid gap-2 ms-auto me-auto'>
        <button type="button form-control" className="btn btn-primary"> 
          <i className="fa-solid fa-cart-shopping"></i>
          <span> {props.totalItems} productos </span> Finalizar Compra
        </button>
      </div>
  </div>
</div>
)}

export default CartBar;
