// alert("hi")
// 숫자 integer 텍스트 "abc"
console.log("abc");
console.log('efg');
console.log(12 + 3);

// const - 상수 값 바뀌지 않음 (업데이트 불가)
// let = 값 수정 가능, 새로운 것을 생성할 때 사용
// const 기본 -> 수정하면 let -> var은 never!
// var - 어디서든 수정 가능 (오래된 것)
const a = 10;
const b = 2;

let myName = "yoonho";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

myName = "uno";
console.log("NEw name: " + myName);

// Boolean
// null = nothing 
const amIFat = true;        
let something;  
console.log(amIFat);            // null
console.log(something);         // undefined (값 정의X)


// -> 배열
const dayOfWeek = ["mon", "tue", "wen", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "yh"];
console.log(dayOfWeek, nonsense);
console.log(dayOfWeek[2]);
// 0부터 인덱스 시작
dayOfWeek.push("sun");
console.log(dayOfWeek);


// 객체
const player = {
    name:"son",
    points: 7,
    fat: false,
    sayHi: function(otherPersonName){
        console.log("hi "+ otherPersonName + " nice to meet you")
    },
};
console.log(player);
console.log(player.name);
console.log(player[points]);
player.points = 47;     // 수정됨
player.points += 15;
console.log(player.points);
player.sayHi("Park");

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + "and I'm" + age);
}
sayHello("nico", 10);
sayHello("yh", 22);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);      
    // 값 안 넘기면 undefined
    // 숫자가 아니면 NaN (Not a number)
}
function divide(firstNumber, secondNumber){
    console.log(firstNumber, secondNumber);
}
plus(8, 60);
divide(80, 20);

/*
const calcultor = {
    add: function(a,b) {
    alert(a+b);
    },
    minus: function(a,b) {
    alert(a-b);
    },
    div: function(a,b) {
    alert(a/b);
    },
    multi: function(a,b) {
    alert(a*b);
    },
    power:function(a,b) {
    alert(a**b);
    },
    
};
 

calcultor.add(5,2);
calcultor.minus(10,2);
calcultor.div(20,2);
calcultor.multi(30,2);
calcultor.power(7,3);
*/ 
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);     // 98

// return 이후는 실행되지 않는다.
const calcultor = {
    add: function(a,b) {
    return a+b;
    },
    minus: function(a,b) {
    return a-b;
    },
    div: function(a,b) {
    return a/b;
    },
    multi: function(a,b) {
    return a*b;
    },
    power:function(a,b) {
    return a**b;
    },
  
};
const plusResult = calculator.plus(2, 3);       // 5
const minusResult = calculator.minus(plusResult, 10);   // -5
const timesResult = calculator.times(10, minusResult);      // -50
const divideResult = calcultor.divide(timesResult, plusResult);
const powerResult = calcultor.power(divideResult, minusResult);
