const hovedside = document.getElementById("hovedside");
const omArbeidet = document.getElementById("omArbeidet");
const meneskerILombo = document.getElementById("beskrivelse");
const VaneligeSpørsmål = document.getElementById("VaneligeSpørsmål");
const liID = document.getElementById("liID");
const KontaktOss = document.getElementById("Kontakt");
let bildeSomByttes = document.getElementById("president");

if (hovedside) {
  hovedside.addEventListener("click", () => {
    bildeSomByttes.src = "./img/image copy.png";
    bildeSomByttes.alt = "presidenten";
    meneskerILombo.innerHTML =
      "<p>Mennesker i limbo Bergen er en organisasjon for lengeværende asylsøkere med endelig avslag. Vi kjemper for å bedre vår situasjon. Gruppen vår består av både kvinner og menn. Noen av oss har barn, andre kom til Norge som mindreårige. Vi kommer fra forskjellige land og har ulik bakgrunn. Det vi har felles, er at vi lever i Norge uten rett til:</p>";
    liID.style.display = "block";
  });
}

omArbeidet.addEventListener("click", () => {
  meneskerILombo.innerHTML = "Dette er en test";
  liID.style.display = "none"; // Skjul liID
  bildeSomByttes.src = "./img/stand 19 okt 24 Torgallmenning.jpg";
  bildeSomByttes.alt = "stand 19 okt 24 Torgallmenning";
});

VaneligeSpørsmål.addEventListener("click", () => {
  meneskerILombo.innerHTML =
    "<button id='vaneligSpørsmålHvorfor'>Hvorfor reiser de ikke bare tilbake?</button>";
  const vaneligSpørsmålHvorfor = document.getElementById(
    "vaneligSpørsmålHvorfor"
  );
  liID.style.display = "none"; // Skjul liID

  vaneligSpørsmålHvorfor.addEventListener("click", () => {
    meneskerILombo.innerHTML =
      "<p>Det er grove brudd på menneskerettigheter der jeg kommer fra.</p>" +
      "<p>Som kvinne mangler jeg rettigheter i hjemlandet mitt.</p>" +
      "<p>Mitt land er styrt av diktatur, og jeg er i fare for å bli satt i fengsel og torturert.</p>";
  });
});

KontaktOss.addEventListener("click", () => {
  meneskerILombo.innerHTML =
    "<p>Kontakt oss på telefon: <a href='tel:+4790038238233'>90038238233</a></p>" +
    "<p>Eller e-post: <a href='ketil_hindenes@hotmail.com'>ketil_hindenes@hotmail.com</a></p>" +
    "<p>Støtt oss på <a href='https://www.vipps.no/#647997'>Vipps </a></p>";
  liID.style.display = "none"; // Skjul liID
});
