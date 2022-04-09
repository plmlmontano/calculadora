/* const btnCalcular = document.getElementById( 'btn-calcular' );

btnCalcular.addEventListener( 'click', function(){
  let cuenta = parseInt( document.querySelector( '#cuenta' ).value );
  let propina = parseInt( document.querySelector( '#propina' ).value );
  let totalCuenta = document.querySelector( '#total-cuenta' );
  let totalPropina = document.querySelector( '#total-propina' );
  let totalPagar = document.querySelector( '#total-pagar' );
  
  //Calculamos el total de la propina
  let calculoTotalPropina = ( cuenta * propina ) / 100;
  //Calculamos el total de la cuenta
  let calculoTotalPagar = cuenta + calculoTotalPropina;
  
  //Mostramos la información en pantalla
  totalCuenta.innerHTML = cuenta;
  totalPropina.innerHTML = calculoTotalPropina;
  totalPagar.innerHTML = calculoTotalPagar;
} ); */

// Refactorizacion del codigo inicial

const btnCalcular = document.getElementById("btn-calcular");
const cuenta = document.getElementById("cuenta");
const propina = document.getElementById("propina");

const totalCuenta = document.getElementById("total-cuenta");
const totalPropina = document.getElementById("total-propina");
const totalPagar = document.getElementById("total-pagar");

const calcular = (cuenta, propina) => {

  //Calculamos el total de la propina
  let calculoTotalPropina = (cuenta * propina) / 100;
  //Calculamos el total de la cuenta
  let calculoTotalPagar = cuenta + calculoTotalPropina;


  //Mostramos la información en pantalla
  totalCuenta.innerHTML = cuenta;
  totalPropina.innerHTML = calculoTotalPropina;
  totalPagar.innerHTML = calculoTotalPagar;
  
}

btnCalcular.addEventListener("click", (e) => {
  e.preventDefault()
  if (isNaN(parseInt(cuenta.value)) || isNaN(parseInt(propina.value))) {
    alert('Ingresa los datos solicitados')
  } else {
    calcular(parseInt(cuenta.value), parseInt(propina.value))
    cuenta.value = ""
    propina.value = ""
  }

})
