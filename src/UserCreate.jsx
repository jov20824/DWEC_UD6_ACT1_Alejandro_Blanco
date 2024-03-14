import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function UserCreate({ onAddUser }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangeNombreUsuario = (event) => {
    setNombreUsuario(event.target.value);
  };

  const handleSubmit = () => {
    const newUser = {
      nombre: nombre,
      apellido: apellido,
      nombreUsuario: nombreUsuario
    };

    onAddUser(newUser);

    setNombre('');
    setApellido('');
    setEmail('');
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <TextField
        label="Nombre"
        value={nombre}
        onChange={handleChangeNombre}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Apellido"
        value={apellido}
        onChange={handleChangeApellido}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Nombre de usuario"
        value={nombreUsuario}
        onChange={handleChangeNombreUsuario}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Agregar Usuario
      </Button>
    </div>
  );
}

export default UserCreate;
