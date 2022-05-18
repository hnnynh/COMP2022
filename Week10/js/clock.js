const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");      // num형 반환

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // clock.innerText = new Date().toLocaleTimeString();
}

getClock();
setInterval(getClock, 1000);        // 1초마다 실행






// setTimeout(sayHello, 5000);     // func, 시간ms   시간이 지난 후 1번 실행
// setInterval(sayHello, 5000);   // func, 시간ms  계속 반복함
// string'"".padStart(2, "0")       길이, 길이가 부족하면 "0"으로 채우기

// Date date = new Date();          date.~~ method 사용으로 날짜시간 부르기
/* console
new Date().getHours()
new Date().getMinutes()
new Date().getSeconds()
  */