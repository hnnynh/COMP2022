const loginForm = document.querySelector("#login-form");    //getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/*
const loginForm = document.querySelector("#login-form");    //getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

위 3줄을
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
으로도 대체 가능함
*/

function onLoginSubmit(event) {        // argument 공간 제공 (tomato)
    event.preventDefault();        // 기본적으로 새로고침되는 것을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);     // key:value
    paintGreetings(username);
    
    // input 안의 버튼 클릭 / type submit인 input 클릭 시 웹 새로고침
    /*
    if(username === "") {
        alert("Please write your name.");
    }
    else if(username.length > 15){
        alert("Your name is too long.");
    }
    */
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;           // 백틱! greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){     // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {      // show the greetings
    paintGreetings(savedUsername);
}




/* 
html body
- <a href="https://nomadcoders.co/">Go to Courses</a>

const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();         // 링크 클릭 후 넘어가는 기본 동작을 저지
    console.dir(event);
    alert("clicked!");
}
link.addEventListener("click", handleLinkClick);
*/