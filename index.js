/* 	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/
const cardSlider = document.querySelector("#cardContainer");

const team = [
  (wayne = {
    name: "Wayne Barnett",
    role: "Founder & ceo",
    photoId: "./img/wayne-barnett-founder-ceo.jpg",
  }),
  (angela = {
    name: "Angela Carol",
    role: "Chief Editor",
    photoId: "./img/angela-caroll-chief-editor.jpg",
  }),
];

//crea una card
counter = -1;
document.querySelector("#debug").addEventListener("click", () => {
  counter++;
  generateCard(team[counter].name, team[counter].photoId, team[counter].role);
});

function generateCard(name, photoId, role) {
  let card = document.createElement("div");
  card.classList.add("col-8", "col-md-4", "col-lg-2", "m-1", "p-0", "card");

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.innerHTML = name;

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "p-1");

  let cardPhoto = document.createElement("img");
  cardPhoto.setAttribute("src", photoId);
  cardPhoto.classList.add("w-100");
  cardBody.appendChild(cardPhoto);

  let cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");
  cardFooter.innerHTML = role;

  cardSlider.appendChild(card);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);
}
