window.onload = init;

function init(){
    let button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    let name = prompt( "Ваше имя?" );
    alert(`Привет, ${name} !`);}