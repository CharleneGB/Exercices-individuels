let nom = prompt("👋 Bonjour, comment t'appelles-tu ?");
let prenom = `👋Bonjour ${nom}`;

document.body.innerHTML += `<h2>👋Bonjour ${nom}</h2>`;

let questionBirthYear = prompt("En quelle année es-tu née ?");
let birthYear = (2024 - questionBirthYear);
document.body.innerHTML += `<h3>Vous avez ${birthYear} ans </h3>`;

const askName(nom) => {
    let prenom = `👋Bonjour ${nom}`;
    return document.body.innerHTML += `<h2>👋Bonjour ${nom}</h2>`;
}

const askBirthYear = (birthYear) =>{
    let birthYear = (2024 - questionBirthYear);
    return document.body.innerHTML += `<h3>Vous avez ${birthYear} ans </h3>`;
}
