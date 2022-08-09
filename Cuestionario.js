const age = prompt("Ingresa tu edad")
let hobbies,username;

const getFullName = () => {
    let FullName = prompt("Ingresa tu nombre")
    if(FullName===""){
        FullName = "randomGuest"
    }
    return FullName;
}

const getUserHobbies = () => {
    let userHobbies = [];
    let hobby;
    do {
        hobby = prompt("ingresa tus Hobbies")
        if(hobby !== null){
            userHobbies.push(hobby);
        }
    } while (hobby !== null);
    return userHobbies
}

const ShowUserInfo = () => {
    console.log("Nombre: " + username);
    console.log("Edad: " + age)

    hobbies.forEach((hobby) => {
        console.log("Hobby: " + hobby)
    });
}

username = getFullName();
hobbies = getUserHobbies();

ShowUserInfo()