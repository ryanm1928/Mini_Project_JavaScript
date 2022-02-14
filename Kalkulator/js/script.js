var layer = document.getElementById("layer");
var layer2 = document.getElementById("layer2");
var operator = ["*", "-", "+", "/"];
function getNumber(num) {
  layer.value.length + 1;
  layer.value += num;
  if (layer.value.length > 0) {
    ruleOperator();
  }
  Secondlayer();
}
function deleteNumber() {
  layer.value = layer.value.slice(0, -1);
  layer2.value = layer2.value.slice(0, -1);

  Secondlayer();
}
function clearLayer() {
  layer.value = "";
  layer2.value = "";
}
function count() {
  var str = layer.value;
  if (
    str.substr(-1) == "+" ||
    str.substr(-1) == "-" ||
    str.substr(-1) == "*" ||
    str.substr(-1) == "/"
  ) {
    layer.value = str.substr(0, str.length - 1);
  }
  if (layer.value == 0) {
    layer.value = "";
  } else {
    layer.value = eval(layer.value);
    layer2.value = "";
  }
}

function Secondlayer() {
  if (layer.value == "") {
    layer2.value.innerHTML = "";
  }
  if (layer.value.length > 0) {
    layer2.value = eval(layer.value);
  }
}

function ruleOperator() {
  var str = layer.value;
  var lastChar = str.substr(-2);
  var last = str.substr(-1);
  if (
    layer.value[0] == "+" ||
    layer.value[0] == "*" ||
    layer.value[0] == "-" ||
    layer.value[0] == "/"
  ) {
    layer.value = "";
    layer2.value = "";
  }
  if (layer.value[0] == "0" && layer.value[1] == "0") {
    layer.value = str.replace("00", "0");
  }
  if (str.indexOf("++") >= 0) {
    layer.value = str.replace("++", "+");
  }
  if (str.indexOf("--") >= 0) {
    layer.value = str.replace("--", "-");
  }
  if (str.indexOf("**") >= 0) {
    layer.value = str.replace("**", "*");
  }
  if (str.indexOf("//") >= 0) {
    layer.value = str.replace("//", "/");
  }
  if (str.indexOf("..") >= 0) {
    layer.value = str.replace("..", ".");
  }
  if (lastChar == "*-" || lastChar == "*+" || lastChar == "*/") {
    layer.value = layer.value.replace(lastChar, last);
  }
  if (lastChar == "-*" || lastChar == "-+" || lastChar == "-/") {
    layer.value = layer.value.replace(lastChar, last);
  }
  if (lastChar == "+*" || lastChar == "+-" || lastChar == "+/") {
    layer.value = layer.value.replace(lastChar, last);
  }
  if (lastChar == "/*" || lastChar == "/+" || lastChar == "/-") {
    layer.value = layer.value.replace(lastChar, last);
  }
}
