import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fname', headerName: 'Nombre', width: 130 },
  { field: 'lname', headerName: 'Apellido', width: 200 },
  { field: 'username', headerName: 'Nombre de usuario', width: 200 },
  { field: 'avatar', headerName: 'Avatar', width: 200},
];

function UserList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://melivecode.com/api/users')
      .then(response => response.json())
      .then(data => setUsuarios(data))
  }, []);
  function cambiarVentana(){
    window.location.href="/create";
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={usuarios}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection
      />,
      <Button variant="contained" onClick={cambiarVentana}>+</Button>
    </div>
    
  );
}

export default UserList;

