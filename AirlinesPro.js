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

//Saludos!

const Name = prompt("Wellcome! We will be happy to help you, please give us your name to start with.")
alert(Name +" below you will find all the information on available flights")

let prices = []
let StopoverFlights = []
let lastFlights = flights.slice(5)

//Declaramos funcion que mostrara INFO y acumulara valores

const ShowInfo = () =>{
    for (let i = 0; i < flights.length; i++) {
    const element = flights[i];
    prices.push(element.cost);
    
    if(element.scale === true){
        StopoverFlights.push(element.scale)
        element.scale = "has" 
    }else{
        element.scale = "hasn't"
    }
    console.log(`The flight number ${element.id} with destination: ${element.to}, departing from: ${element.from} has a cost of ${element.cost}€ and ${element.scale} a stopover.`)
    
    }
}
ShowInfo();

//Muestra de resultados Aerolinea Basic

let Suma = prices.reduce((total, actual) => {
    return total + actual 
})    
console.log("The Average price of all flights is "+Suma/prices.length +"€")
console.log(`There are ${StopoverFlights.length} flights with stopover`)
console.log(`The last five flights of the day are: `)
for (destiny of lastFlights) { 
    console.log(destiny.to)
}

//Parte PRO
//Función accesible por parte del Usuario
const UserAction = () => {
    console.log("Dear User, below you can filter the flights according to your budget.")
    const budget = +prompt("let us know your budget and we will show you matching flights.")
    flights = flights.filter((flight) => flight.cost <= budget);
        console.log("The results of your search are shown below.")
        ShowInfo();
        let Answer = confirm("Would yo like set another budget?")
        if(Answer === true){
            UserAction()
        }else{
            console.log("Thanks you, see you next time")
        }
}
//Función accesible por parte del Administrador
const AdminAction = () => {
    
    const Addflight = () =>{
        
        const NewFlight = {}
        console.log("Please; help us to add the new flight information")
        NewFlight.id = flights.length
        NewFlight.to = prompt("where it flies to?")
        NewFlight.from = prompt("where does the flight leave from?")
        NewFlight.cost = +prompt("How much will cost?")
        NewFlight.scale = confirm("This flight will have a stopover?")
        flights.push(NewFlight)
        ShowInfo()
        if(flights.length<=15){
            let Answer = confirm("Would yo like to add more flights?")
            if(flights.length === 15){
                alert("I'm sorry; no more flights can be introduced")
                console.log("Thanks you, see you next time")
            }
            else if(Answer === true){
                Addflight()
            }else{
                console.log("Thanks you, see you next time")
            }
        }
    }

    const DeleteFlight = () =>{
        ShowInfo();
        const IdToDelete = +prompt("insert ID to delete");
        flights = flights.filter((flight) => flight.id !== IdToDelete)
        ShowInfo();
        if(flights.length>=0){
            let Answer = confirm("Would yo like to delete more flights?")
            if(flights.length === 0){
                alert("I'm sorry; no more flights can be deleted")
                console.log("Thanks you, see you next time")
            }
            else if(Answer === true){
                DeleteFlight()
            }else{
                console.log("Thanks you, see you next time")
            }
        }
    }

    const action = prompt("As a Admin, would you like to create or delete a flight?")
    if(action.toLocaleLowerCase() === "create"){
        Addflight();
    }else if(action.toLocaleLowerCase() === "delete"){
        DeleteFlight();
    }else{
        alert("Please enter a valid action: create/delete")
        AdminAction()
    }
}

//Función pregunta Aerolinea Pro

const AdminOrUser = () => {
    let Role = confirm("Do you want to continue as a Admin? if not please press Cancel");
    if(Role === true){
        AdminAction();
    }else{
        UserAction()
    }
}
AdminOrUser();