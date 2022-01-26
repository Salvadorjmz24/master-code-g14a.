//datos de entrada que necesito //
var nombre, apellido, añoNacimimiento, añoActual;
/*var nombre;
var apellido;
var añoNacimiento;
var añoActual;*/
nombre = prompt('Ingresa tu nombre');
apellido = prompt('Ingresa tu apellido');
añoNacimiento = Number(prompt('Ingresa  tu año de nacimiento'));
añoActual = Number(prompt( 'Igresa tu año actual'));
// que tengo que hacer con esos datos //
edad = añoActual - añoNacimiento;
mitad = añoNacimiento / añoActual;

// como y que tengo que mostrar al usuario//
document.write('Hola ' + nombre + ' ' + apellido + ', Tu Edad Es: ' + edad + ' la division arroja: ' + mitad);
