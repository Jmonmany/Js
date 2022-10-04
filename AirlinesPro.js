let flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];

const name = prompt("Wellcome! We will be happy to help you, please give us your name to start with.")
alert(name +" below you will find all the information on available flights")

let prices = []
let stopoverFlights = []
let lastFlights = flights.slice(5)

//Declare a function that will display INFO and accumulate values

const showInfo = () =>{
    for (let i = 0; i < flights.length; i++) {
    const element = flights[i];
    prices.push(element.cost);
    
    if(element.scale){
        stopoverFlights.push(element.scale)
        element.scale = "has" 
    }else{
        element.scale = "hasn't"
    }
    console.log(`The flight number ${element.id} with destination: ${element.to}, departing from: ${element.from} has a cost of ${element.cost}€ and ${element.scale} a stopover.`)
    }
}
showInfo();

//Displays the average price of all flights

let sum = prices.reduce((total, current) => {
    return total + current 
})    
console.log("The Average price of all flights is "+sum/prices.length +"€")
console.log(`There are ${stopoverFlights.length} flights with stopover`)
console.log(`The last five flights of the day are: `)
for (destiny of lastFlights) { 
    console.log(destiny.to)
}

//User accessible function
const userAction = () => {
    console.log("Dear User, below you can filter the flights according to your budget.")
    const budget = +prompt("Let us know your budget and we will show you matching flights.")
    flights = flights.filter((flight) => flight.cost <= budget);
        console.log("The results of your search are shown below.")
        showInfo();
        let answer = confirm("Would yo like set another budget?")
        if(answer){
            userAction()
        }else{
            console.log("Thanks you, see you next time")
        }
}
//Function accessible by the Administrator
const adminAction = () => {
    
    const addFlight = () =>{
        
        const newFlight = {}
        console.log("Please; help us to add the new flight information")
        newFlight.id = flights.length
        newFlight.to = prompt("Where it flies to?")
        newFlight.from = prompt("Where does the flight leave from?")
        newFlight.cost = +prompt("How much will cost?")
        newFlight.scale = confirm("This flight will have a stopover?")
        flights.push(newFlight)
        showInfo()
        if(flights.length<=15){
            let answer = confirm("Would yo like to add more flights?")
            if(flights.length === 15){
                alert("I'm sorry; no more flights can be introduced")
                console.log("Thanks you, see you next time")
            }
            else if(answer){
                addFlight()
            }else{
                console.log("Thanks you, see you next time")
            }
        }
    }

    const deleteFlight = () =>{
        showInfo();
        const idToDelete = +prompt("Insert ID to delete");
        flights = flights.filter((flight) => flight.id !== idToDelete)
        
        if(flights.length>=0){
            let answer = confirm("Would yo like to delete more flights?")
            if(flights.length === 0){
                alert("I'm sorry; no more flights can be deleted")
                console.log("Thanks you, see you next time")
            }
            else if(answer){
                deleteFlight()
            }else{
                console.log("Thanks you, see you next time")
            }
        }
    }

    const action = prompt("As a Admin, would you like to create or delete a flight?")
    if(action.toLocaleLowerCase() === "create"){
        addFlight();
    }else if(action.toLocaleLowerCase() === "delete"){
        deleteFlight();
    }else{
        alert("Please enter a valid action: create/delete")
        adminAction()
    }
}

//Function that asks for the user's role

const adminOrUser = () => {
    let role = confirm("Do you want to continue as a Admin? if not please press Cancel");
    if(role){
        adminAction();
    }else{
        userAction()
    }
}
adminOrUser();