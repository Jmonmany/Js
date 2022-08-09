//Métodos ARRAY
//1.Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

const name = "Javier Monmany";

    function myName(name){
        return name.split("").join("/");
    }
    const result = myName(name);
    console.log(result);

//2- Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

function myName2(name){
    return name.split("").join("|").split(" ")[1];
}
const result2 = myName2(name);
console.log(result2);

//3- Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)
const FirstName = name.split(" ")[0]

for(i = 0 ; i<FirstName.length ; i++ ){
    console.log(i+"º "+FirstName[i])
}

//4- Como en el ejercicio anterior, pero seleccionando tu apellido
const LastName =  name.split(" ")[1]
for(i = 0 ; i<LastName.length ; i++ ){
    console.log(i+"º "+LastName[i])
}
//5- Puedes indicarme las iniciales de tu nombre y apellido?
const myInitials = name.split(" ")[0][0] +"."+ name.split(" ")[1][0]
console.log(myInitials)
//6- Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
const ArrayName = name.split(" ")
ArrayName.push("30") 
console.log("My name is " + ArrayName[0] +" and I'm "+ ArrayName[2])
//7- Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
ArrayName.push("Hamburg")
console.log("City added to array! => " + ArrayName)
//8- Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
function SubstractingLastElement(x){
    x.pop()
    return x
}
console.log(SubstractingLastElement(ArrayName))
//9- Ahora, elimina el nombre y asegura los cambios
function SubstractingFirstElement(x){
    x.shift()
    return x
}
console.log(SubstractingFirstElement(ArrayName))
//10- Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?
function AddingFirstElement(x){
    x.unshift(name.split(" ")[0])
    return x
}
console.log(AddingFirstElement(ArrayName))
//11- Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
const numbers = [1,2,3,4,5,6,7,8,9,10]
let multByTwo = numbers.map(x => x * 2)
console.log(multByTwo)
//12- Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
let num = 3; // cada número se multiplicará por 3
function multByNum(num){
    let arrayMult = numbers.map(x => x*num)
    console.log(arrayMult)
}
multByNum(num)
//13- Podrías mostrarlos en el orden inverso?
const Compare = (a,b) =>{
    return b-a
}
console.log(numbers.sort(Compare))
//14- Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

function countLetters(str){
    let tempArr = str.split('');
    let tempArrSorted = tempArr.sort()
    let letters = [];
    let count = 1;

    for(i=0;i<tempArr.length; i++){
        if(tempArrSorted[i]===tempArrSorted[i+1]){
            count++;
        }else{
            let value = `${count}${tempArrSorted[i]}`;
            letters = [...letters,value];
            count = 1
        }
    }
    return letters.join(" ")
}
console.log(countLetters(name))

//15- Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras
