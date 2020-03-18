/** Estamos haciendo una condicional
 * si el resultado es correcto o no
 */
let password = 'julio123';
let input = 'julio123';
let result = input == password;

//Si el resultado es true sale Login Correcto
if (result == true) {
    console.log("Login Correcto")
}
//Caso contrario, que salga false saldra este mensaje
else {
    console.log("Contraseña Incorrecta")   
}

/**----------------------- */
let score = 50;
if (score > 30) {
        console.log("Eres un pro")
}
else if (score > 10) {
        console.log("Sigue Practicando")    
}
else {
        console.log("Necesitas Practicar más")
}

/**------------------------- */
let tarjeta = "Tarjeta Devito"
switch (tarjeta) {
    case "Tarjeta Devito":
        console.log("Usted Tiene Devito");
        break;
    case "Tarjeta Credito":
        console.log("Usted Tiene Credito");
        break;
    default:
        console.log("Usted No Tiene Tarjeta");
        break;
}