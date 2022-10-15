window.onload = () => {
    init();
  };

init = () => {
    let button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}

    handleButtonClick = () => {
    let name = prompt( "Ваше имя?" );
    alert(`Привет, ${name} !`);}