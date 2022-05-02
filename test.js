/*
Se debe realizar un programa que, dados dos números, imprima por pantalla si el primer número es múltiplo del segundo.
Por ejemplo, con las siguientes variables:

var primer = 20;
var segundo = 2;

Se debería imprimir:
20 es múltiplo de 2.

Con las siguientes variables:

var primer = 23;
var segundo = 2;

Se debería imprimir:
23 no es múltiplo de 2.
*/

var test = function(a , b){

    if (a%b == 0){
        console.log(a , "es múltiplo de", b);
    } else {
        console.log(a , "NO es múltiplo de", b);
    }
}

test(23,2);

/*
Escribe una función (utilizando SWITCH CASE) que diga cuantos días tiene un mes concreto.
Por ejemplo, con la siguiente entrada:

var month = 'Enero'

el programa debe escribir:

El mes de Enero tiene 31 días.
*/

var month = 'January';

switch (month){
    case 'January','March','May','July','August','October','December':
        console.log('El mes de' , month , 'tiene 31 días');
        break;
    case 'February':
        console.log('El mes de' , month , 'tiene 28 días');
        break;
    case 'April','June','September','November':
        console.log('El mes de' , month , 'tiene 30 días');
        break;
    default:
        console.log( month , 'not found, please check the capital letters.');
        break;        
}


function main(){

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    var option = '0';
    
    do {
        switch (option){
            case '0':
                break;
            case '1':
                break;
            default:
                break;
        }
     } while (option!=='e');
     
    readline.question('Select an option\n> ', value => {
        //console.log(`Hey there ${name}!`);
        return value
        readline.close();
      });
}
