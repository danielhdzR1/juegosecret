let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [] 
let numeroMaximo = 10;

console.log(numeroSecreto); 

function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector (elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificraIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
   if (numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento('p','El numero secreto es menor');
      } else {
         asignarTextoElemento('p','El numero secreto es mayor');
      }
      intentos++;
      limpiarCaja();
   }
   return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log (numeroGenerado);
   console.log (listasNumerosSorteados);
   // Si ya sorteamos los numeros
   if (listasNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
   } else {
         //Si el numero generado esta incluido en la lista 
         if (listasNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
      } else {
         listasNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
   }
}

function condicionesIniciales() {
   asignarTextoElemento('h1','juego del numero secreto!');
   asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);   
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}

function reiniciarJuego() {
   //limpiar la caja
   limpiarCaja();
   //indicar mensaje de intervalo de numeros 
   //Generar el numero aleatorio
   //inicializar el numero de intentos
   condicionesIniciales();
   //deshabilitar el boton de nuevo juego 
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();


