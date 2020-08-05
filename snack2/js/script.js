var par1 = prompt("Inserisci una parola");
var par2 = prompt("Inserisci una parola");
if (par1.length > par2.length) {
  document.getElementById('parLunga').innerHTML = par1;
} else if (par2.length > par1.length) {
  document.getElementById('parLunga').innerHTML = par2;
}else {
  document.getElementById('parLunga').innerHTML = "Le parole hanno la stessa lunghezza";
}
