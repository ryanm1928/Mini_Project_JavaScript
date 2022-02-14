var input_min = document.getElementById("min");
var input_second = document.getElementById("second");
var input_hours = document.getElementById("hours");
var view_hours = document.getElementById("view_hours");
var view_min = document.getElementById("view_min");
var view_second = document.getElementById("view_second");
input_hours.value = 0;
input_min.value = 0;
input_second.value = 0;
var intervalTimer;

document.getElementById("reset").classList.add("d-none");

function start() {
  if (
    input_hours.value == "0" &&
    input_min.value == "0" &&
    input_second.value == "0"
  ) {
    alert("Masukan data waktu yang valid");
  } else if (
    input_hours.value == "" ||
    input_min.value == "" ||
    input_second.value == ""
  ) {
    alert("Data Tidak boleh kosong");
  } else if (input_min.value > 59 || input_second.value > 59) {
    alert("Data Menit dan detik Tidak Boleh Lebih Dari 60");
  } else {
    set();
  }
}
function set() {
  document.getElementById("btn_start").classList.add("d-none");
  document.getElementById("reset").classList.remove("d-none");
  input_hours.setAttribute("disabled", "true");
  input_min.setAttribute("disabled", "true");
  input_second.setAttribute("disabled", "true");
  input_hours.classList.add("disabled");
  intervalTimer = setInterval(() => {
    input_second.value--;
    if (
      input_min.value < 1 &&
      input_second.value < 1 &&
      input_hours.value < 1
    ) {
      clearInterval(intervalTimer);
      input_hours.value = 0;
      input_second.value = 0;
      input_min.value = 0;
      document.getElementById("reset").innerHTML = "Reset";
    }
    if (input_second.value < 0) {
      input_second.value = 59;
      input_min.value--;

      if (input_min.value < 0 && input_hours.value > 0) {
        input_min.value = 59;
        input_hours.value--;
      }
    }
    if (input_hours.value.length >= 3) {
      view_hours.innerHTML = "" + input_hours.value + " : ";
    }
    if (input_hours.value.length != 2 || input_hours.value == 0) {
      view_hours.innerHTML = "0" + input_hours.value + " : ";
    } else {
      view_hours.innerHTML = "" + input_hours.value + " : ";
    }
    if (input_min.value.length != 2 || input_min.value == 0) {
      view_min.innerHTML = "0" + input_min.value + " : ";
    } else {
      view_min.innerHTML = "" + input_min.value + " : ";
    }
    if (input_second.value.length == 2) {
      view_second.innerHTML = "" + input_second.value;
    } else {
      view_second.innerHTML = "0" + input_second.value;
    }
  }, 1000);
}
document.getElementById("reset").addEventListener("click", function reset() {
  input_hours.removeAttribute("disabled");
  input_min.removeAttribute("disabled");
  input_second.removeAttribute("disabled");
  document.getElementById("btn_start").classList.remove("d-none");
  this.classList.add("d-none");
  clearInterval(intervalTimer);
  view_hours.innerHTML = "00 : ";
  view_min.innerHTML = "00 : ";
  view_second.innerHTML = "00";
  input_hours.value = 0;
  input_min.value = 0;
  input_second.value = 0;
});

function hide() {
  var input_timer = document.getElementById("input_timer");
  var btn_hide = document.getElementById("btn_hide");
  input_timer.classList.toggle("hide");
  if (input_timer.classList.contains("hide")) {
    btn_hide.innerHTML = "Show Control";
  } else {
    btn_hide.innerHTML = "Hide";
  }
}
input_hours.addEventListener("keyup", () => {
  if (input_hours.value.length >= 3 && input_hours.value[0] == "0") {
    var str = input_hours.value.toString();

    input_hours.value = str.slice(1, 3);
  }
});
input_min.addEventListener("keyup", () => {
  if (input_min.value.length >= 3 && input_min.value[0] == "0") {
    var str = input_min.value.toString();

    input_min.value = str.slice(1, 3);
  }
});
input_second.addEventListener("keyup", () => {
  if (input_second.value.length >= 3 && input_second.value[0] == "0") {
    var str = input_second.value.toString();

    input_second.value = str.slice(1, 3);
  }
});
