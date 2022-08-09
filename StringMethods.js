//Métodos STRING

//1- Puedes contar cuantas letras tiene tu nombre?
const name = "Javier";
    function myName(){
        return "My Name has " + name.length + " letters";
    }
    const result = myName();
    console.log(result);

    //2- Añade tu apellido a "name" e indica en que posición del string empieza (modificando el método prueba a buscar el espacio entre el nombre y el apellido):

const Name_y_Apellido = "Javier Monmany"
const GetPosition = () =>{
    console.log(Name_y_Apellido.search(" "))
}
GetPosition()

//3- Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):


    function myName3(){
        return "My Name is " + Name_y_Apellido.split(" ")[0] ;
    }
    const result3 = myName3();
    console.log(result3);

//4- Ahora, solo tu apellido.


    function myName4(){
        return "My lastname is " + Name_y_Apellido.split(" ")[1] ;
    }
    const result4 = myName4();
    console.log(result4);

//4.1- Iguala el resultado a una variable nueva e imprímela por pantalla.

let myNewString =result4
console.log(Name_y_Apellido + ", " + myNewString);

//5- Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
let name5 = "Mr. "
myNewString = Name_y_Apellido.split(" ")[1]
console.log(name5 + myNewString);

//6- Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
let LastNameUpper = Name_y_Apellido.split(" ")[1].toUpperCase()
console.log("Mi apellido en mayúsculas es " + LastNameUpper)

//7- Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

let something = name + " is awesome";
console.log(something)

//8- Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

console.log(Name_y_Apellido[0] + "." + Name_y_Apellido[7])

