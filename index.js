let timer = 120;
let score = 0;
let hitValue = 0;

function GenerateBubble() {
  let bubbleDiv = "";

  for (let i = 1; i <= 152; i++) {
    let randomValue = Math.floor(Math.random() * 50);
    bubbleDiv += `<div>${randomValue}</div>`;
    document.querySelector(".bubble-bottom").innerHTML = bubbleDiv;
  }
}

function HitValue() {
  hitValue = Math.floor(Math.random() * 50);
  document.querySelector("#hit").textContent = hitValue;
}

function RunTimer() {
  document.querySelector("#timer").textContent = timer;

  setInterval(() => {
    if (timer >= 0) {
      document.querySelector("#timer").textContent = timer;
      timer--;
    } else {
      clearInterval(timer);
      document.querySelector(".bubble-bottom").innerHTML = "";
      document.querySelector(".bubble-bottom").innerHTML = `<h1 style="font-size: 4rem; color: #9478f9">Your Score :- ${score - 10}</h1>`;
    }
  }, 1000);
}

function GetScore(){
  document.querySelector("#score").textContent = score;
  score += 10;
}

document.querySelector(".bubble-bottom").addEventListener("click", (ele) =>{
  let HitDivValue = Number(ele.target.textContent);
  // let hit = document.querySelector("#hit").textContent
  if(HitDivValue === hitValue){
    GetScore();
    GenerateBubble();
    HitValue();
  }
})

GenerateBubble();
HitValue();
RunTimer();
GetScore();
