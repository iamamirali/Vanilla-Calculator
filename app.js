const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const division = document.getElementById("division");
const equal = document.getElementById("equal");
const times = document.getElementById("x");
const C = document.getElementById("C");
const sqroot = document.getElementById("sqrt");
const pi = document.getElementById("pi");
const dot = document.getElementById("dot");

let screen = document.getElementById("screen");

one.addEventListener("click", function () {
  return (screen.value += 1);
});
two.addEventListener("click", function () {
  return (screen.value += 2);
});
three.addEventListener("click", function () {
  return (screen.value += 3);
});
four.addEventListener("click", function () {
  return (screen.value += 4);
});
five.addEventListener("click", function () {
  return (screen.value += 5);
});
six.addEventListener("click", function () {
  return (screen.value += 6);
});
seven.addEventListener("click", function () {
  return (screen.value += 7);
});
eight.addEventListener("click", function () {
  return (screen.value += 8);
});
nine.addEventListener("click", function () {
  return (screen.value += 9);
});
zero.addEventListener("click", function () {
  return (screen.value += 0);
});

plus.addEventListener("click", function () {
  return (screen.value += "+");
});
minus.addEventListener("click", function () {
  return (screen.value += "-");
});
times.addEventListener("click", function () {
  return (screen.value += "*");
});
division.addEventListener("click", function () {
  return (screen.value += "/");
});
C.addEventListener("click", function () {
  return (screen.value = "");
});
sqroot.addEventListener("click", function () {
  return (screen.value = Math.sqrt(screen.value));
});
pi.addEventListener("click", function () {
  return (screen.value += Math.PI);
});
dot.addEventListener("click", function () {
  return (screen.value += ".");
});
equal.addEventListener("click", function () {
  return (screen.value = eval(screen.value));
});
