//let button = getElementById("addButton");

//function handleButtonClick {
    //alert("Ваше имя?");


//button.onclick = handleButtonClick;
//alert(`Привет, ${age} !`)


//let name = prompt( "Ваше имя?" );

//console.log(`Привет, ${name} !`);

window.onload = init;

function init(){
    let button = document.getElementById("addButton")
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    let name = prompt( "Ваше имя?" );
    alert(`Привет, ${name} !`);}