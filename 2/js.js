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
    let name = prompt( "Введите число" );
    alert(`Привет, ${name} !`);}

    {
        // переменная для результата
      let result;
      // получаем первое и второе число
      let num1 = Number(document.getElementById("num1").value);
      let num2 = Number(document.getElementById("num2").value);
      // смотрим, что было в переменной с действием, и действуем исходя из этого
      switch (op) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
      }
  
    }