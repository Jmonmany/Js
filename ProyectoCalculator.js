const start = () => {
    
    let a = (prompt("Insert first value"))
        if(!a){
            console.log("You did not introduced a number. Please insert at least one number")
            alert("You did not introduced a number. Please insert at least one number")
            start()
        }
    a = +a

    let b = (prompt("Insert second value"))

        if(!b){
            console.log("The square root of your first number is " + Math.sqrt(a).toFixed(3))
            return
        }
        b = +b   
            
        let sum = Number((a+b).toFixed(3));
        let subs = Number((a-b).toFixed(3));
        let multi = Number((a*b).toFixed(3));
        let div = Number((a/b).toFixed(3));
            
        console.log("The results are as follows; sum: " +sum +" subs:"+ subs +" multi: "+ multi+" division: "+div);   
     
} 
start()