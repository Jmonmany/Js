const flights = [
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

const Hello = prompt("Wellcome! We will be happy to help you, please give us your name to start with.")
alert(Hello +" below you will find all the information on available flights")

let prices = []
let StopoverFlights = []
let lastFlights = flights.slice(5)
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

let Suma = prices.reduce((total, actual) => {
    return total + actual 
})    
console.log("The Average price of all flights is "+Suma/prices.length +"€")
console.log(`There are ${StopoverFlights.length} flights with stopover`)
console.log(`The last five flights of the day are: `)
for (destiny of lastFlights) { 
    console.log(destiny.to)
}