/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/

function mostrar() {
  let nombre;
  let tipo;
  let precio;
  let cantidad;
  let categoria;
  let contadoralcohol=0;
  let contadoriac=0;
  let contadorquat=0;
  let acumuladoralcohol=0;
  let acumuladoriac=0;
  let acumuladorquat=0;
  let unidadesdetergente=0;
  let nombremascaro;
  let preciomascaro=0;
  let categoriamascara;
  let mayorcantidad;
  let promalcohol;
  let promiac;
  let promquat;
  let flag;
  

  

  do {
    nombre = prompt("Ingrese el nombre del producto");

    tipo = prompt("Ingrese el tipo de producto: 'ALCOHOL', 'IAC' o 'QUAT'");
    while (tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT") {
      tipo = prompt( "Error. Ingrese el tipo de producto: 'ALCOHOL', 'IAC' o 'QUAT'"  );
    }

    precio = parseFloat(prompt("Ingrese un precio entre 100 y 300"));
    while (isNaN(precio) || precio < 100 || precio > 300) {
      precio = parseFloat(prompt("Error, ingrese un precio entre 100 y 300"));
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de unidades"));
    while (isNaN(cantidad) || cantidad <= 0 || cantidad > 1000) {
      cantidad = parseInt(prompt("Error. Ingrese la cantidad de unidades"));
    }

    categoria = prompt(  "Ingrese la categoria del producto: 'desinfectante', 'bactericida, 'detergente'"  );
    while (  categoria != "desinfectante" &&  categoria != "bactericida" &&  categoria != "detergente"  ) {
		categoria = prompt("Error. Ingrese la categoria del producto: 'desinfectante', 'bactericida, 'detergente'" );
    }

	if(flag || precio>preciomascaro){
		preciomascaro=precio;
		nombremascaro=nombre;
		categoriamascara=categoria;
		flag=0
	}


    switch (tipo) {
      case "ALCOHOL":
		acumuladoralcohol+=cantidad;
		contadoralcohol++;
        break;
      case "IAC":
		acumuladoriac+=cantidad;
		contadoriac++;
        break;
      case "QUAT":
		acumuladorquat+=cantidad;
		contadorquat++;
        break;
    }

	if (acumuladoralcohol>acumuladoriac&&acumuladoralcohol>acumuladorquat){
		mayorcantidad='ALCOHOL';
			}else if(acumuladoriac>=acumuladoralcohol&&acumuladoriac>acumuladorquat)
			mayorcantidad="IAC";
			else{
				mayorcantidad="QUAT";
			}


	if (categoria=='detergente'&& precio<=200){
	unidadesdetergente++;
	}


    respuesta = prompt('Si desea ingresar otro producto ingrese "s"');
  } while (respuesta == "s");


  if (acumuladoralcohol!=0){
	promalcohol=acumuladoralcohol/contadoralcohol;
}
if (acumuladoriac!=0){
	promiac=acumuladoriac/contadoriac;
}
if (acumuladorquat!=0){
	promquat=acumuladorquat/contadorquat;
}


alert ("A- El promedio de las cantidad de cada tipo es: Alcohol "+promalcohol+", IAC: "+promiac+" y QUAT "+ promquat);
alert("B- La categoria con mas cantidad de productos es: "+mayorcantidad);
alert ("C- Hay "+ unidadesdetergente+" unidades de detergente con precio menos a 200 (inclusive) ");
alert ("D- El fabricante mas caro es" +nombremascaro+" y con la categoria "+categoriamascara);






}



 

