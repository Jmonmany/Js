//1- Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.
console.log("1_____________________________________")

showNums = () => {
    const nums = [1,2,3,4,5,6,7,8,9]
    for(let i = 0; i < nums.length-1; i++){
        let pairs = []
        pairs.push(nums[i],nums[i+1])
        console.log(i+1 + "ª pareja " + pairs.map(num => num*2).join("-"))
    }
}
showNums()

//1.1- La funcion debería aceptar la array a tratar como argumento.
console.log("1.1_____________________________________")
showNums1 = (argument) => {
    let nums = argument.map(num=>num*2)
    
    for(let i = 0; i < nums.length-1; i++){
        let pairs = []
        pairs.push(nums[i],nums[i+1])
        console.log(i+1 + "ª pareja " + pairs.join("-"))
    }
}
showNums1([1,2,3,4,5,6,7,8,9])

//1.2- Pasa también el numero a multiplicar a la función como argument
console.log("1.2_____________________________________")
showNums2 = (argument) => {
    let nums = argument.map(num=>num*argument[argument.length-1])
    
    for(let i = 0; i < nums.length-1; i++){
        let pairs = []
        pairs.push(nums[i],nums[i+1])
        console.log(i+1 + "ª pareja " + pairs.join("-"))
    }
}
showNums2([1,2,3,4,5,6,7,8,9])

//1.3- La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.
console.log("1.3_____________________________________")
showNums3 = (argument) => {
    let nums = argument.map(num=>num*argument[argument.length-2])
    
    for(let i = 0; i < argument[argument.length-1]; i++){
        let pairs = []
        pairs.push(nums[i],nums[i+1])
        console.log(i+1 + "ª pareja " + pairs.join("-"))
    }
}
showNums3([1,2,3,4,5,6,7,8,9,3])

//2- Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?
console.log("2_____________________________________")
fibo = (argument) => {
    
    const Fibonacci = [argument, argument+1]
    
    for (let i = 0; Fibonacci.length < 15; i++) {
        
        const element = Fibonacci[i]+Fibonacci[i+1];
        Fibonacci.push(element)          
    }  

console.log(Fibonacci)
};
fibo(0)

//2.1 Puedes añadir además, la posición de cada resultado?
console.log("2.1_____________________________________")
fibo1 = (argument) => {
    
    const Fibonacci = [argument, argument+1]
    
    for (let i = 0; i < 15; i++) {
        const element = Fibonacci[i]+Fibonacci[i+1];
        Fibonacci.push(element)
        console.log(Fibonacci[i] + " position " + i)          
    }  
    
};
fibo1(0)

//2.2 Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.
console.log("2.2_____________________________________")
fibo2 = (argument) => {
    
    const Fibonacci = [argument, argument+1]
    
    for (let i = 0; Fibonacci.length < 15; i++) {
        
        const element = Fibonacci[i]+Fibonacci[i+1];
        Fibonacci.push(element)
                 
    }  
    console.table(Fibonacci)
};
fibo2(0)

//2.3 Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.
console.log("2.3_____________________________________")
fibo3 = (finalPosition) => {
    const Inicio = 0
    const Fibonacci = [Inicio, Inicio+1]
    
    for (let i = 0; Fibonacci.length <= finalPosition; i++) {
        
        const element = Fibonacci[i]+Fibonacci[i+1];
        Fibonacci.push(element)
                 
    }  
    console.table(Fibonacci)
};
fibo3(10)

//3- Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código
console.log("3_____________________________________")
let code = 3712;
codeScript = (code) => {
    let count = 0
    const Script = (code+"").split("")
    
    while (count < 4) {
        
        Script.splice(3, 0, Script.splice(0, 1)[0])
        console.log(+Script.join(""))
        count ++
    }
    
}
codeScript(code)

//3.1 Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)
console.log("3.1_____________________________________")
code = 3712;
let code2 = 6439
codeScript2 = (code,code2) => {
    let count = 0
    const Script = (code+"").split("")
    const Script2 = (code2+"").split("")
    while (count < 4) {
        
        Script.splice(3, 0, Script.splice(0, 1)[0])
        console.log("from code1 " + Script.join(""))
        
        Script2.splice(3, 0, Script2.splice(0, 1)[0])
        console.log("from code2 " + Script2.join(""))
        count ++
    }
    
}
codeScript2(code, code2)

