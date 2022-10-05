const questions = [
    {letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien")},
	{letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso")},
	{letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé")},
	{letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida")},
	{letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación")},
	{letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad")},
	{letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas")},
	{letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento")},
	{letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano")},
	{letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba")},
	{letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria")},
	{letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo")},
	{letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas")},
	{letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia")},
	{letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.")},
	{letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien")},
	{letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft")},
	{letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche")},
	{letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor")},
	{letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático")},
	{letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984")},
	{letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914")},
	{letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa")},
	{letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso")},
	{letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética")},
	{letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos")},
	{letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional")},
]

let currentPlayer = []
const ranking = []
const askName = () => {
    const playerName = prompt("What is your name?")
    if(!playerName){
        alert("Please enter your Name")
        return this.Name()
    }
    return playerName
}

const showRanking = () => {
    console.table(ranking)
}
class UserConstructor {
    id = ranking.length + 1
    Name;
    score;
    constructor(id, Name, score) {
        this.score = {
            successes: 0,
            failures: 0
        }
        this.Name = askName()
        this.description = function () {
            console.log("Player number " + this.id + ": " + this.Name + ", Correct answers: " + this.score.successes + " Incorrect answers: " + this.score.failures)
        }
        this.description()
    }
}
const newUser = () => {
    const user = new UserConstructor()
    currentPlayer.push(user)
}

const getWord = (PlayerName) => {
    const word = prompt(`${PlayerName} your answer is?`)
    if(!word){
        alert("Try again or pasapalabra")
        return getWord(PlayerName)
    }
    
    return word.toLowerCase()
}

const checkAnswer = (playerAnswer = "", question, player = {}) => {
    if( playerAnswer === "pasapalabra" ){
        return
    }
    if(!playerAnswer.includes(question.letter)){
        alert("Your word do not contain the required letter")
        question.status = -1
        player[0].score.failures ++
        return
    }
    if(playerAnswer !== question.answer){
        alert("Is not correct, sorry!")
        question.status = -1
        player[0].score.failures ++
        return
    }
    alert("Correct!")
    question.status = 1
    player[0].score.successes ++
    return 
}
const round = (player, questions) => {
    
    outer: for (let i = 0; i < questions.length; i++) {
        if(questions[i].status !== 0){
            continue
        }
        alert(questions[i].question)
        console.log(questions[i].question) 
        
        const word = getWord(player[0].Name)
        checkAnswer(word, questions[i], player) 
        
        if(!newTurn()){
            alert("Goodbye")
            break outer
        }
    }
}
const reset = (player = {}, questions = []) => {
    questions.map(element => element.status = 0)
    player.pop()
}
const newTurn = () => confirm("Continue?")
const newRound = () => confirm("Continue with the next Round?")

const game = (questions) => {
    newUser()
    
    const player = currentPlayer
    const Confirm = confirm(player[0].Name + " do you want to start?")
    
    if(!Confirm){
        return
    }
    do {
        round(player, questions)
        if(questions.every((element) => element.status !== 0)){
            alert("You have finished the game!")
            break
        }
    } while (newRound());
    
    player[0].description()
    ranking.push(player)
    reset(player, questions)
    showRanking()
}
game(questions)