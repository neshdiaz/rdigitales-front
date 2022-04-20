
function InformationBar(props){

  return( 
  <div className='container text-align-middle m-1'>
    <div className='row'>
      <div className='col'>
        <span className="badge rounded-pill bg-light text-dark"><i className='fa-solid fa-wallet'></i> Saldo: $ 1.000 </span>
        <span className="badge rounded-pill bg-light text-dark"><i className='fa-solid fa-coins'></i> Puntos: 1.000 </span>
      </div>  
    </div>
  </div>  
)}

export default InformationBar;