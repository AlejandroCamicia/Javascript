console.log("Bienvenido a la pagina de cócteles");
alert("Bienvenido a la pagina de cócteles");


function verificarEdad() { 
    let edad = prompt("¿Cuántos años tenés?");
    alert("Tu edad es: " + edad);

    if (edad >= 18) {
        alert("Sos mayor de edad, podés continuar");
        return true;
    } else {
        alert("Sos menor de edad, no podés ingresar");
        return false;
    }
}


let acceso = verificarEdad();
if (!acceso) {
    console.log("Acceso denegado por ser menor de edad.");
  }
let nombreCliente = prompt("¿Cuál es tu nombre?");
const limite_pedidos = 3;

console.log("Cliente:", nombreCliente);
alert("Hola " + nombreCliente + ", ¡estas a punto de elegir tus cócteles!");

let cocteles = ["negroni"];


function Sumar(a, b) {
  return a + b;
}

console.log("cócteles disponibles:");
for(let i = 0; i < cocteles.length; i++) {
    console.log((i + 1) + ". " + cocteles[i]);
}

let cantidad = parseInt(prompt("¿Cuántos cócteles vas a pedir? (máximo " + limite_pedidos + ")"));

if (cantidad > limite_pedidos) {
    alert("solo podes pedir hasta" + limite_pedidos + "cócteles");
    cantidad = limite_pedidos;
    }  else if (cantidad <= 0 || isNaN(cantidad)) {
  alert("Ingreso inválido. No se realizaron pedidos.");
  cantidad = 0;
} else {
  alert("Perfecto, vas a pedir " + cantidad + " cócteles.");
}

let pedidos = [];

let contador = 0;

for (let contador = 0; contador < 5; contador++) {
    console.log(contador);
}

while(contador < cantidad) {
     let eleccion = prompt("Elegí el cóctel (" + cocteles.join(", ") + "):");
     pedidos.push(eleccion);
    contador++;
}

if (pedidos.length > 0) {
  alert("Tu pedido fue: " + pedidos.join(", "));
  console.log("Pedido completo:", pedidos);
} else {
  console.log("No se realizaron pedidos.");
}

let num1 = 7;
let num2 = 6;

let resultado = Sumar(num1, num2);
alert("El resultado de la suma es: " + resultado);
console.log("Resultado de la suma:", resultado);

let continuar;
do {
  continuar = confirm("¿vas a hacer otro pedido?");
  if (continuar) {
    alert("Volvamos a elegir cócteles");
  }
} while (continuar);