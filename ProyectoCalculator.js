const Start = () => {
    let results = [];
    a = (prompt("Insert first value"))
    if(isNaN(a)||a===null){
        console.log("You did not introduced a number. Please insert at least one number")
        Start()
    }else{
        b = (prompt("Insert second value"))
        if(isNaN(b)||b===null){
            results.push(a)
            console.log("The square root of your number is " + Math.sqrt(results[0]).toFixed(3))
        }else{
            const Calculator = () =>{
            
            a = +a
            b = +b   
            
            let sum = Number((a+b).toFixed(3));
            let subs = Number((a-b).toFixed(3));
            let multi = Number((a*b).toFixed(3));
            let div = Number((a/b).toFixed(3));
            
            results.push(sum,subs,multi,div);
            console.log("The results are as follows; sum: " +results[0] +" subs:"+ results[1] +" multi: "+ results[2]+" division: "+results[3]);
            }
            Calculator()        
        }
    }  
} 
Start()