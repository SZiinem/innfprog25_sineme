// Funksjon 1: bruke index fra lista og returnere HTML om info om ansatte
const visAnsattHTML = (index) => {
  const ansatt = ansatte[index];
  if (!ansatt) return "<p>Ansatt finnes ikke</p>";

  return `
    <article class="ansatt">
      <h3>${ansatt.navn}</h3>
      <p><strong>Stilling:</strong> ${stillinger[ansatt.stilling]}</p>
      <p><strong>Kontor:</strong> ${ansatt.kontor}</p>
      <p><strong>Epost:</strong> ${ansatt.epost}</p>
      <p><strong>Kursansvar:</strong> ${ansatt.kursansvar.length > 0 ? ansatt.kursansvar.join(", ") : "Ingen"}</p>
    </article>
  `;
};

// Funksjon 2: liste ut alle ansatte, og bruke funksjon 1 for å strukturere HTML
const visAlleAnsatteHTML = () => {
  return ansatte.map((_, index) => visAnsattHTML(index)).join("\n");
};

// Funksjon 3: parameter som angir stilling og filtrere alle ansatte på innsendte parametere
function filtrerAnsatteEtterStilling(stillingIndex) {
  return ansatte.filter(ansatt => ansatt.stilling === stillingIndex);
}

// Funksjon 4: returnere alle kurs som tilbys og lage en liste med disse kursene
const hentAlleKurs = () => {
  let kursListe = [];

  // Gå gjennom alle ansatte
  for (let i = 0; i < ansatte.length; i++) {
    let kurs = ansatte[i].kursansvar;

    // Gå gjennom kursene til hver ansatt
    for (let j = 0; j < kurs.length; j++) {
      // Sjekk om kurset allerede finnes i kursListe
      if (!kursListe.includes(kurs[j])) {
        kursListe.push(kurs[j]);
      }
    }
  }
  return kursListe;
};


// Funksjon 5: filtrere ut alle undervisere (professor & lektor)
const hentUndervisere = () => {
  return ansatte.filter(ansatt => ansatt.stilling === 3 || ansatt.stilling === 4);
};

// Funksjon 6: filtrere ut alle i administrasjonen (rektor, dekan & vaktmestere)
const hentAdministrasjon = () => {
  return ansatte.filter(ansatt => ansatt.stilling === 0 || ansatt.stilling === 1 || ansatt.stilling === 2);
};

// Funksjon 7: parameter om info om 1 underviser og legge til i registeret
function leggTilUnderviser(nyUnderviser) {

  // OPPD3 - innholdet i funksjonen skrev jeg i oppg3.

  let nyAnsatt = {
    navn: document.getElementById("fornavn").value + " " + document.getElementById("etternavn").value,
    epost: document.getElementById("epost").value,
    kontor: document.getElementById("kontor").value,
    stilling: Number(document.getElementById("stilling").value),
    kursansvar: [document.getElementById("kurs").value]
  }

  ansatte.push(nyAnsatt);
}

// Funksjon 8: parameter som identifiserer 1 ansatt og sletter denne fra registeret
function slettAnsatt(ansattNavn) {
  
  // OPPD3 - innholdet i funksjonen skrev jeg i oppg3.

  ansatte.splice(ansattNavn, 1);
  utskrift.innerHTML = visAlleAnsatteAdminHTML();
  aktivereKnappene();
  }