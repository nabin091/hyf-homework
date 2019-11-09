// // getting into promises
// Lets use the github api to see what repositories different users have
//Fetch all the 3 classmates repositories at the same time using Promise.all.

const ul = document.querySelector("ul");
const button = document.getElementById("btn");

const benjamin="https://api.github.com/search/repositories?q=user:benna100"
const svetlana="https://api.github.com/search/repositories?q=user:cecastosic"
const ekamba="https://api.github.com/search/repositories?q=user:Ekamba"

function fetchUserName(url){
  fetch(url)
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    //console.log(data.items[0].owner.login);
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = data.items[0].owner.login + "'s repositories";
    const li2 = document.createElement("li");
    ul.appendChild(li2);
    li2.innerHTML = " URL: " + data.items[0].owner.url;
  })
  .catch(error => console.log(error));
}
button.addEventListener("click", function() {
  Promise.all([fetchUserName(benjamin), fetchUserName(svetlana), fetchUserName(ekamba)]);
});
