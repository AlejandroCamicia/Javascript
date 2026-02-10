let edad = document.getElementById("edad");
let contenedor = document.getElementById("contenedor");
edad.addEventListener("input", verificarEdad);

function verificarEdad() {
  const edadInput = edad.value.trim();

  if (edadInput === "") {
    contenedor.innerHTML = "<p>Por favor ingresá tu edad</p>";
    return;
  }
  const message = "<p>Tu edad es: " + edadInput + "</p>";
  contenedor.innerHTML = message;
}

const max_pedidos = 3;
let tragos = ["negroni"];

const inputNombre = document.getElementById("nombreCliente");
const btnNombre = document.getElementById("btnNombre");
const mensaje = document.getElementById("mensaje");

btnNombre.addEventListener("click", () => {
  const nombreCliente = inputNombre.value.trim();


  if (nombreCliente === "") {
    mensaje.innerHTML = "<p>Por favor ingresá tu nombre</p>";
    return;
  }

  console.log("Cliente:", nombreCliente);

  mensaje.innerHTML = `
    <p>Hola <strong>${nombreCliente}</strong>, ¡estás a punto de elegir tus cócteles!</p>
    <p>Podés pedir hasta ${limite_pedidos} cócteles.</p>
  `;
});

const limite_pedidos = 3;
let cocteles = ["negroni", "mojito", "fernet", "gintonic"];

const listaCocteles = document.getElementById("listaCocteles");
const cantidadInput = document.getElementById("cantidad");
const btnCantidad = document.getElementById("btnCantidad");

const seleccion = document.getElementById("seleccion");
const coctelElegido = document.getElementById("coctelElegido");
const btnAgregar = document.getElementById("btnAgregar");

const resultado = document.getElementById("resultado");
const btnNuevoPedido = document.getElementById("btnNuevoPedido");

const btnSumar = document.getElementById("btnSumar");
const resultadoSuma = document.getElementById("resultadoSuma");

let pedidos = [];
let cantidad = 0;
let contador = 0;


listaCocteles.innerHTML = "<h3>Cócteles disponibles:</h3>";
cocteles.forEach((c, i) => {
  listaCocteles.innerHTML += `<p>${i + 1}. ${c}</p>`;
});


btnCantidad.addEventListener("click", () => {
  cantidad = parseInt(cantidadInput.value);

  if (isNaN(cantidad) || cantidad <= 0) {
    resultado.innerHTML = "<p>Ingreso inválido</p>";
    return;
  }

  if (cantidad > limite_pedidos) {
    cantidad = limite_pedidos;
    resultado.innerHTML = `<p>Solo podés pedir hasta ${limite_pedidos} cócteles</p>`;
  } else {
    resultado.innerHTML = `<p>Vas a pedir ${cantidad} cócteles</p>`;
  }

  pedidos = [];
  contador = 0;
  seleccion.style.display = "block";
});


btnAgregar.addEventListener("click", () => {
  if (contador < cantidad) {
    pedidos.push(coctelElegido.value);
    contador++;
    coctelElegido.value = "";

    resultado.innerHTML = `<p>Cócteles elegidos: ${pedidos.join(", ")}</p>`;
  }

  if (contador === cantidad) {
    seleccion.style.display = "none";
    resultado.innerHTML += "<p>Pedido completo</p>";
  }
});


function Sumar(a, b) {
  return a + b;
}

btnSumar.addEventListener("click", () => {
  let resultadoFinal = Sumar(7, 6);
  resultadoSuma.innerHTML = `Resultado de la suma: ${resultadoFinal}`;
});


btnNuevoPedido.addEventListener("click", () => {
  pedidos = [];
  contador = 0;
  cantidadInput.value = "";
  resultado.innerHTML = "";
  seleccion.style.display = "none";
});

const producto = {
  id: 1,
  nombre: "Negroni",
  precio: 2500,
  cantidad: 1
};

localStorage.setItem("producto", JSON.stringify(producto));

const productoGuardado = JSON.parse(localStorage.getItem("producto"));

console.log(productoGuardado.nombre);

const carrito = [
  { id: 1, nombre: "Negroni", precio: 2500, cantidad: 1 },
  { id: 2, nombre: "gintonic", precio: 2200, cantidad: 2 }
];

localStorage.setItem("carrito", JSON.stringify(carrito));

const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));

console.log(carritoGuardado);

let pedido = JSON.parse(localStorage.getItem("carrito")) || [];

const nuevoProducto = {
  id: 3,
  nombre: "gintonic",
  precio: 2300,
  cantidad: 1
};

carrito.push(nuevoProducto);

localStorage.setItem("carrito", JSON.stringify(carrito));

localStorage.removeItem("carrito");

localStorage.clear();

fetch("../json/tragos.json")
  .then(response => response.json())
  .then(tragos => {
    console.log("DATA:", tragos[0].imagen);
    const contenedor = document.getElementById("tragos");

    tragos.forEach(trago => {
      contenedor.innerHTML += `
        <img src="${trago.imagen}" alt="${trago.nombre}" width="300">
      `
    });

    // contenedor.innerHTML = `
    //   <img src="${tragos[0].imagen}" alt="${tragos[0].nombre}" width="300">
    // `;

  })
  .catch(error => console.error("Error al cargar tragos:", error));

fetch("../json/tragos.json")
  .then(response => response.json())
  .then(tragos => {
    const contenedor = document.getElementById("tragos");

    contenedor.innerHTML = "";

    tragos.forEach(trago => {
      contenedor.innerHTML += `
        <img 
          src="${trago.imagen}" 
          alt="${trago.nombre}" 
          class="trago-img"
        >
      `;
    });
  })
  .catch(error => console.error("Error:", error));



/*console.log("Bienvenido a la pagina de cócteles");
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
} while (continuar)*/