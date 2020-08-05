var num = parseInt(prompt("Inserisci il numero"));
if (isNaN(num)) {
  alert("Qualcosa é andato storto");
} else if (num % 2 == 0) {
  document.getElementById('num').innerHTML = num;
} else {
  document.getElementById('num').innerHTML = num + 1;
}
