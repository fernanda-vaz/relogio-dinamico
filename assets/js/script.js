const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function tempo() {
  let dataHoje = new Date();

  let hr = dataHoje.getHours();
  let min = dataHoje.getMinutes();
  let seg = dataHoje.getSeconds();

  if (hr < 10) {
    hr = "0" + hr;
  }
  horas.textContent = hr;

  if (min < 10) {
    min = "0" + min;
  }
  minutos.textContent = min;

  if (seg < 10) {
    seg = "0" + seg;
  }
  segundos.textContent = seg;
});
