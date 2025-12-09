// Liste over stillinger
const stillinger = [
  "Rektor",      // index 0
  "Dekan",       // index 1
  "Vaktmester",  // index 2
  "Professor",   // index 3
  "Lektor"       // index 4
];

// Liste over ansatte
const ansatte = [
  // Rektor
  {
    navn: "Kari Hansen",
    stilling: 0,
    kontor: "A101",
    epost: "kari.hansen@skole.no",
    kursansvar: []
  },

  // Dekaner
  {
    navn: "Per Olsen",
    stilling: 1,
    kontor: "B201",
    epost: "per.olsen@skole.no",
    kursansvar: []
  },
  {
    navn: "Anne Berg",
    stilling: 1,
    kontor: "B202",
    epost: "anne.berg@skole.no",
    kursansvar: []
  },

  // Vaktmestere
  {
    navn: "Jonas Nilsen",
    stilling: 2,
    kontor: "Vaktmesterbod 1",
    epost: "jonas.nilsen@skole.no",
    kursansvar: []
  },
  {
    navn: "Mona Lie",
    stilling: 2,
    kontor: "Vaktmesterbod 2",
    epost: "mona.lie@skole.no",
    kursansvar: []
  },
  {
    navn: "Erik Strand",
    stilling: 2,
    kontor: "Vaktmesterbod 3",
    epost: "erik.strand@skole.no",
    kursansvar: []
  },

  // Professorer
  {
    navn: "Lars Johansen",
    stilling: 3,
    kontor: "C301",
    epost: "lars.johansen@skole.no",
    kursansvar: ["Matematikk", "Statistikk"]
  },
  {
    navn: "Maria Kristoffersen",
    stilling: 3,
    kontor: "C302",
    epost: "maria.kristoffersen@skole.no",
    kursansvar: ["Fysikk"]
  },
  {
    navn: "Thomas Berg",
    stilling: 3,
    kontor: "C303",
    epost: "thomas.berg@skole.no",
    kursansvar: ["Kjemi", "Biokjemi"]
  },
  {
    navn: "Eva Lund",
    stilling: 3,
    kontor: "C304",
    epost: "eva.lund@skole.no",
    kursansvar: ["Informatikk"]
  },
  {
    navn: "Henrik Solberg",
    stilling: 3,
    kontor: "C305",
    epost: "henrik.solberg@skole.no",
    kursansvar: ["Økonomi", "Statistikk"]
  },

  // Lektorer
  {
    navn: "Sofie Dahl",
    stilling: 4,
    kontor: "D401",
    epost: "sofie.dahl@skole.no",
    kursansvar: ["Engelsk"]
  },
  {
    navn: "Anders Moe",
    stilling: 4,
    kontor: "D402",
    epost: "anders.moe@skole.no",
    kursansvar: ["Datasystemer", "Samfunnsfag"]
  },
  {
    navn: "Camilla Aas",
    stilling: 4,
    kontor: "D403",
    epost: "camilla.aas@skole.no",
    kursansvar: ["Geografi"]
  },
  {
    navn: "Kristian Haugen",
    stilling: 4,
    kontor: "D404",
    epost: "kristian.haugen@skole.no",
    kursansvar: ["Norsklitteratur"]
  },
  {
    navn: "Ida Sæther",
    stilling: 4,
    kontor: "D405",
    epost: "ida.saether@skole.no",
    kursansvar: ["Norsk", "Samfunnsfag"]
  },
  {
    navn: "Magnus Lie",
    stilling: 4,
    kontor: "D406",
    epost: "magnus.lie@skole.no",
    kursansvar: ["Kunst og håndverk"]
  },
  {
    navn: "Helene Fjeld",
    stilling: 4,
    kontor: "D407",
    epost: "helene.fjeld@skole.no",
    kursansvar: ["Musikk"]
  },
  {
    navn: "Ola Karlsen",
    stilling: 4,
    kontor: "D408",
    epost: "ola.karlsen@skole.no",
    kursansvar: ["Naturfag"]
  },
  {
    navn: "Marte Lunde",
    stilling: 4,
    kontor: "D409",
    epost: "marte.lunde@skole.no",
    kursansvar: ["Naturfag"]
  },
  {
    navn: "Petter Haug",
    stilling: 4,
    kontor: "D410",
    epost: "petter.haug@skole.no",
    kursansvar: ["Gym", "Helse og idrett"]
  }
];
