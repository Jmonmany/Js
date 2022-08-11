let Arrays = []
const InsertNumbers = () =>{
    do {
        number = prompt("Insert value")
        if(number!==null){
            Arrays.push(number);
        }else if(number===null&&Arrays.length==0){
            alert("Please insert at least one number");
            InsertNumbers();
        }
        
    } while (Arrays.length>0 && number !==null);
}
InsertNumbers()

if(Arrays.length>1){
    let ArrayOfNumbers = Arrays.map(element=>Number(element))
    const sum = ArrayOfNumbers.reduce((sum, num) => sum + num);
    const subs = ArrayOfNumbers.reduce((substraction, num) => substraction - num);
    const multi = ArrayOfNumbers.reduce((multiplicacion, num) => multiplicacion * num);
    const div = ArrayOfNumbers.reduce((division, num) => division / num);
    console.log(`The results are as follows; SUM: ${sum.toFixed(3)} SUBSTRACTION: ${subs.toFixed(3)} MULTIPLICATION: ${multi.toFixed(3)} DIVISION: ${div.toFixed(3)}`);
    
}else if(ArrayOfNumbers.length==1){
    console.log("The square root of your number is " + Number(Math.sqrt(Arrays[0]).toFixed(3)))
}
const Again = () =>{
let YesOrNot = confirm("Do you want to set more numbers?")
if(YesOrNot == true){
        do {
            number = (prompt("Insert value"))
        if(number!==null){
            Arrays.push(number);
        }
        } while (number !== null);
    }else{
        console.log("Thank you for your time, Bye!")
    }
    if(Arrays.length>1){
        let ArrayOfNumbers = Arrays.map(element=>Number(element))
        const sum = ArrayOfNumbers.reduce((sum, num) => sum + num);
        const subs = ArrayOfNumbers.reduce((substraction, num) => substraction - num);
        const multi = ArrayOfNumbers.reduce((multiplicacion, num) => multiplicacion * num);
        const div = ArrayOfNumbers.reduce((division, num) => division / num);
        console.log(`The results are as follows; SUM: ${sum.toFixed(3)} SUBSTRACTION: ${subs.toFixed(3)} MULTIPLICATION: ${multi.toFixed(3)} DIVISION: ${div.toFixed(3)}`);
    }
}
Again()