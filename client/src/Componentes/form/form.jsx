import { useState } from 'react';

function FormCrearDriver() {
  // Estados para almacenar los valores de los campos del formulario
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    imagen: '',
    nacionalidad: '',
    descripcion: '',
    fechaNacimiento: '',
    equipo: '',
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificaciones
    if (!/^[a-zA-Z]+$/.test(usuario.nombre)) {
      alert('El nombre solo puede contener letras');
      return;
    }
    
    if (!/^[a-zA-Z]+$/.test(usuario.apellido)) {
      alert('El apellido solo puede contener letras');
      return;
    }

    if (usuario.imagen.trim() === '') {
      alert('La imagen no puede estar vacía');
      return;
    }

    // Aquí puedes realizar la lógica para agregar el objeto 'usuario' a tu base de datos
    // Por ejemplo, podrías hacer una solicitud a una API o usar una base de datos local.
    // En este ejemplo, simplemente mostraremos los datos en la consola.
    console.log(usuario);

    // Limpia el formulario después de enviar
    setUsuario({
      nombre: '',
      apellido: '',
      imagen: '',
      nacionalidad: '',
      descripcion: '',
      fechaNacimiento: '',
      equipo: '',
    });
  };

  return (
    <div>
      <h2>Formulario de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label> <br />
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={usuario.nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label> <br></br>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={usuario.apellido}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="imagen">Imagen:</label><br />
          <input
            type="text"
            id="imagen"
            name="imagen"
            value={usuario.imagen}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nacionalidad">Nacionalidad:</label><br />
          <input
            type="text"
            id="nacionalidad"
            name="nacionalidad"
            value={usuario.nacionalidad}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label><br />
          <textarea
            id="descripcion"
            name="descripcion"
            value={usuario.descripcion}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label><br />
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={usuario.fechaNacimiento}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="equipo">Equipo:</label><br />
          <input
            type="text"
            id="equipo"
            name="equipo"
            value={usuario.equipo}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormCrearDriver;
