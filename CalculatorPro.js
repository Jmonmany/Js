let mainArray = []

const insertNumbers = () =>{
    do {
        number = prompt("Insert value")
        if(!number && mainArray.length == 0){
            alert("Please insert at least one number");
            insertNumbers();
        }
        if(number){
        mainArray.push(number);
        }
    } while (number);
}
insertNumbers()

const calculator = () => {
    if(mainArray.length==1){
        console.log("The square root of your number is " + Number(Math.sqrt(mainArray[0]).toFixed(3)))
        return 
    }
    if(mainArray.length>1){
        let arrayOfNumbers = mainArray.map(element=>Number(element))
        
        const sum = arrayOfNumbers.reduce((sum, num) => sum + num);
        const subs = arrayOfNumbers.reduce((substraction, num) => substraction - num);
        const multi = arrayOfNumbers.reduce((multiplicacion, num) => multiplicacion * num);
        const div = arrayOfNumbers.reduce((division, num) => division / num);
        
        console.log(`The results are as follows; SUM: ${sum.toFixed(3)} SUBSTRACTION: ${subs.toFixed(3)} MULTIPLICATION: ${multi.toFixed(3)} DIVISION: ${div.toFixed(3)}`);
        return 
    }  
}
calculator()

const startAgain = () => {

    let answer = confirm("Do you want to set more numbers?")
    if(answer){
            insertNumbers()
            calculator()
    }else{
            console.log("Thank you for your time, Bye!")
    }
       
}
startAgain()