const omArbeidet = document.getElementById("omArbeidet");
const meneskerILombo = document.getElementById("beskrivelse");
const VaneligeSpørsmål = document.getElementById("VaneligeSpørsmål");
const liDivID = document.getElementById("liID");
const liID = document.getElementById("liID");
// const vaneligSpørsmålHvorfor = document.getElementById(
//   "vaneligSpørsmålHvorfor"
// );
hovedside.addEventListener("click", () => {
  beskrivelse.innerHTML =
    "<p> Mennesker i limbo Bergen er en organisaskjon for lengeværende avsylsøkere med endelig avslag. Vi kjemper for å bedre vår situasjon. Gruppen vår består av både kvinner og menn. Noen av oss har barn, andre kom til norge som mindreårige. Vi kommer fra forskjellige land og har ulik bakrunn. Det vi har felles, er at vi lever i Norge uten rett til:</p>";
});

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
