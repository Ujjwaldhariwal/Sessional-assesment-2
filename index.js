let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

searchIcon.onclick = () =>{
  searchIcon.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}

const blogger= new XMLHttpRequest();
blogger.onload = function() {
    const data = JSON.parse(this.responseText);
    console.log(data);
    var randomNumber = Math.floor(Math.random() * 10);
    const post1Id = document.getElementById('post1Id');
    const post1Name = document.getElementById('post1Name');
    const post1Username = document.getElementById('post1Username');

    post1Id.textContent=data[randomNumber].id;
    post1Name.textContent=data[randomNumber].name;
    post1Username.textContent=data[randomNumber].username;


    randomNumber = Math.floor(Math.random() * 10);
    const post2Id = document.getElementById('post2Id');
    const post2Name = document.getElementById('post2Name');
    const post2Username = document.getElementById('post2Username');

    post2Id.textContent=data[randomNumber].id;
    post2Name.textContent=data[randomNumber].name;
    post2Username.textContent=data[randomNumber].username;


    randomNumber = Math.floor(Math.random() * 10);
    const post3Id = document.getElementById('post3Id');
    const post3Name = document.getElementById('post3Name');
    const post3Username = document.getElementById('post3Username');

    post3Id.textContent=data[randomNumber].id;
    post3Name.textContent=data[randomNumber].name;
    post3Username.textContent=data[randomNumber].username;


}
blogger.onerror = function() {
    console.log("ERROR!!!!");
    length.log(this);
}

blogger.open("GET","https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11");
blogger.send();