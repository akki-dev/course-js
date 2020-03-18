/**Mostrar por consola 50 veces */
let count = 50;
while (count > 0) {
    console.log("Hello Word");
    //Esto hace que cada ves se elimine uno
    //y se vuelva a cumplir la condicion
    // EJEMPLO: 50 - 1 = 49,
    // 49 - 1 = 48, asi hasta llegar a 0
    count = count - 1; // count--;
};

let name = ['Pedro' , 'Julio', 'Matias'];
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
    
}