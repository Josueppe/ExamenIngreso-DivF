
/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/



function mostrar()
{
	let nombre;
	let obrasocial;
	let edad;
	let temperatura;
	let sexo;
	let precio=600;
	let ancianososde;
	let contadorpami;
	let preciofinal;
	let preciodescuento;
	let masjoven=0;
	let nombrejoven;
	let temperaturajoven=0;
	
	let flag;
	
  
	do {
	  nombre = prompt("Ingrese el nombre");
  
	  obrasocial = prompt("Ingrese su obra social: PAMI, OSDE u otras");
	  while (obrasocial != "PAMI" && obrasocial != "OSDE" && obrasocial != "otras") {
		obrasocial = prompt( "Error. Ingrese su obra social: PAMI, OSDE u otras"  );
	  }
  
	  edad = parseInt(prompt("Ingrese edad"));
	  while (isNaN(notapromedio) || edad <= 0) {
		edad = parseInt(prompt("Error. Ingrese edad"));
	  }
  
	  temperatura = parseFloat(prompt("Ingrese temperatura"));
	  while (isNaN(temperatura) || temperatura <= 0 ) {
		temperatura = parseInt(prompt("Error. Ingrese temperatura"));
	  }
  
	  sexo = prompt(  "Ingrese sexo f/m/no binario"  );
	  while (  sexo != "f" &&  sexo != "m" &&  sexo != "no binario") {
		sexo = prompt("Error. Ingrese sexo f/m/no binario" );
	  }
  


	  if((flag || edad<masjoven && obrasocial=="PAMI")){
		  masjoven=edad;
		  nombrejoven=nombre;
		  temperaturajoven=temperatura;
		  flag=0
	  }
  
	  if (obrasocial=='OSDE'&& edad>60){
		ancianososde++;
		}
  
  
	if (obrasocial=="PAMI"){
		contadorpami++;
	}

	

	contadorpasajeros++;

  
	  respuesta = prompt('Si desea ingresar otra persona ingrese "s"');
	} while (respuesta == "s");
  

  preciofinal=contadorpasajeros*precio;
  
  
  alert ("A-La cantidad de personas con OSDE de mas de 60 años es "+ancianososde);
  alert("B- el nombre y temperatura de la mujer con PAMI mas joven es:"+nombrejoven+", con " +temperaturajoven+" grados");
  alert ("C- el viaje total sin descuento es"+preciofinal);

  if (contadorpami>=(contadorpasajeros/2)){
	preciodescuento=preciofinal*0.75;
  alert ("El precio final con descuento del 25% es: "+preciodescuento);

  }



}
