//variables y entradas//
var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = [ 'piedra', 'papel', 'tijera'];

var opcionUsuario;
var opcionComputadora = 2;
//logica //
opcionUsuario = prompt('QUE ELIGUES? \npiedra: 0\npapel: 1\ntijera:2', );

//salida de datos //
alert('computadora eligio ' + opciones[opcionComputadora]);

if(opcionUsuario == 0) //condicion//
{
    alert('elegiste piedra');
}
else if(opcionUsuario == 1) //condicion//
{
    alert('elegiste papel');
}
else if(opcionUsuario == 2) //condicion//
{
    alert('elegiste tijera');
}
else 
{
    alert('si no aparece nada, solo usa los numeros 0,1,2');
}
