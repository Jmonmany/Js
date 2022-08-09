//1- Que hora es? Declara la hora como número y devuelvela como String
let hora = 10.45
console.log("I'ts " + hora.toString() + " of morning" );

//2- Nono, que hora exactamente? Dime la hora sin minutos!
console.log("It's around "+parseInt(hora).toString()+" of morning")

//3- Ahora, declara tu hora y muéstrala redondeada.
console.log("It's about "+Math.ceil(10.45)+" of morning")
//4- Hagamos una calculadora. Primero, la suma. Crea variables con valores distintos y súmalos.

let a = 1
let b = 2
let sum = a+b
console.log("The sum of "+a+"+"+b + " is " + sum);

//5- Añade la resta...

let rest = a-b
console.log("The sum and rest of "+ a + " and " + b + " is " + sum + " and " + rest);

//6- La multiplicación...

let multi = a*b
console.log("suma: " +sum +" resta:"+ rest +" multi: "+ multi);

//7- Y, por ultimo, la división.

let div = a/b
console.log("suma: " +sum +" resta:"+ rest +" multi: "+ multi+" división: "+div);

//8- Ahora, intenta multiplicar un número por una string, que devuelve?

console.log(10*"hour");//NaN

//9- Podemos controlar este error con un condicional if?
if(isNaN(a)||isNaN(b)){
    console.log("You can't do this operation!")
}else{
    console.log(sum)
}
