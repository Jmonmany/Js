let Name
let Stop = false
const checkValidName = () =>{
  Name = prompt("Hello!, What is your name?")
  if(Name == undefined || Name === ""){
    alert("Please enter your Name")
    checkValidName()
  }
}
checkValidName()

let counter = 0
let success = false
let LINE = 0
let answer
//Array vacío y preguntamos 
let Cardboard;

//Función generadora de números random
const randomNumber = function(minimum, maximum){
  return Math.floor(Math.random()*(maximum-minimum)+1);
}

//Función que rellena las 3 líneas del cartón con 15 números al azar sin repetir
const FillCardboard = () => {
  const ArrayNumbers = []
  while (ArrayNumbers.length < 15) {
    const numRandom = randomNumber(0, 25);
    if (!ArrayNumbers.includes(numRandom)) {
      ArrayNumbers.push(numRandom);
    }
  }
  let lines = []
  for (let i = 0; i < ArrayNumbers.length; i+=5) {
    const element = ArrayNumbers.slice(i,i+5);
    lines.push(element);
  }
  Cardboard = lines
}

//Función auxiliar que muestra el estado del cartón
const ShowCardboard = () => {
  console.log(`Su cartón es:\n ${Cardboard[0].join(" ")}\n ${Cardboard[1].join(" ")}\n ${Cardboard[2].join(" ")}`)
}



//Función que de ¿Acierto? revisa el valor de la variable success
const Check = () => {
  if(success == true){
    console.log("_________________________________________________")
    alert("Success!")
    ShowCardboard()
  }else{
    console.log("_________________________________________________")
    alert("No success, sorry!")
    ShowCardboard()
  }
}
//Función que guarda true or false, para continuar con el juego
let YesOrNot = () =>{
  let answer = confirm( Name +" Would you like to continue?")
  if(answer == true){
    return answer
  }else if(answer == false){
    return answer
  }
};

//Creamos Array de Números ya sorteados
let drawnNumbers = []

//Función ejecutora de Turnos: muestra número al azar, comprueba y cambia resultados
const Turn = () =>{
  const randomNum = randomNumber(0, 25)
  
  while(!drawnNumbers.includes(randomNum)){
    if(!YesOrNot()){
      Stop = true
      alert("Thanks you, Bye")
      break
    }
      
      console.log("The Random number is " + randomNum)
      drawnNumbers.push(randomNum)
      let numFinded;
      
      switch (true) {
        case Cardboard[0].includes(randomNum):
          numFinded = Cardboard[0].indexOf(randomNum)
          Cardboard[0][numFinded] = "x"
          success = true
          if(!Cardboard[0].find(Number)){
            alert("LINE number 1")
            LINE += 1
          }
          break;
          case Cardboard[1].includes(randomNum):
            numFinded = Cardboard[1].indexOf(randomNum)
            Cardboard[1][numFinded] = "x"
            success = true
            if(!Cardboard[1].find(Number)){
              alert("LINE number 2")
              LINE += 1
            }
            break;
            case Cardboard[2].includes(randomNum):
              numFinded = Cardboard[2].indexOf(randomNum)
              Cardboard[2][numFinded] = "x"
              success = true
              if(!Cardboard[2].find(Number)){
                alert("LINE number 3")
                LINE += 1
              }
              break;  
              default:
                break;
              }
              Check()
              success = false
              counter += 1
          }
}  
        
//Función inicio de Juego    
const SartBingo = () => {
      
  FillCardboard()
  ShowCardboard()
      
          while (LINE < 4) {
            if(LINE === 3){alert("BINGO")
              console.log("Completed the game in " +counter+ " turns")
              let answer = confirm( Name +" Do you want to play again?")
              if(answer === true){
                LINE = 0
                counter = 0
                drawnNumbers = []
                SartBingo()
              }else{
                break
              }
            }
            if(Stop === true){
              break
            }
            Turn()
          }

}
SartBingo()