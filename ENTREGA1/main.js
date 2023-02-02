{let nombre = prompt("Ingresa tu nombre");
let respuestaNombre = `Bien ${nombre}, comencemos con las cuentas!`;
alert(respuestaNombre)
}


function calculadora(numero1, numero2, operacion){
    
    switch(operacion) {
    case "+":
    return numero1 + numero2;
    break;

    case "-":
        return numero1 - numero2;
        break;

    case "*":
        return numero1 * numero2;
        break;
        
    case "/":
        return numero1 / numero2;
        break;
       
        default:
            return "operacion no definida";
            break;
        }
       
    }
    
    let numeroUno = parseInt(prompt("Ingrese el primer número"));
    let numeroDos = parseInt(prompt("Ingrese el segundo número"));
    let op = prompt("ingrese la operacion a realizar: +, -, *, /");
    
    let resultado = calculadora(numeroUno, numeroDos, op);
    let mensaje = `El resultado de la operacion es: ${resultado}`;
    alert(mensaje);