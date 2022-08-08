
//3- Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola utilizando la variable const:
const info=["Javier","Monmany",30]
for(i=0;i<info.length;i++){
    console.log(info[i])
}

//5- Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola utilizando la variable const:

const Data={
    name: "Javier",
    apellido: "Monmany",
    age: 30,
}
console.log(Data)

//6- Crea una estructura condicional que imprima el número mayor entre dos números.

let numberA = 25
let numberB = 12
if( numberA < numberB) {
    console.log(numberB)
}else if(numberA==numberB){
    console.log("The numbers are equal")
}else{
    console.log(numberA)
}

//7- Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.

const newArray=[10,20,30,40,50]
for(i=0;i<newArray.length;i++){
    if(i==2){console.log("We are in the middle of loop")}
    console.log(newArray[i])
}

//8- Declara tu nombre y tu edad y luego crea un condicional para que en caso de no coincidir con tus datos, mostrar un error

let myName="Javier"
let myAge=30
if(myName!=="Javier" && myAge!==30){console.log("this is not you!")}
else{console.log("Hi!! Glad to see u again!")}

//8.1- Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

const PersonalData=["Javier","Monmany",30,"Steinschanze","Hombre"]
for(i=0;i<PersonalData.length;i++){
    if(true){console.log("We find your data! " + PersonalData[i])}
}