//variables//
var nombreCompleto, añoNacimiento, añoActual, edad, msg;

nombreCompleto = prompt('Ingresa tu nombre');
añoNacimiento = Number(prompt('Ingresa Tu año de Nacimiento'));
añoActual = Number(prompt('Ingresa El año Actual'));

//PROCESO LOGICO//
edad = añoActual - añoNacimiento;

if(edad >= 18)
{
    msg = `Hola ${nombreCompleto} ya eres mayor de edad, te invito una chela`;
}
else
{
    msg = `Hola ${nombreCompleto} no puedes entrar porque eres menor de edad`;
}

//salida de datos //
alert(msg);