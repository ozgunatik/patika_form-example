let form = document.querySelector("form");
let userName = document.getElementById("userName");
let userPoint = document.getElementById("userPoint");
let button = document.getElementById("button");
let userList = document.querySelector("ul");

button.addEventListener('click',function(e){
    e.preventDefault();
    let userPoints = document.createElement("li");
    userPoints.innerHTML = alertFunction("deneme","deneme123","success");
    userPoints.setAttribute("class","list-group-item");
    userList.appendChild(userPoints);
});


const alertFunction = (title, message, className="warning") =>  `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;


