/*Ejemplo

const x = myFunction(4, 3);

const myFunction = (a, b) => {
  return a * b;
};

const y = function myFunction(a, b) {
  console.log(a * b);
};

*/

//1- Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

const func = (myName) => {
    console.log("Hello " + myName); //output: 'hello Javi'
};
func("Javi");

//2- Intenta retornar los valores en lugar de usar console.log

const func2 = (a) => {
    return "Hello " + a; //output: 'hello Javi'
};
func2("Javi");

//3- Ahora, añade tu edad y concaténala al return

const func3 = (a, b) => {
    return "Hello " + a +" you are " + b + " years old"; //output: 'hello Javi'
};
func3("Javi", 30);

//4- Iguala tu función a una variable y ejecútala

let MyFunction = func3 

//5- Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados

let name = function(name) {
    return name
}

let age = function(age){
    return age
}

name("Javi ") + age(30)

//5.1- Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

let random = function(minimum, maximum){
    return Math.floor(Math.random()*(maximum-minimum))
}

name("Javi ") + (age(30)+ random(1, 10)).toString()

//6- Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

const Name= (name) =>{
    return name
}
const Age = (age) =>{
    return age
}

//7- Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas

const FuncionPadre = () =>{
    const x = Name(name("Javier"))
    const y = Age(age(30))
    return x + y
}

//8- Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()

const FunciónHija = () => {
    return Math.floor(Math.random()*100)
}
const FuncionPadre1 = () =>{
    const x = Name(name("Javier "))
    const y = Age(FunciónHija())
    return x + y
}

//9- Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50

const FuncionPadre2 = () =>{
    const x = Name(name("Javier "))
    const y = Age(random(0, 50))
    if(y<20){
        console.log("your younger than 20")
    }else{
        console.log("your older than 20")
    }
    return x + y
}

//10- Al return de la función name(), concaténale otro mensaje

const FuncionPadre3 = () =>{
    const x = Name(name("Javier")+"Are your sure you are Javier ")
    const y = Age(age(30))
    return x + y
}

//11- Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable

const FuncionPadre4 = () =>{
    const x = Name(name("Javier "))
    const y = Age(age(30))
    return "The First Function returns " + x + y + " But the second returns " + (x=Name("Javier")+"Are your sure you are Javier ")
}

//12- Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

const FuncionPadre5 = () =>{
    const x = Name(name())
    
    
    const y = Age(random(0, 50))
    if(x==Name("Javier")){
        return x + y
    }else{
        return "The first function returns: " + x + y + " so you are not Javier!"
    }
}

//13- Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.
//14- Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.


const AgeFinal = () => {
    return Age(random(0, 50))
}
const FirstName = () => {
    return Name()
}
//15- Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.

const Padre = () => {
    const Array = []
    Array.push(FirstName(), AgeFinal())
    return Array
}