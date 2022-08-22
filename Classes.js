console.log("1_____________________________________")
//1- Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
const avenger = {
    name: "Tony",
    class: "VII",
    id: 1,
  };
const ShowProperty = () =>{for (const prop in avenger) {
            console.log(prop)
        }
    }
ShowProperty()
console.log("2_____________________________________")
//2- Ahora, crea una función que liste solo los valores de las propiedades.

const ShowValue = () => {
    for (const prop in avenger) {
        console.log(avenger[prop])
    }
}

ShowValue()

console.log("3_____________________________________")
//3- Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
avenger.class = "XI"
console.log(avenger.class)

console.log("4_____________________________________")
//4- Ahora, elimina la propiedad ID y asegura los cambios.
delete avenger.id;
ShowProperty();

console.log("5_____________________________________")
//5- Añade una nueva propiedad, por ejemplo city y dale un valor.
//5.1- Asegura los cambios solo imprimiendo esa nueva propiedad.

avenger.id = "VII"
console.log(avenger)

//6- Lista el numero de propiedades que contiene el objeto.
console.log("6_____________________________________")
console.log("The Object avengers contains " + Object.keys(avenger).length + " info fields")

console.log("7_____________________________________")
//7- Cambia la propiedad name por fullName.
//7.1- Asegura los cambios.

avenger["fullName"] = avenger["name"] = "Tony Stark";
delete avenger["name"];
console.log(avenger)

console.log("8_____________________________________")
//8- Lista todas las propiedades del objeto a través de un console.log()
//8.1- Añade más propiedades al objeto, como... markAverage, country, job, studies...
//8.2- Asegura los cambios volviendo a listar los valores del objeto
console.log(`Hi there I'm ${avenger.fullName}, I'm ${avenger.id} and I belong to the class ${avenger.class}`)
avenger.markAverage = 10
avenger.country = "NY"
avenger.job = "safe the world"
console.log(avenger)

console.log("9_____________________________________")
//9- Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

//Example:
/*OJO* la palabra clave "this" es una función que esta determinada por cómo se invoca a la función.
No puede ser establecida mediante una asignación en tiempo de ejecución, 
y puede ser DIFERENTE cada vez que la función es invocada.
Lo que significa que se puede usar como CONSTRUCTOR, en este ejemplo como de Avengers,
junto con "new" la función Avenger puede guardar en variables un Objeto
con las mismas características sin problemas de referencia, ya que "this" se encargará
de referirse correctamente en cada caso. 

quita el "this" al principio de cada propiedad en la función
y verás lo que ocurre
*/
function Avenger(id, fullName, classRoom, city, job, studies, markAv) {
  this.id = id
  this.fullName = fullName;
  this.classRoom = classRoom;
  this.city = city;
  this.job = job;
  this.studies = studies;
  this.markAv = markAv;
}
const tonyStark = new Avenger(1,"Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
console.log(tonyStark);

//10- Crea otro objeto y imprime sus propiedades por pantalla.
console.log("10_____________________________________")
const Hulk = new Avenger(2,"Hulk", "X", "NYC", "Doctor", "High", 8);
console.log(Hulk)

console.log("11_____________________________________")
//11- Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:

function AvengerPulsDescription(id, fullName, classRoom, city, job, studies, markAv) {
    this.id = id
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    this.description = function(){
        console.log(this.fullName + ", " + this.classRoom + ", " + this.city + ", " + this.job + ", " + this.studies + ", " + this.markAv)
    }
  }
const Thor = new AvengerPulsDescription(3, "Thor", "V", "NYC", "Soldier", "Low", 5)
Thor.description()

console.log("12_____________________________________")
//12- Ahora, crea una función que solo liste los nombres de los objetos instanciados  

const OnlyNames = () =>{
    return tonyStark.fullName + ", "+ Hulk.fullName + ", " + Thor.fullName
}
console.log(OnlyNames())

//13- Crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
console.log("13_____________________________________")
const Avengers = []
Avengers.push(tonyStark,Hulk,Thor)
const SameCity= []   
const Names = () =>{Avengers.forEach(avenger => {
    if(avenger.city === "NYC"){
        SameCity.push(avenger.fullName)
    }
})
};
Names()
console.log(`Are ${SameCity.length} avengers living in NYC: ${SameCity}`)

//14- Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
console.log("14_____________________________________")
const MrMonmany = new Avenger(4, "Javier Monmany", "III", "Hamburg", "Developer", "Weed", 15)
Avengers.push(MrMonmany)
const markAv = []
const MediaMarkAV = () =>{
    Avengers.forEach(avenger => {
        markAv.push(avenger.markAv)
    });
    const media = (markAv.reduce((total, actual) =>{
        return total + actual
    }))/markAv.length
    console.log(media)
}
console.log(MediaMarkAV())

//15- Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.
//16- Intenta crear las parejas de forma aleatoria.
const Pair = []
const randomAvengerPair = () =>{
    do {
        const randomNumber = Math.floor(Math.random()*4)  
        if(Pair.includes(Avengers[randomNumber])){
            randomAvengerPair()
        }  
        Pair.push(Avengers[randomNumber])
    } while (Pair.length<2);
}
randomAvengerPair()


const Compare = () =>{
    let Name;
    if(Pair[0].markAv > Pair[1].markAv){
        Name = Pair[0].fullName
    }else{
        Name = Pair[1].fullName
    }
    console.log(Pair[0].fullName + " vs " + Pair[1].fullName +" => "+ Name +" is better!")
}
Compare()