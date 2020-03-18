/**Las funciones hace definir una tarea
 * y luego poder llamarla cuantas veces quieras
 */

 function name() {
     console.log('Hello Word')
 }
 name();

 /**Pasar un string dentro de la funcion */
 //Si no colocas que saldra el valor undefine
 function names(nombres) {
     console.log("Hola " + nombres);
 }
 names('Julian');
 names('Pedrito');
 names('Pablo');

 /**SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR */
 function numer(n1 , n2) {
    sum = n1 + n2;
    res = n1 - n2;
    multi = n1 * n2;
    divi = n1 / n2;
    console.log(
        "Suma: " + sum + " " +
        "Resta: " + res + " " +
        "Multiplicacion: " + multi + " " +
        "Division: " + divi
        );

 }
 numer (10, 5);