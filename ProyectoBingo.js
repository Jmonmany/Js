let name
let stop = false

const checkValidName = () =>{
  name = prompt("Hello! What is your name?")
  if(!name){
    alert("Please enter your name")
    checkValidName()
  }
}
checkValidName()

let counter = 0
let success = false
let line = 0
let answer
let cardboard;

//Random number generator function
const randomNumber = function(minimum, maximum){
  return Math.floor(Math.random()*(maximum-minimum)+1);
}

//Function that fills the 3 lines of the cardboard with 15 random numbers without repeating.
const fillCardboard = () => {
  const arrayNumbers = []
  while (arrayNumbers.length < 15) {
    const numRandom = randomNumber(0, 25);
    if (!arrayNumbers.includes(numRandom)) {
      arrayNumbers.push(numRandom);
    }
  }
  let lines = []
  for (let i = 0; i < arrayNumbers.length; i+=5) {
    const element = arrayNumbers.slice(i,i+5);
    lines.push(element);
  }
  cardboard = lines
}

//Auxiliary function showing the carton status
const showCardboard = () => {
  console.log(`Su cartón es:\n ${cardboard[0].join(" ")}\n ${cardboard[1].join(" ")}\n ${cardboard[2].join(" ")}`)
}

//Function that checks the value of the variable success
const checkSuccess = () => {
  if(success){
    console.log("_________________________________________________")
    alert("Success!")
    showCardboard()
    return
  }
    console.log("_________________________________________________")
    alert("No success, sorry!")
    showCardboard()
    return
}
//Function that saves true or false, to continue with the game.
let yesOrNot = () =>{
  let answer = confirm( name +" Would you like to continue?")
  if(answer){
    return answer
  }
  return answer
};

//Create Array of already drawn Numbers
let drawnNumbers = []

//Shift runner function: displays random number, checks and changes results
const turn = () =>{
  const randomNum = randomNumber(0, 25)
  
  while(!drawnNumbers.includes(randomNum)){
    if(!yesOrNot()){
      stop = true
      alert("Thanks you, Bye")
      break
    }
      
      console.log("The Random number is " + randomNum)
      drawnNumbers.push(randomNum)
      let numFinded;
      
      switch (true) {
        case cardboard[0].includes(randomNum):
          numFinded = cardboard[0].indexOf(randomNum)
          cardboard[0][numFinded] = "x"
          success = true
          if(!cardboard[0].find(Number)){
            alert("LINE number 1")
            line += 1
          }
          break;
          case cardboard[1].includes(randomNum):
            numFinded = cardboard[1].indexOf(randomNum)
            cardboard[1][numFinded] = "x"
            success = true
            if(!cardboard[1].find(Number)){
              alert("LINE number 2")
              line += 1
            }
            break;
            case cardboard[2].includes(randomNum):
              numFinded = cardboard[2].indexOf(randomNum)
              cardboard[2][numFinded] = "x"
              success = true
              if(!cardboard[2].find(Number)){
                alert("LINE number 3")
                line += 1
              }
              break;  
              default:
                break;
              }
              checkSuccess()
              success = false
              counter += 1
          }
}  
        
//Game start function    
const sartBingo = () => {
      
  fillCardboard()
  showCardboard()
      
  while (line < 4) {
    if(line === 3){alert("BINGO")
      console.log("Completed the game in " +counter+ " turns")
      let answer = confirm( name +" Do you want to play again?")
      if(answer){
      line = 0
      counter = 0
      drawnNumbers = []
      sartBingo()
      }else{
        break
      }
    }
    if(stop){
      break
    }
  turn()
  }
}
sartBingo()