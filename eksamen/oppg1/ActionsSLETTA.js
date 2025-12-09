// Funksjon 1: bruke index fra lista og returnere HTML om info om ansatte
function visAnsattHTML(index) {
    const ansatt = ansatte[index];
    if (!ansatt) return "<p>Ansatt ikke funnet</p>";

    //OPPD3 - disse to variablene "stillingNavn" og "kursHTML" la jeg til i oppg3 for å hente stilling og kursansvar fra listene "ansatte" og "kurs".
    const stillingNavn = stillinger[ansatt.stilling];
    const kursHTML = ansatt.kursansvar.length 
        ? `${ansatt.kursansvar.map(k => `${k}`).join(", ")}` 
        : "Ingen kursansvar.";

    return `
        <article class="ansatt">
            <h3>${ansatt.navn}</h3>
            <p><strong>Stilling:</strong> ${stillingNavn}</p>
            <p><strong>Kontor:</strong> ${ansatt.kontor}</p>
            <p><strong>E-post:</strong> ${ansatt.epost}</p>
            <p><strong>Kursansvar:</strong> ${kursHTML}</p>
        </article>
    `;
}


// Funksjon 2: liste ut alle ansatte, og bruke funksjon 1 for å strukturere HTML
function visAlleAnsatteHTML() {
  return ansatte.map((_, index) => visAnsattHTML(index)).join("\n");
  console.log(visAlleAnsatteHTML)
}

// Funksjon 3: parameter som angir stilling og filtrere alle ansatte på innsendte parametere
function filtrerAnsatteEtterStilling(stillingIndex) {
  return ansatte.filter(ansatt => ansatt.stilling === stillingIndex);
}

// Funksjon 4: returnere alle kurs som tilbys og lage en liste med disse kursene
function visAlleKursHTML() {
  return `
    <ul>
      ${kurs.map(k => `<li>${k}</li>`).join("\n")}
    </ul>
  `;
}

// Funksjon 5: filtrere ut alle undervisere (professor & lektor)
function hentUndervisere() {
  return ansatte.filter(ansatt => ansatt.stilling === 3 || ansatt.stilling === 4);
}

// Funksjon 6: filtrere ut alle i administrasjonen (rektor, dekan & vaktmestere)
function hentAdministrasjon() {
  return ansatte.filter(ansatt => ansatt.stilling === 0 || ansatt.stilling === 1 || ansatt.stilling === 2);
}

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

