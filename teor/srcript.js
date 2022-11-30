/*let n = " \t \n" - 2 ;
alert( n );
console.log((8 / 4) - (8 + (2 - 1)) + 7 * 2);

let date = new Date();
let time = date.getHours();

/*if (time < 10) {
  alert( "Доброе утро!" );
} else {
  alert( "Добрый день!" );
}*/

/*{(time < 10) ? alert( "Доброе утро!" ) : ( "Добрый день!" );}*/

/*if ("0") {
  alert( 'Привет' );
}*/
/*x = 6 ;
y = 3;
console.log(!(x == y));*/
/*let arr = ["a", "b"];
    
    arr.push(function() {
      alert( arr );
    })
    
    arr[2]();*/

/* let fruit = "pineapple";
 let slice1 = fruit.slice(-5);
 let slice2 = fruit.slice(0, -5);
 console.log(slice1);  
 console.log(slice2); */
/*let str = `настя`;
let cap = str.substring(0, 1).toUpperCase() + str.substring(1);
console.log(cap);*/
/*let day = new Date(2021, 0, 22, 22, 51, 0, 0);
console.log(day);*/
/*sec = () => {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let seconds = tomorrow - now; 
  return Math.round(seconds / 1000); 
  
}
sec ();*/
/*function myFuction(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(myFuction(0, 100));*/
/*describe("extractCurrencyValue", function() {

  it("возвращает для строки $120 число 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });


});*/
/*let now = new Date();
let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
let seconds = tomorrow - now; 
console.log( Math.round(seconds / 1000) );*/

/*function bike() {
  console.log(this.name)
}
var name = "ninja"
var obj1 = {name: "pomidor", bike: bike }
var obj2 = {name: "site", bike: bike}
bike()
obj1.bike()
obj2.bike()*/
/*class Person {
  constructor(name) {
    this.name=name
  
  }
}
const member = new Person("John")
console.log(typeof member)*/
const person = {
  name: "Valera",
  age: 23
}
let city = person.city
city= "Amsterdam"
console.log(person)
