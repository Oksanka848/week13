//Сделайте простой калькулятор на 4 действия (сложение, вычитание, деление, умножение). 
//4 кнопки, по нажатию которые запрашиваются два числа 
//и выдается результат их вычисления,
//соответствующий действию на кнопке.

window.onload = init;

function init(){
    let button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    let n1 = +prompt( "Введите первое число" );
    let n2 = +prompt( "Введите второе число" );
    
    alert(`${n1}`);
    alert(`${+n1 + +n2}`);
let op;
    function func() {
        // переменная для результата
      let result = +prompt( "Результат" );
      // получаем первое и второе число
      let n1 = Number(document.getElementById("n1").value);
      let n2 = Number(document.getElementById("n2").value);
      // смотрим, что было в переменной с действием, и действуем исходя из этого
      switch (op) {
        case '+':
          result = n1 + n2;
          break;
        case '-':
          result = n1 - n2;
          break;
        case '*':
          result = n1 * n2;
          break;
        case '/':
          result = n1 / n2;
          break;
      }
  
    }}