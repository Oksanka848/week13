/*let arr = ["a", "b"];
    
    arr.push(function() {
      alert( arr );
    })
    
    alert(arr[2]());*/
    fetch('https://api.github.com/users/Oksanka848').then(response => response.json())
    .then(user => {console.log(user)}).catch(error => {console.log(error)});
