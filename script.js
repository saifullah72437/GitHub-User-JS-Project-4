const API_URL = "https://api.github.com/users/"
let main = document.querySelector("#main");
let card = document.createElement('div');

const inputBox = document.querySelector('#search-box');



let fetchData = async (username) =>{
let response = await fetch(API_URL+username);
let data = await response.json();
// console.log(data);
// main.innerHTML = '';

let card = document.createElement('div');
card.id = "card";
card.innerHTML = ` <div id="image">
<img
  id="img"
  src="${data.avatar_url}"
  alt=""
  height="150px"
/>
</div>
<div id="right-div">
<h2>${data.name}</h2>
<h3>${data.bio}</h3>
<div id="row1">
  <p>${data.followers}<strong> Followers</strong></p>
  <p>${data.following}<strong> Following</strong></p>
  <p>${data.public_repos}<strong> Repositories</strong></p>
</div>

</div>`

main.appendChild(card);
}

let repositoriesFunction = async (username) =>{
   let repositories =  document.querySelector('.repositories');
//    repositories.innerHTML = '';

   let repos = document.createElement('div');
   repos.id = 'repos';

   let response = await fetch(API_URL+username+"/repos");
   let data = await response.json();
//    console.log(data);

   data.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = `<a href="${element.html_url}" target="_blank">${element.name}</a>`
        repos.appendChild(li);
        
   });
   repositories.appendChild(repos)

   

   
}


inputBox.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){

        fetchData(this.value)
        repositoriesFunction(this.value)
        this.value = '';
    }
},false)



/**
 * <div id="repos">
  <li><a href="" target="_blank">repo1</a></li>
  <li><a href="" target="_blank">repo2</a></li>
  <li><a href="" target="_blank">repo3</a></li>
  <li><a href="" target="_blank">repo3</a></li>
  <li><a href="" target="_blank">repo3</a></li>
</div>
 */