var mañana = 1;
var tarde = 1;
var noche = 1;
var Tm = 0;
var Tt = 0;
var Tn = 0;

//Calcula promedio de edad de la mañana
while (mañana <= 5) {

    var Nm = parseFloat(prompt("Ingrese la edad del estudiante de la mañana " + mañana));
    mañana++;
    Tm = Tm + Nm;
}
var Rm = Tm / 5;

//Calcular promedio de edad de la tarde
while (tarde <= 6) {

    var Nt = parseFloat(prompt("Ingrese la edad del estudiante de la tarde " + tarde));
    tarde++;
    Tt = Tt + Nt;
}
var Rt = Tt / 6;

//Calcular promedio de edad de la noche
while (noche <= 7) {
    var Nn = parseFloat(prompt("Ingrese la edad del estudiante de la noche " + noche));
    noche++;
    Tn = Tn + Nn;
}
var Rn = Tn / 7;

//Imprimir en el html los promedios
document.write("<h1>El promedio de las edades de la mañana es " + Rm + "</h1>");
document.write("<h1>El promedio de las edades de la tarde es " + Rt + "</h1>");
document.write("<h1>El promedio de las edades de la noche es " + Rn + "</h1>");


//Calcular promedio de edades mayor
if (Rm > Rt && Rm > Rn) {
    alert("El promedio mayor es de el de la mañana --> " + Rm);
} else if (Rt > Rn) {
    alert("El promedio mayor es de el de la tarde --> " + Rt);
} else {
    alert("El promedio mayor es de el de la noche --> " + Rn);
}