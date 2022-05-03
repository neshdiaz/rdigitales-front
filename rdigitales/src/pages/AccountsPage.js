
function AccountsPage(props){

  return( <div className="container">
    <h1 className="card"> Administración de Cuentas </h1>
    <button className="btn btn-primary">Crear Nueva Cuenta</button>
    <table className="table table-sm table-responsive">
      <thead>                                                         
        <tr>
          <th>Email</th>
          <th>Contraseña</th>
          <th>Activo desde</th>
          <th>Caduca</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr> 
      </thead>
      <tbody>
        {props.data.map((item)=> 
          (
            <tr key={item.id}>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.start_date}</td>
              <td>{item.finish_date}</td>
              <td>{item.state}</td>
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

export default AccountsPage;
