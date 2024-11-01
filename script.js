const formulario = document.getElementById('formulario-contactos');
const qrContainer = document.getElementById('qr-container');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;

  const datosContacto = {
    nombre,
    correo,
    telefono
  };

  const datosJSON = JSON.stringify(datosContacto);

  // Utilizando la biblioteca qrcode.js para generar el código QR
  qrContainer.innerHTML = '';
  const qrCode = new QRCode(qrContainer, {
    text: datosJSON,
    width: 200,
    height: 200
  });
});
