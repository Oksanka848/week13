/*Сделайте простой калькулятор на 4 действия 
(сложение, вычитание, деление, умножение).
4 кнопки, по нажатию которые запрашиваются два числа
и выдается результат их вычисления,
соответствующий действию на кнопке.*/

window.onload = init;

function init() {
  let button = document.getElementById();
  button.onclick = ButtonClick;
}

function ButtonClick() {
  let n1 = +prompt("Введите первое число");
  let n2 = +prompt("Введите второе число");

  alert(`Результат вычисления = ${+n1 + +n2}`);
}

function ButtonClick2() {
  let n1 = +prompt("Введите первое число");
  let n2 = +prompt("Введите второе число");

  alert(`Результат вычисления = ${+n1 - +n2}`);
}

function ButtonClick3() {
  let n1 = +prompt("Введите первое число");
  let n2 = +prompt("Введите второе число");

  alert(`Результат вычисления = ${+n1 * +n2}`);
}

function ButtonClick4() {
  let n1 = +prompt("Введите первое число");
  let n2 = +prompt("Введите второе число");

  alert(`Результат вычисления = ${+n1 / +n2}`);
}
