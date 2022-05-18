const age1 = prompt("How old are you?");     //prompt는 js를 멈춤+오래된 방법
console.log(age1);
console.log(typeof age1);        // value type 확인
console.log(typeof parseInt(age1));

const age2 = parseInt(prompt("How old are you?"));
console.log(age2);
console.log(isNaN(age2));       // 숫자가 아니면 true (Not a Number)

if(isNaN(age2) || age < 0){
    console.log("Please Write a real positive number");
}
else if(age2 <18) {
    console.log("You are too young.");
}
else if(age2 >= 18 && age2 <= 50) {
    console.log("You can drink.");
}
else if(age2 > 50 && age2 <= 80) {
    console.log("You should exercise.");
}
else if(age2 === 100){
    console.log("Wow you are wise");
}
else if(age2 > 80){
    console.log("You can do whatever you want.");
}

// if((a&&b)||(c&&d))   { }

console.dir(document);      // document 객체의 일종
console.lot(document.title);    // html title (Momentum)
document.title = "Hello From JS";       // console에서도 가능
document.getElementById("title");       // -> id가 title인 h1 태그 반환

const title = document.getElementById("title");
console.dir(title);     // h1 태그에 대한 정보
title.innerText = "Got you!";       //id가 title인 태그의 내부가 Got you!로 바뀜

console.log(title.id);
console.log(title.className);

// 똑같은 <h1 id="title" class="hello">Grab me!</h1>가 5개면 
// getElementByID("title") 에러!!

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

//const title1 = document.getElementsByTagName("h3"); //array로 반환됨
const title1 = document.querySelector(".hello h3");     // CSS selector 검색 -> tag name
console.log(title1);        // 첫번째 1개만 반환

const title2 = document.querySelectorAll(".hello h3");
//querySelectorAll(".hello h3:first-child");        첫번째만 반환
console.log(title2);

//querySelector 에서는 #hello   .hello 처럼 id, class 명시
const title3 = document.querySelector("#hello h3");     // id# class.
title3.innerText = "hi";
console.log(title3);
console.dir(title3);    // 내부 element 확인
title3.style.color = "blue";        // JS에서 style 변경 가능
 
const title4 = document.querySelector("div.hello:first-child h3");
/*
function handleTitleClick(){
    title4.style.color = "blue"; 
}

function handleMouseEvent(){
    title4.innerText = "mouse is here!";
}

function handleMouseLeave(){
    title4.innerText = "mouse is gone!";
}

function handelWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("All Good!");
}

title4.onclick = handleTitleClick;       // 2가지 방법 모두 가능 
title4.addEventListener("mouseenter", handleMouseEnter);
title4.addEventListener("mouseleave", handleMouseEnter);        // .removeEventListener로 제거 가능
//handle..() 이 아닌 이유: 당장 실행XX click할 때 function만 넘겨주고 JS가 실행
// tag이름 html element mdn 검색 / console.dir(tag명) list중 onabort 밑에서 eventlistener 찾기

window.addEventListener("resize", handelWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.handleWindowOffline("offline", handleWindowOffline);
window.handleWindowOnline("online", handleWindowOnline);
*/

function handleTitleClick(){
    /* 1. css로 옮기기
    const currentColor = title4.style.color;
    let newColor;
    if(currentColor === blue){
        newColor = "tomato"; 
    }
    else{
        newColor = "blue";
    }
    title4.style.color = newColor;
    */

    /* 2.
    const clickedClass= "active";
    if(h3.classList.contains(clickedClass)){
        h3.classList.remove(clickedClass);
    }
    else{
        h3.classList.add(clickedClass);
    }
    */
   
    h3.classList.toggle("active");
}
h3.addEventListener("click", handleTitleClick);