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

if(opcionUsuario == piedra) //condicion//
{
    alert('elegiste piedra');
    if(opcionComputadora == piedra)
    {
        alert('empate');
    }
    else if(opcionComputadora == papel)
    {
        alert('perdiste');
    }
    else if (opcionComputadora == tijera);
    {
        alert('ganaste');
    }
    
}
else if(opcionUsuario == papel) //condicion//
{
    alert('elegiste papel');
    if(opcionComputadora == piedra)
    {
        alert('ganaste');
    }
    else if(opcionComputadora == papel)
    {
        alert('empate');
    }
    else if (opcionComputadora == tijera);
    {
        alert('perdiste');
    }

}
else if(opcionUsuario == tijera) //condicion//
{
    alert('elegiste tijera');
    if(opcionComputadora == piedra)
    {
        alert('perdiste');
    }
    else if(opcionComputadora == papel)
    {
        alert('ganaste');
    }
    else if (opcionComputadora == tijera);
    {
        alert('empate');
    }
}
else 
{
    alert('si no aparece nada, solo usa los numeros 0,1,2');
}
