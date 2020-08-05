var num1 = parseInt(prompt("Scrivi un numero"));
var num2 = parseInt(prompt("Scrivi un numero"));
if (isNaN(num1) || isNaN(num2)) {
  alert("Hai scritto qualcosa di errato");
} else if (num1 > num2) {
  document.getElementById('numMaggiore').innerHTML = num1;
} else if (num2 > num1) {
  document.getElementById('numMaggiore').innerHTML = num2;
} else {
  document.getElementById('numMaggiore').innerHTML = "I numeri sono uguali";
}