//3.2 Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)
console.log("3.2_____________________________________")
let multiplicador = 2
codeScript3 = (code,code2, multiplicador) => {
    let count = 0
    
    const Script = (code+"").split("").map(num =>{
       num = +num
       if(num*multiplicador < 10){
        num = num*multiplicador
        return num
       }else{
        return num
       }
    })
    const Script2 = (code2+"").split("").map(num =>{
       num = +num
       if(num*multiplicador < 10){
        num = num*multiplicador
        return num
       }else{
        return num
       }  
    })
    while (count < 4) {
        
        Script.splice(3, 0, Script.splice(0, 1)[0])
        console.log("from code1 " + Script.join(""))
        
        Script2.splice(3, 0, Script2.splice(0, 1)[0])
        console.log("from code2 " + Script2.join(""))
        count ++
    }
    
}
codeScript3(code, code2, multiplicador)

//3.3 Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.
console.log("3.3_____________________________________")
let code3 = 7246
const decrypter = (code, multiplicador) => {
    let count = 0
    
    const Script = (code+"").split("").map(num =>{
       num = +num
       if( (num % multiplicador) == 0){
        return num/multiplicador
       }else{
        return num
       }
    })
    
    while (count < 4) {
        
        Script.splice(3, 0, Script.splice(0, 3).join(""))
        console.log(Script.join(""))
        count ++
    }   
}
decrypter(code3, multiplicador)

//3.4 Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.
//3.5 El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.
console.log("3.5_____________________________________")
const dictionary = {
    0: ['A', 'K', 'T', 'F', 'O', 'Y'],
    1: ['B', 'L', 'U', 'G', 'P', 'Z'],
    2: ['C', 'M', 'V', 'H', 'Q', '.'],
    3: ['D', 'N', 'W', 'I', 'R', ','],
    4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
}

const dictionaryEncryptor = (palabra = "") => {

}
/*4- Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra CODERS, la palabra encriptada será CEORDS. Si divides la palabra original en 2 grupos obtienes:
COD
|-|-|
ERS Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes CEORDS.
Entonces, el programa deberá recibir CODERS y retornar CEORDS
*/
//4.1- Programa el desencriptador, pasa como parámetro CEORDS y que devuelva CODERS.
//4.2- Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro CODERS y devuelva CODERS (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)
//4.3- Lo tienes? Prueba ahora con ISDICODERS. Cambia la función para que pueda aceptar palabras más largas.
console.log("4.ENTERO_____________________________________")
const Code = "ISDICODERS"
let encryptedCode = "" 
let decryptedCode = ""

const EncryptAndDecrypt= (code) => {
    
    const Encrypt = () => {
        
        encryptedCode = []
        let firstPart, secondPart
        firstPart = [code.slice(0,code.length/2)]
        secondPart = [code.slice(code.length/2)]
        for (let i = 0; i < code.length; i++) {
           
            encryptedCode.push(firstPart[0][i])
            encryptedCode.push(secondPart[0][i])
            
        }
        return encryptedCode.join("")
    }
    
    console.log("encryption:" + Encrypt())
    
    const decrypt = () => {
        let firstPart, secondPart
        firstPart = []
        secondPart = []
    
        for (let i = 0; i < encryptedCode.length; i++) {
            if(i % 2 === 0){
                firstPart.push(encryptedCode[i])
            }else{
                secondPart.push(encryptedCode[i])
            }
        }
        decryptedCode = firstPart.concat(secondPart).join("")
        return decryptedCode
    }

    console.log("decryption:" + decrypt())
  
}
EncryptAndDecrypt(Code)

//5- Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:
console.log("5_____________________________________")
const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
 
const sayItWithWords = (numero) => {
    if(numero.toString().length === 1){
        console.log(units[numero.toString()[0]])
        return
    }
    if(numero.toString()[0] === "1"){
        console.log(teens[numero.toString()[1]])
        return
    }
    if(numero.toString()[0] > "1"){
        console.log(tens[numero.toString()[0]] + "-" + units[numero.toString()[1]])
        return
    }
}
sayItWithWords(72)


















