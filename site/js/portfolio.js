const avatar = document.getElementById("avatar");
avatar.onclick = function () {
   // if (avatar.src === "image/avatar.svg"){
    avatar.src = "image/avatar-bis.png";    
    //} else avatar.src = "image/avatar.svg";
  };

const backGround = document.querySelectorAll(".pink-bg"); 
const text = document.querySelectorAll(".pink-text");
const namePres = document.getElementById("name");  
const nameBut = document.querySelector(".changeButton"); 
const links = document.querySelectorAll(".link"); 
nameBut.onclick = function () {        
        let bg = prompt("Enter your color");        
        namePres.innerHTML = prompt("Enter your name"); 
        namePres.style.color = "#FFFFFF";
        backGround.forEach( element => element.style.backgroundColor = bg);
        text.forEach( element => element.style.color = bg);
        links.forEach( element => element.style.color = bg);
   };


devTools = document.getElementById("front-dev-tools");
const toolsBut = document.querySelector(".toolsButton");
toolsBut.onclick = function () {  
  devTools.children[0].innerHTML = "VSCode";
  devTools.children[1].innerHTML = "Github";
  devTools.children[2].innerHTML = "Terminal";
};
