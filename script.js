const start = new Date(2021, 7, 30, 20, 13);

function r() {
  const end = new Date();

  let diff = end.getTime() - start.getTime();
  let diffsec = Math.floor(diff / 1000);

  document.getElementById("output").innerHTML = format(diffsec);
}
var t = setInterval(r, 1000);

function format(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    r();
  },
  false
);
