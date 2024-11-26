const hovedside = document.getElementById("hovedside");
const omArbeidet = document.getElementById("omArbeidet");
const meneskerILombo = document.getElementById("beskrivelse");
const VaneligeSpørsmål = document.getElementById("VaneligeSpørsmål");
const vaneligSpørsmålHvorfor = document.getElementById(
  "vaneligSpørsmålHvorfor"
);
const KontaktOss = document.getElementById("Kontakt");

hovedside.addEventListener("click", () => {
  meneskerILombo.innerHTML =
    "<p> Mennesker i limbo Bergen er en organisaskjon for lengeværende avsylsøkere med endelig avslag. Vi kjemper for å bedre vår situasjon. Gruppen vår består av både kvinner og menn. Noen av oss har barn, andre kom til norge som mindreårige. Vi kommer fra forskjellige land og har ulik bakrunn. Det vi har felles, er at vi lever i Norge uten rett til: </p>";
  // "<p>Velkommen til hjemmesiden vår</p> <p>Her kan du lese om arbeidet vårt og hvordan du kan hjelpe</p> <p>Vi jobber for å hjelpe mennesker som har flyktet fra krig og forfølgelse</p>";
});
omArbeidet.addEventListener("click", () => {
  meneskerILombo.innerHTML = alert("test");
});

VaneligeSpørsmål.addEventListener("click", () => {
  meneskerILombo.innerHTML =
    "<button id = vaneligSpærsmålHvorfor> hvorfor reiser de ikke bare tilbake?</button>";
  vaneligSpærsmålHvorfor.addEventListener("click", () => {
    meneskerILombo.innerHTML =
      "<p>det er grove brudd på meneskerettigheter der jeg kommer fra</p>som kvinne mangler jeg rettigheter i hjemlandet mitt<p></p> <p>mitt land er styrt av diktatur og er i fare for å bli satt i fengsel og torturert</p>";
  });
});

KontaktOss.addEventListener("click", () => {
  meneskerILombo.innerHTML =
    "<p>kontakt oss på telefon 12345678 eller epost:</p> <a href='mailto<>@gmail.com'>exemple@gmail.com</a> <p> støtt oss på <a href='https://www.vipps.no/'>vipps</a> </p>";
});
