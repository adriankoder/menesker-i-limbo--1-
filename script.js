const omArbeidet = document.getElementById("omArbeidet");
const meneskerILombo = document.getElementById("beskrivelse");
const VaneligeSpørsmål = document.getElementById("VaneligeSpørsmål");
const liDivID = document.getElementById("liDivID");
// const vaneligSpørsmålHvorfor = document.getElementById(
//   "vaneligSpørsmålHvorfor"
// );
omArbeidet.addEventListener("click", () => {
  meneskerILombo.innerHTML = alert("test");
});

VaneligeSpørsmål.addEventListener("click", () => {
  meneskerILombo.innerHTML =
    "<button id = vaneligSpærsmålHvorfor> hvorfor reiser de ikke bare tilbake?</button>";
  liDivID.style.display = "none";
  vaneligSpærsmålHvorfor.addEventListener("click", () => {
    meneskerILombo.innerHTML =
      "<ol id = SvarPåSpørsmålID><li>det er grove brudd på meneskerettigheter der jeg kommer fra</li><li>som kvinne mangler jeg rettigheter i hjemlandet mitt</li> <li>mitt land er styrt av diktatur og er i fare for å bli satt i fengsel og torturert</li><li>barna våres er født og oppvokst her</li><li>jeg vill tilbake, men landet tar ikke imot personer uten returavtaler, eller uten </li></ol>";
    liDivID.style.display = "none";
  });
});
