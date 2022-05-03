
function UsersPage(props){
  return( <div className="container">
    <h1 className="card"> Administración de Usuarios </h1>
    <button className="btn btn-primary">Crear Nuevo Usuario</button>
    <table className="table table-sm table-responsive">
      <thead>                                                         
        <tr>
          <th>Usuario</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr> 
      </thead>
      <tbody>
        {props.data.map((item)=> 
          (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.rol}</td>
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

export default UsersPage;
