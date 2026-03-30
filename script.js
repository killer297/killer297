let hiddenNumber = "";
let countdown;

function startGame(){

document.getElementById("result").innerHTML="";
document.getElementById("inputs").innerHTML="";
document.getElementById("inputs").style.display="none";

let length = 6; // fixed 6 digits

hiddenNumber="";

for(let i=0;i<length;i++){
hiddenNumber+=Math.floor(Math.random()*10);
}

document.getElementById("number").innerText=hiddenNumber;

let time = 1;

document.getElementById("timer").innerText=time;

countdown=setInterval(()=>{

time--;

document.getElementById("timer").innerText=time;

if(time<=0){

clearInterval(countdown);

document.getElementById("timer").innerText="";
document.getElementById("number").innerText="";

showInputs();

}

},1000);

}

function showInputs(){

let inputDiv=document.getElementById("inputs");

inputDiv.style.display="block";

for(let i=0;i<6;i++){

let input=document.createElement("input");

input.maxLength=1;
input.className="box otp-input";

inputDiv.appendChild(input);

}

const inputs = document.querySelectorAll('.otp-input');

inputs.forEach((input, index) => {

input.addEventListener('input', () => {

if (input.value.length === 1 && index < inputs.length - 1) {
inputs[index + 1].focus();
}

/* Auto submit when all boxes filled */

let allFilled = true;

inputs.forEach(box => {
if(box.value === ""){
allFilled = false;
}
});

if(allFilled){
checkAnswer();
}

});

input.addEventListener('keydown', (e) => {

if (e.key === 'Backspace' && input.value === '' && index > 0) {
inputs[index - 1].focus();
}

});

});

}

function checkAnswer(){

let inputs=document.querySelectorAll(".otp-input");

let correct=0;

for(let i=0;i<inputs.length;i++){

if(inputs[i].value==hiddenNumber[i]){
correct++;
}

}

let percent=Math.round((correct/hiddenNumber.length)*100);

document.getElementById("result").innerHTML=
"Correct: "+correct+" / "+hiddenNumber.length+
"<br>Accuracy: "+percent+"%";

}
