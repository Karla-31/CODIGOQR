const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');
const qrCodeContainer = document.getElementById('qr-code');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir envío predeterminado del formulario

  // Obtener los valores de los campos del formulario
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const phone = phoneInput.value.trim();

  // Verificar la longitud del contenido antes de generar el código QR
  if (name.length > 50 || email.length > 50 || message.length > 100 || phone.length > 15) {
    alert('Por favor, asegúrate de que los campos no excedan la longitud máxima.');
    return; // Salir de la función sin generar el código QR
  }

  // Generar el contenido del código QR
  const qrCodeData = `MECARD:N:${name};EMAIL:${email};TEL:${phone};MESSAGE:${message};`;

  try {
    // Crear el código QR utilizando la biblioteca
    const qrcode = new QRCode(qrCodeContainer, {
      text: qrCodeData,
      width: 200,
      height: 200,
    });
  } catch (error) {
    // Capturar y mostrar cualquier error
    console.error('Error al generar el código QR:', error);
  }
});
