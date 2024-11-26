const omArbeidet = document.getElementById("omArbeidet");
const meneskerILombo = document.getElementById("beskrivelse");
const VaneligeSpørsmål = document.getElementById("VaneligeSpørsmål");
const vaneligSpørsmålHvorfor = document.getElementById(
  "vaneligSpørsmålHvorfor"
);
const KontaktOss = document.getElementById("Kontakt");
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
