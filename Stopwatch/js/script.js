var interval;
var view_menit = document.getElementById("menit");
var view_detik = document.getElementById("detik");
var view_miliDetik = document.getElementById("miliDetik");
var miliDetik = 0;
var detik = 0;
var menit = 0;
var nolDetik = "0";
var nolMenit = "0";
var nolMilSec = "0";
var no = 1;
var ul = document.getElementById("list-lap");
var list = document.getElementsByTagName("li");
document.getElementById("reset").classList.add("d-none");
document.getElementById("lap").classList.add("d-none");
document.getElementById("pause").classList.add("d-none");
document.getElementById("resume").classList.add("d-none");
function start() {
  miliDetik++;
  if (miliDetik > 99) {
    miliDetik = 0;
    detik++;
    if (detik > 59) {
      detik = 0;
      menit++;
    }
  }
  setZero();
  view_menit.innerHTML = nolMenit + menit + " : ";
  view_detik.innerHTML = nolDetik + detik + " : ";
  view_miliDetik.innerHTML = nolMilSec + miliDetik;
}

function setZero() {
  if (detik > 9) {
    nolDetik = "";
  } else {
    nolDetik = "0";
  }
  if (menit > 9) {
    nolMenit = "";
  } else {
    nolMenit = "0";
  }
  if (miliDetik > 9) {
    nolMilSec = "";
  } else {
    nolMilSec = "0";
  }
}
document.getElementById("start").addEventListener("click", function () {
  this.classList.add("d-none");
  document.getElementById("pause").classList.remove("d-none");
  document.getElementById("lap").classList.remove("d-none");
  document.getElementById("resume").classList.add("d-none");
  interval = setInterval(start,10);
});

document.getElementById("pause").addEventListener("click", function () {
  clearInterval(interval);
  this.classList.add("d-none");
  document.getElementById("resume").classList.remove("d-none");
  document.getElementById("lap").classList.add("d-none");
  document.getElementById("reset").classList.remove("d-none");
});

document.getElementById("resume").addEventListener("click", function () {
  this.classList.add("d-none");
  document.getElementById("lap").classList.remove("d-none");
  document.getElementById("pause").classList.remove("d-none");
  document.getElementById("reset").classList.add("d-none");
  interval = setInterval(start);
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("start").classList.remove("d-none");
  document.getElementById("resume").classList.add("d-none");
  ul.innerHTML = "";
  this.classList.add("d-none");
  document.getElementById("lap").classList.add("d-none");
  miliDetik = 0;
  detik = 0;
  menit = 0;
  view_menit.innerHTML = "0" + menit + " : ";
  view_detik.innerHTML = "0" + detik + " : ";
  view_miliDetik.innerHTML = "0" + miliDetik;

  clearInterval(interval);
});

document.getElementById("lap").addEventListener("click", function () {
  var li = document.createElement("li");

  var text = document.createTextNode(
    `${
      list.length + 1
    }| ${nolMenit}${menit} : ${nolDetik}${detik} : ${nolMilSec}${miliDetik}`
  );
  li.appendChild(text);
  ul.appendChild(li);
});
