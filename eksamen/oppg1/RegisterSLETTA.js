// Liste over stillinger
const stillinger = [
  "Rektor",      // index 0
  "Dekan",       // index 1
  "Vaktmester",  // index 2
  "Professor",   // index 3
  "Lektor"       // index 4
];

// Liste over kurs
const kurs = [
  "Matematikk",
  "Fysikk",
  "Kjemi",
  "Historie",
  "Litteratur",
  "Programmering",
  "Økonomi",
  "Biologi",
  "Pedagogikk",
  "Samfunnsfag"
];

// Oversikt over ansatte
const ansatte = [
  // Rektor (1)
  {
    navn: "Kari Hansen",
    stilling: 0,
    kontor: "A101",
    epost: "kari.hansen@skole.no",
    kursansvar: []
  },

  // Dekaner (2)
  {
    navn: "Ola Nilsen",
    stilling: 1,
    kontor: "B201",
    epost: "ola.nilsen@skole.no",
    kursansvar: []
  },
  {
    navn: "Anne Berg",
    stilling: 1,
    kontor: "B202",
    epost: "anne.berg@skole.no",
    kursansvar: []
  },

  // Vaktmestere (3)
  {
    navn: "Per Johansen",
    stilling: 2,
    kontor: "Vaktmesterbod",
    epost: "per.johansen@skole.no",
    kursansvar: []
  },
  {
    navn: "Lise Olsen",
    stilling: 2,
    kontor: "Vaktmesterbod",
    epost: "lise.olsen@skole.no",
    kursansvar: []
  },
  {
    navn: "Morten Dahl",
    stilling: 2,
    kontor: "Vaktmesterbod",
    epost: "morten.dahl@skole.no",
    kursansvar: []
  },

  // Professorer (5)
  {
    navn: "Eva Lund",
    stilling: 3,
    kontor: "C301",
    epost: "eva.lund@skole.no",
    kursansvar: [kurs[0], kurs[1]] // minst 2 kurs
  },
  {
    navn: "Jonas Lie",
    stilling: 3,
    kontor: "C302",
    epost: "jonas.lie@skole.no",
    kursansvar: [kurs[2]]
  },
  {
    navn: "Maria Solberg",
    stilling: 3,
    kontor: "C303",
    epost: "maria.solberg@skole.no",
    kursansvar: [kurs[3], kurs[4]] // minst 2 kurs
  },
  {
    navn: "Henrik Ibsen",
    stilling: 3,
    kontor: "C304",
    epost: "henrik.ibsen@skole.no",
    kursansvar: [kurs[5]]
  },
  {
    navn: "Sofie Kristiansen",
    stilling: 3,
    kontor: "C305",
    epost: "sofie.kristiansen@skole.no",
    kursansvar: [kurs[6]]
  },

  // Lektorer (10)
  {
    navn: "Thomas Berg",
    stilling: 4,
    kontor: "D401",
    epost: "thomas.berg@skole.no",
    kursansvar: [kurs[7], kurs[8]] // minst 2 kurs
  },
  {
    navn: "Camilla Andresen",
    stilling: 4,
    kontor: "D402",
    epost: "camilla.andresen@skole.no",
    kursansvar: [kurs[9]]
  },
  {
    navn: "Kristoffer Moe",
    stilling: 4,
    kontor: "D403",
    epost: "kristoffer.moe@skole.no",
    kursansvar: [kurs[2]]
  },
  {
    navn: "Linda Karlsen",
    stilling: 4,
    kontor: "D404",
    epost: "linda.karlsen@skole.no",
    kursansvar: [kurs[4]]
  },
  {
    navn: "Erik Svendsen",
    stilling: 4,
    kontor: "D405",
    epost: "erik.svendsen@skole.no",
    kursansvar: [kurs[1]]
  },
  {
    navn: "Nina Haugen",
    stilling: 4,
    kontor: "D406",
    epost: "nina.haugen@skole.no",
    kursansvar: [kurs[7]]
  },
  {
    navn: "Magnus Fredriksen",
    stilling: 4,
    kontor: "D407",
    epost: "magnus.fredriksen@skole.no",
    kursansvar: [kurs[3]]
  },
  {
    navn: "Silje Andersen",
    stilling: 4,
    kontor: "D408",
    epost: "silje.andersen@skole.no",
    kursansvar: [kurs[5]]
  },
  {
    navn: "Daniel Kristoffersen",
    stilling: 4,
    kontor: "D409",
    epost: "daniel.kristoffersen@skole.no",
    kursansvar: [kurs[8]]
  },
  {
    navn: "Helene Larsen",
    stilling: 4,
    kontor: "D410",
    epost: "helene.larsen@skole.no",
    kursansvar: [kurs[6], kurs[2]]
  }
];

// // Eksempel på utskrift: vise alle ansatte med stillingstekst
// ansatte.forEach(ansatt => {
//   console.log(
//     `${ansatt.navn} - ${stillinger[ansatt.stilling]} - ${ansatt.kontor} - ${ansatt.epost} - Kurs: ${ansatt.kursansvar.join(", ") || "Ingen"}`
//   );
// });
