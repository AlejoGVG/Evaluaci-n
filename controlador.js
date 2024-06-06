$(document).ready(function () {
  $('#login-form').submit(function (event) {
    event.preventDefault();

    const claveUsuario = $('#clave-usuario').val();
    const correoUsuario = $('#correo-usuario').val();

    const data = {
      claveUsuario: claveUsuario,
      correoUsuario: correoUsuario
    };

    $.ajax({
      url: 'http://localhost:3000/login',
      method: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (response) {
        if (response.success) {
          const nombreUsuario = response.data[0].nombreUsuario;
          $('#message').text('¡Bienvenido, ' + nombreUsuario + '!');
        } else {
          $('#message').text('Error de autenticación.');
        }
      },
      error: function (error) {
        console.error(error);
        $('#message').text('Error al comunicarse con el servidor.');
      }
    });
  });
});