
/** ESERCIZIO 01 
 * Crea un array composto da 10 automobili.
 * Ogni oggetto automobile avrà: marca, modello, alimentazione
 * (benzina, diesel, gpl, elettrico, metano)
*  Dividi le automobili in 3 array separati: 
 * nel primo array solo le auto a benzina, 
 * nel secondo solo le auto a diesel, 
 * nel terzo il resto delle auto. Infine stampa separatamente i 3 array. */



// const automobili = [
//     { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
//     { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
//     { marca: "Toyota", modello: "Yaris", alimentazione: "benzina" },
//     { marca: "Renault", modello: "Clio", alimentazione: "gpl" },
//     { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" },
//     { marca: "Opel", modello: "Corsa", alimentazione: "metano" },
//     { marca: "Ford", modello: "Focus", alimentazione: "diesel" },
//     { marca: "Hyundai", modello: "Kona", alimentazione: "elettrico" },
//     { marca: "Dacia", modello: "Duster", alimentazione: "gpl" },
//     { marca: "BMW", modello: "Serie 1", alimentazione: "benzina" }
// ];

// console.log(automobili);


// // METODO FOR EACH 
// const autoBenzina = [];
// const autoDiesel = [];
// const autoAltro = [];

// automobili.forEach((automobile) => {
// if(automobile.alimentazione === "benzina") {
//     autoBenzina.push(automobile) ; 
// }
// else if (automobile.alimentazione === "diesel") {
//     autoDiesel.push(automobile);
// }
// else {
//     autoAltro.push(automobile);
// }
// }); 

// console.log("Auto a benzina :" ,autoBenzina);
// console.log("Auto a diesel :",autoDiesel);
// console.log("Altre auto :",autoAltro); 


//METODO FILTER 
// const autoBenzina = automobili.filter((automobile) =>
//     automobile.alimentazione === "benzina");

// const autoDiesel = automobili.filter((automobile) =>
//     automobile.alimentazione === "diesel"
// );

// const autoAltro = automobili.filter((automobile) =>
//     automobile.alimentazione !== "diesel" &&
//     automobile.alimentazione !== "benzina"
// );


// console.log("Auto a benzina :" ,autoBenzina);
// console.log("Auto a diesel :",autoDiesel);
//  console.log("Altre auto :",autoAltro); 


//FOR CLASSICO

//  const autoBenzina = [];
//  const autoDiesel = [];
//  const autoAltro = [];

//  for (let i= 0; i< automobili.length; i++){
//     const auto = automobili[i]; 

//     if(auto.alimentazione ==="benzina") {
//         autoBenzina.push(auto);
//     }
//     else if (auto.alimentazione ==="diesel") {
//         autoDiesel.push(auto);
//     }
//     else {
//         autoAltro.push(auto); 
//     }
    
//  }

//   console.log("Auto a benzina :" ,autoBenzina);
// console.log("Auto a diesel :",autoDiesel);
// console.log("Altre auto :",autoAltro); 

/* ESERCIZIO 02
A partire da un array di stringhe, 
crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
[‘Pippo', 'Pluto, 'Paperino']; */

const nomi = [
  "mArIo",
  "LUCA",
  "giUseppe",
  "aNnA",
  "fRaNcEsCa",
  "vaLeNtInA",
  "roBeRtO",
  "sImOnE"
];

// METODO CON FOR EACH 
const nomiFormattati = []; 

nomi.forEach((nome) => {

const nomeMinuscolo = nome.toLowerCase();
const nomeFormattato = nomeMinuscolo[0].toUpperCase() + nomeMinuscolo.slice(1); //slice prende la stringa dal carattere in posizione 1 fino alla fine 
nomiFormattati.push(nomeFormattato);

});

console.log(nomiFormattati); 

//METODO CON MAP 

// const nomiFormattati = nomi.map((nome)=> {

// const nomeMinuscolo = nome.toLowerCase(); 
// return nomeMinuscolo[0].toUpperCase() + nomeMinuscolo.slice(1);

// });
// console.log(nomiFormattati); 