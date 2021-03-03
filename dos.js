/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, 
los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/




function mostrar()
{
  let nombre;
  let situacion;
  let materias;
  let sexo;
  let notapromedio;
  let edad;
  let mejorpromedio=0;
  let estudiantemasviejo;
  let menormaterias=10;
  let acumnotabuscando=0;
  let acumnotatrabajando=0;
  let acumnotaestudiante=0;
  let contadorbuscando=0;
  let contadortrabajando=0;
  let contadorestudiante=0;
  let menormatedad;
  let menormatnombre;
  let flag;
  

  do {
    nombre = prompt("Ingrese el nombre");

    situacion = prompt("Ingrese su situacion: buscando, trabajando o solo estudiante");
    while (situacion != "buscando" && situacion != "trabajando" && situacion != "solo estudiante") {
      situacion = prompt( "Error. Ingrese su situacion: buscando, trabajando o solo estudiante"  );
    }

    materias = parseInt(prompt("Ingrese cantidad de materias hasta 8"));
    while (isNaN(materias) || materias <= 0 || materias > 8) {
      materias = parseInt(prompt("Error, Ingrese cantidad de materias hasta 8"));
    }

    notapromedio = parseFloat(prompt("Ingrese nota promedio"));
    while (isNaN(notapromedio) || notapromedio <= 0 || notapromedio > 10) {
      notapromedio = parseFloat(prompt("Error. Ingrese nota promedio"));
    }

    sexo = prompt(  "Ingrese sexo f/m/no binario"  );
    while (  sexo != "f" &&  sexo != "m" &&  sexo != "no binario") {
      sexo = prompt("Error. Ingrese sexo f/m/no binario" );
    }
    edad = parseInt(prompt("Ingrese edad"));
    while (isNaN(notapromedio) || edad <= 0) {
      edad = parseInt(prompt("Error. Ingrese edad"));
    }


	if((flag || notapromedio>mejorpromedio) && (situacion=="solo estudiante")){
		mejorpromedio=notapromedio;
		nombremejorprom=nombre;
	}
	if (flag || edad>estudiantemasviejo && situacion=='solo estudiante'){
    estudiantemasviejo++;
    }

    if (flag || materias<menormaterias&& situacion=='buscando'){
      menormaterias=materias;
      menormatnombre=nombre;
      menormatedad=edad;
      flag=0;
      }


    switch (situacion) {
      case "buscando":
        acumnotabuscando+=notapromedio;
		contadorbuscando++;
        break;
      case "trabajando":
        acumnotatrabajando+=notapromedio;
		contadortrabajando++;
        break;
      case "solo estudiante":
        acumnotaestudiante+=notapromedio;
		contadorestudiante++;
        break;
    }


    respuesta = prompt('Si desea ingresar otro alumno ingrese "s"');
  } while (respuesta == "s");


  if (acumnotabuscando!=0){
	prombusc=acumnotaestudiante/contadorbuscando;
}
if (acumnotatrabajando!=0){
	promtrab=acumnotatrabajando/contadortrabajando;
}
if (acumnotaestudiante!=0){
	promest=acumnotaestudiante/		contadorestudiante++;
}



alert ("A- El nombre del mejor promedio de los estudiantes "+nombremejorprom);
alert("B- El nombre del mas viejo de los alumnos que solo sea estudiante es:"+estudiantemasviejo);
alert ("C- El promedio de nota por situacion laboral es: buscando: "+prombusc+", trabajando; "+promtrab+", solo estudiante; "+promest);
alert ("D- La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo es "+menormatnombre+", "+menormatedad+" años");

}
