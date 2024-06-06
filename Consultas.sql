--Creación TABLAS--

CREATE TABLE usuarios (
  idUsuario INT AUTO_INCREMENT PRIMARY KEY,
  nombreUsuario VARCHAR(50) NOT NULL,
  claveUsuario VARCHAR(100) NOT NULL,
  correoUsuario VARCHAR(50) NOT NULL
);

--Creación REGISTROS--

INSERT INTO usuarios (nombreUsuario, claveUsuario, correoUsuario)
VALUES
  ('Juan Pérez', '123456', 'juan.perez@example.com'),
  ('Ana López', 'qwerty123', 'ana.lopez@example.com'),
  ('Pedro García', 'abc123', 'pedro.garcia@example.com');

--Devuelva el idUsuario, nombreUsuario correspondiente a una claveUsuario y correoUsuario dados--

SELECT idUsuario, nombreUsuario
FROM usuarios
WHERE claveUsuario = '123456' AND correoUsuario = 'juan.perez@example.com';








----COMANDOS PRUEBAS NODE.JS POSTMAN----


