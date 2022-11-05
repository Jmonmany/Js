//1- Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
const character = {
    name: "Jon",
    family: "Snow",
    id: 1,
  };
const ShowProperty = () =>{
    for (prop in character) {
        console.log(prop)
    }
    // or console.log(Object.keys(character)) : Output ["name","family","id"] 
    //*OJO* si una propiedad fuese un número: const character = {name: "Jon", 1: 1,};
    // En este caso el Array contendria la propiedad 1 como String "1" !NO como en Object.value(character)! 
}
ShowProperty()

//2- Ahora, crea una función que liste solo los valores de las propiedades.
const ShowValue = () =>{
    for (prop in character) {
        console.log(character[prop])
    }
    // or console.log(Object.values(character)) : Output ["Jon","Snow","1"] *** NUMERO 1 como Numero 1 OJO!!
}
ShowValue()

//3- Cambia el valor de la propiedad family por "Lannister" y asegurate de que los cambios se han efectuado.

character.family="Lannister";
ShowValue()

//4- Ahora, elimina la propiedad ID y asegura los cambios.

delete character.id;
ShowProperty();

//5- Añade una nueva propiedad, por ejemplo age y dale un valor.

character.age=30
console.log(character)

//6- Lista el numero de propiedades que contiene el objeto.

console.log("The Object character have now " + Object.keys(character).length + " properties")

//7- Cambia la propiedad name por fullName.
//7.1- Asegura los cambios.

character["fullName"] = character["name"] = "Jon Snow";
delete character["name"];
console.log(character)

//8- Lista todas las propiedades del objeto a través de un console.log()

console.log(`Hi there I'm ${character.fullName}, I'm ${character.age} and I belong to the family ${character.family}`)

/*9- Añade más propiedades al objeto, como... location, job...
9.1- Asegura los cambios volviendo a listar los valores del objeto
*/

character.location = "Tower of Joy"
character.job = "soldier"
for (const key in character) {
    console.log(character[key])
}

//Ejercicios extra
// Suma de valores de todas las propiedades con método reduce.(()=>{})
const salarios = {
    Enero: 800,
    Febrero: 900,
    Marzo: 1000,
};
console.log(
    Object.values(salarios).reduce((total, actual) => {
        return total + actual;
    })
);
/*or* 
let TotalSalarios = 0;
for (Mes in salarios) {
    console.log(Mes); //Output Enero Febrero Marzo
    TotalSalarios += salarios[Mes];
}
console.log(TotalSalarios); //Output 2700
*/

// Nombres a mayúsculas con método entries

const person1 = {
    nombre: "javier",
    apellido: "monmany",
    edad: 30,
};
Object.entries(person1).forEach(element => {
    const clave = element[0];
    const valor = element[1];
    if(typeof(valor) === "string"){
        person1[clave] = valor.toUpperCase();
    }
});
console.log(person1)
// Object.entries(person1) output [["nombre","Javier"],["apellido","monmany"],["edad", 30]]
