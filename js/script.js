console.log('JS OK');

// DATI

// Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
// Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
// Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
// Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
// Scott Estrada |	Developer            |	scott-estrada-developer.jpg
// Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg


//* array con tutti i dati divisi in objects
const staff = [
    {
        name: "Wayne Barnett",
        profession: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        profession: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        profession: "Office Manager",
        photo: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        profession: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        profession: "Developer",
        photo: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        profession: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",
    },
];
// stampo array in console
console.table(staff);

// prendo la bacheca dal DOM
const showcase = document.getElementById('showcase');


// <div class="card bg-white">
//     <img src="img/FOTO" class="card-img-top" alt="NOME E COGNOME">
//     <div class="card-body">
//         <p class="card-text">NOME E COGNOME</p>
//         <p class="card-text">PROFESSIONE</p>
//     </div>
// </div>

// mi preparo il 'montaggio' dello showcase
let staffShowcase = '';
// monto lo showcase con un ciclo
for (let i = 0; i < staff.length; i++){
    const person = staff[i];
    staffShowcase +=   `<div class="card bg-white shadow rounded">
                            <img src="img/${person.photo}" class="card-img-top" alt="${person.name}"></img>
                            <div class="card-body">
                                <p class="card-text fw-semibold">${person.name}</p>
                                <p class="card-text fw-lighter">${person.profession}</p>
                            </div>
                        </div>`
}
//restituisco in pagina
showcase.innerHTML = staffShowcase;