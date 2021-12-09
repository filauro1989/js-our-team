const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// esplicito il container 
const teamContainer = document.querySelector('.team-container');

// creo funzione per inserire le card
function printCards(array, container) {
  // svuoto il container
  container.innerHTML = '';

  // ciclo l'array per selezionare i dati
  for (let i = 0; i < array.length; i++) {

    // assegno variabile obj ad ogni elemento dell'array
    const obj = array[i];

    // assegno variabile con dati da stampare
    const templateDiv = `
      <div class="team-card">
        <div class="card-image">
          <img
            src="img/${obj.image}"
            alt="${obj.name}"
          />
        </div>
        <div class="card-text">
          <h3>${obj.name}</h3>
          <p>${obj.role}</p>
        </div>
      </div>`;

    // stampo nel container i dati
    container.innerHTML += templateDiv;
  }
}

// richiamo la funzione
printCards(team, teamContainer);

// assegno variabili ad elementi del dom
let inputName = document.getElementById('name');
let inputRole = document.getElementById('role');
let inputButton = document.getElementById('addMemberButton');

// aggiungo event listener al button 
inputButton.addEventListener('click', function(){

  // prelevo i valori dai campi nome e ruolo
  let newName = inputName.value;
  let newRole = inputRole.value;

  // assegno variabile ai valori prelevati
  let obj = {
    name: newName,
    role: newRole,
    image: 'new-team-member-03.jpg',
  }

  // pusho i valori dentro l'array
  team.push(obj);

  // richiamo la funzione che pulisce il dom e lo ristampa con i nuovi dati
  printCards(team, teamContainer);

});