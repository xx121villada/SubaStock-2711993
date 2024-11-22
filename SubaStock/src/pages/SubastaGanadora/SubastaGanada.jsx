import React from 'react';

// Función para enviar el correo usando la API de Resend
const enviarCorreo = async (email, idAnimal, telefonoDueño) => {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_RESEND_API_KEY}`, // Asegúrate de configurar la clave en las variables de entorno
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: email,
        subject: '¡Felicidades, ganaste la subasta!',
        html: `<p>Has ganado la subasta para el animal con ID: ${idAnimal}.</p>
               <p>Por favor, contacta al dueño del animal al teléfono: ${telefonoDueño}.</p>`
      })
    });
    if (!response.ok) throw new Error('Error al enviar el correo');
    const data = await response.json();
    console.log('Correo enviado exitosamente:', data);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

// Función principal para gestionar los datos de la subasta
const mensajeSubastaGanada = async (idSubasta) => {
  try {
    // Obtener datos de la subasta
    const responseSubasta = await fetch(`https://apisubastock.cleverapps.io/subasta/Obtener/${idSubasta}`);
    const dataSubasta = await responseSubasta.json();
    const idAnimal = dataSubasta.idAnimal;

    // Obtener la puja más alta y el ID del usuario ganador
    // Obtener la puja más alta y el ID del usuario ganador
    const responsePuja = await fetch(`https://apisubastock.cleverapps.io/subasta/PujasPorAnimal?idAnimal=${idAnimal}`);
    if (!responsePuja.ok) throw new Error(`Error al obtener las pujas: ${responsePuja.statusText}`);
    const dataPujas = await responsePuja.json();
    console.log('Datos de las pujas:', dataPujas);

    if (!Array.isArray(dataPujas) || dataPujas.length === 0) {
      throw new Error('No se encontraron pujas para este animal.');
    }

    const pujaMasAlta = dataPujas.reduce((max, puja) => (puja.valor > max.valor ? puja : max), dataPujas[0]);
    const idUsuarioGanador = pujaMasAlta.idUsuario;


    // Obtener el correo del usuario ganador
    const responseUsuarioGanador = await fetch(`https://apisubastock.cleverapps.io/usuario/Obtener?idUsuario=${idUsuarioGanador}`);
    const dataUsuarioGanador = await responseUsuarioGanador.json();
    const emailGanador = dataUsuarioGanador.email;

    // Obtener el teléfono del dueño del animal subastado
    const responseUsuarioAnimal = await fetch(`https://apisubastock.cleverapps.io/animal/Obtener?idAnimal=${idAnimal}`);
    const dataUsuarioAnimal = await responseUsuarioAnimal.json();
    const telefonoDueño = dataUsuarioAnimal.telefono; // Asumiendo que la API devuelve el teléfono con la clave 'telefono'

    // Enviar el correo al usuario ganador
    await enviarCorreo(emailGanador, idAnimal, telefonoDueño);

  } catch (error) {
    console.error('Error al procesar la subasta o enviar el correo:', error);
  }
};

// Ejemplo de uso en un componente de React
const SubastaGanadaComponent = ({ idSubasta }) => {
  const manejarSubastaGanada = () => {
    mensajeSubastaGanada(idSubasta);
  };

  return (
    <div>
      <button onClick={manejarSubastaGanada}>
        Notificar ganador de la subasta
      </button>
    </div>
  );
};

export default SubastaGanadaComponent;