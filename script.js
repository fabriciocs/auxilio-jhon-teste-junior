/*let rick = ('{ "id": 1, "name": "Rick Sanchez","status": "Alive", "species": "Human","type": "","gender": "Male"}');
let personagenRick = JSON.parse(rick);

document.getElementById("container").innerHTML = personagenRick.name + ", " + personagenRick.status + ' - ' + personagenRick.species + '/' + personagenRick.gender*/

window.onload = () => {
    const container = document.querySelector('#container');
    let api = require('./characters.json');

    for(let x in api){
        const nome = document.createElement('p');
        const status = document.createElement('p');
        const specie = document.createElement('p');
        const genero = document.createElement('p');
        const origem = document.createElement('p');

        nome.innerText = api[x].name;
        status.innerText = api[x].status;
        specie.innerText = api[x].species;
        genero.innerText = api[x].gender;
        origem.innerText = api[x].origin.name;

        container.appendChild(nome);
        container.appendChild(status);
        container.appendChild(specie);
        container.appendChild(genero);
        container.appendChild(origem);
    }
}