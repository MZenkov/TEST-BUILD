var btn = document.getElementById("btn").addEventListener("click",getPost);
var con=0;
var div=document.getElementById("cardDiv");

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        return res.json();
    })
    .then((post)=>{
        for (let index=0; index < 1; index++) {
            div.innerHTML+=`
            <tr>
                <td>${post[con].userId}</td>
                <td>${post[con].id}</td>
                <td>${post[con].title}</td>
                <td>${post[con].body}</td>
            </tr>
            `
            con=con+1;
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

var form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    var name = document.getElementById('name').value
    var body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
title:name,
body:body,
}),
headers: {
'Content-type': 'application/json; charset=UTF-8',
},
})
.then(function(response){
return response.json()
})
.then(function(data){
console.log(data)
var results = document.getElementById('results')
results.innerHTML = `<p>Пользователь ${data.title}</p>
<p>Оставил запись: ${data.body}</p>`
})
})