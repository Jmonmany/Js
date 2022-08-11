const Calculator = (a,b) => {
    let results = [];
    a = (prompt("Insert first value"))
    b = (prompt("Insert second value"))
    
    if(isNaN(Number(a))||isNaN(Number(b))){
        console.log("You can't do this operation!")
    }else if(a===null&&b===null){
        console.log("Please insert at least one number")
    }
    else if(a===null||b===null){
        results.push(a,b)
        let number = results.find(Number)
        console.log("The square root of your number is " + Math.sqrt(number))
    }else{
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
Calculator()