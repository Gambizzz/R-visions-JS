const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Titles list
console.log("Sors moi la liste des titres des livres du CDI");
let title = books.map((b) => {
  hash = {title: b.title};
  return hash;
});
console.log(title);

//Rented once ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let rentedOnce = books.map(b => b.rented >=1);
console.log(rentedOnce);

//Most rented book ?
console.log("Quel est le livre le plus emprunté ?");
let mostRented = books.reduce(function (a,b) {
  return a.rented > b.rented ? a : b;
});
console.log(mostRented);

//Least rented book ?
console.log("Quel est le livre le moins emprunté ?");
let leastRented = books.reduce(function (a,b) {
  return a.rented < b.rented ? a : b;
});
console.log(leastRented);

//Delete book with ID 133712
console.log("Supprime le livre avec l'ID 133712");
let bookDeleted = books.filter(function (b) {
  return b.id != 133712;
});
console.log(bookDeleted);