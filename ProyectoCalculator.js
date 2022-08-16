const Calculator = (a,b) => {
    let results = [];
    a = (prompt("Insert first value"))
    if(a===null){
        console.log("Please insert at least one number")
        Calculator()
    }else if(isNaN(Number(a))){
        console.log("You can't do this operation!")
        Calculator()
    }else{
        let otherNumber = confirm("Would you like to insert numbers again?")
        if(otherNumber === true){
            const SecondNumber = () =>{
                b = (prompt("Insert second value"))
                if(b===null){
                    console.log("Please insert at least one number")
                    SecondNumber()
                }else if(isNaN(Number(b))){
                    console.log("You can't do this operation!")
                    SecondNumber()
                }
                else if(Number(a) !== null && Number(b)!== null){
                a = Number(a)
                b = Number(b)
                let sum = Number((a+b).toFixed(3));
                let subs = Number((a-b).toFixed(3));
                let multi = Number((a*b).toFixed(3));
                let div = Number((a/b).toFixed(3));
                results.push(sum,subs,multi,div);
                console.log(results)
                console.log("The results are as follows; sum: " +results[0] +" subs:"+ results[1] +" multi: "+ results[2]+" division: "+results[3]);
                }
            }
            SecondNumber()
        }else{
            results.push(a)
            console.log("The square root of your number is " + Math.sqrt(results[0]).toFixed(3))
            let StartAgain = confirm("Would you like to insert numbers again?")
            if(StartAgain === true){
                Calculator()
            }else{
                console.log("Thanks you, see you next time")
            }
        }
    }
}
Calculator()