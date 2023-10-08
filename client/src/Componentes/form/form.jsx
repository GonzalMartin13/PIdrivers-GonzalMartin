import { useState } from 'react';
import axios from "axios"

function FormCrearDriver() {
  // Estados para almacenar los valores de los campos del formulario
  const [usuario, setUsuario] = useState({
    name: '',
    surname: '',
    description: '',
    img: '',
    nacionalidad: '',
    nacimiento: '',
    teams: "",
  });

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
  };

  const verificaciones = (input) => {
    if (!/^[a-zA-Z]+$/.test(input.name)) {
      alert('El nombre solo puede contener letras');
      return;
    }
    
    if (!/^[a-zA-Z]+$/.test(input.surname)) {
      alert('El apellido solo puede contener letras');
      return;
    }

    if (input.img.trim() === '') {
      alert('La imagen no puede estar vacía');
      return;
    }
  }

const agregarDriver =  async (usuario) => {
  
  try {
    
    const response =  await axios.post('http://localhost:3001/drivers/', usuario);

    // Si la solicitud fue exitosa (código de respuesta 200-299)
    if (response.status === 200 ) {
      const data = response.data;
      // Aquí puedes manejar la respuesta del servidor, por ejemplo, actualizar el estado o mostrar un mensaje de éxito.
      console.log('Conductor agregado:', data);
    } else {
      throw new Error('Error al agregar el conductor catch');
    }
  } catch (error) {
 /*  */
  }
};


  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificaciones
    verificaciones(usuario) 
    console.log("estoy entre ceirficacuibes y agregar")   

    agregarDriver(usuario);
    // Aquí puedes realizar la lógica para agregar el objeto 'usuario' a tu base de datos
    // Por ejemplo, podrías hacer una solicitud a una API o usar una base de datos local.
    // En este ejemplo, simplemente mostraremos los datos en la consola.
    console.log(usuario);

    // Limpia el formulario después de enviar
    setUsuario({
      name: '',
      surname: '',
      description: '',
      img: '',
      nacionalidad: '',
      nacimiento: '',
      teams: '',
    });
  };



  return (
    <div>
      <h2>Agregar piloto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            value={usuario.name}
            onChange={handleInputChange}
            // required
          />
        </div>
        <div>
          <label htmlFor="surname">surname:</label> <br></br>
          <input
            type="text"
            id="surname"
            name="surname"
            value={usuario.surname}
            onChange={handleInputChange}
            // required
          />
        </div>
        <div>
          <label htmlFor="img">Imagen:</label><br />
          <input
            type="text"
            id="img"
            name="img"
            value={usuario.img}
            onChange={handleInputChange}
            // required
          />
        </div>
        <div>
          <label htmlFor="nacionalidad">nacionalidad:</label><br />
          <input
            type="text"
            id="nacionalidad"
            name="nacionalidad"
            value={usuario.nacionalidad}
            onChange={handleInputChange}
            // required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label><br />
          <textarea
            id="description"
            name="description"
            value={usuario.description}
            onChange={handleInputChange}
            // required
          />
        </div>
        <div>
          <label htmlFor="nacimiento">Fecha de Nacimiento:</label><br />
          <input
            type="date"
            id="nacimiento"
            name="nacimiento"
            value={usuario.nacimiento}
            onChange={handleInputChange}
            // required
          />
        </div>
        <div>
          <label htmlFor="teams">Escuderia:</label><br />
          <input
            type="text"
            id="teams"
            name="teams"
            value={usuario.teams}
            onChange={handleInputChange}
            // required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormCrearDriver;
