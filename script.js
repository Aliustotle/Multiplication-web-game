const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)



const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
let score = JSON.parse(localStorage.getItem("score"));
const scoreEl = document.getElementById("score");



scoreEl.innerText = `score: ${score}`

questionEl.innerText = ` What is ${num1} multiplied by ${num2}?`

const correctAns = num1 * num2;

if (!score) {
    score = 0;       
}
if(score>=5){
    score = 0;
}

formEl.addEventListendeer("submit",()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score ++;
        updateLocalStorage()

    }else{
        score--;
        updateLocalStorage()

    }
});
function newFunction() {
    "  + multiply by ${num2}? ";
}

function updateLocalStorage() {
    localStorage.setItem("score",JSON.stringify(score))
    
}