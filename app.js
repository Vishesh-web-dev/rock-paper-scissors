//score update and get from local storage
const scoreElm = document.querySelector(".score");
let score;
if (localStorage.getItem("score") == null) {
   score = 0;
   scoreElm.textContent = `${score}`;
}else{
  score = localStorage.getItem("score");
  scoreElm.textContent = `${score}`;
}

const rules = document.querySelector(".rules");
const ruleBtn = document.querySelector(".rule-btn");
const bgBlur = document.querySelector(".bg-blur");
const cross = document.querySelector(".cross");
const main = document.querySelector("main");
const wrap = document.querySelectorAll(".wrap");
const step2 = document.querySelector(".step-2");
const pickedWrap1 = document.querySelector(".picked-wrap-1");
const pickedWrap2 = document.querySelector(".picked-wrap-2");
const pickedIcon2 = document.querySelector(".picked-icon-2");
const youPicked = document.querySelector(".you-picked");
const homePicked = document.querySelector(".home-picked");
const outcome = document.querySelector(".outcome");
const winner = document.querySelector(".winner");
const playAgainBtn = document.querySelector(".play-again-btn");

function hiddenAdd() {
  rules.classList.add("hidden");
  bgBlur.classList.add("hidden");
}
function hiddenRemove() {
  rules.classList.remove("hidden");
  bgBlur.classList.remove("hidden");
}

ruleBtn.addEventListener("click", hiddenRemove);
cross.addEventListener("click", hiddenAdd);
bgBlur.addEventListener("click", hiddenAdd);
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !rules.classList.contains(".hidden")) {
    hiddenAdd();
  }
});

for (let i = 0; i < wrap.length; i++) {
  wrap[i].addEventListener("click",function(){
    const randomNumber = (Math.trunc(Math.random() * 3)) ;
    main.classList.add("hidden");
    step2.classList.remove("hidden");
    youPicked.src = `./images/icon-${i+1}.svg`;
    pickedWrap1.classList.add(`img-bg-${i+1}`);

    setTimeout(() => {
      pickedWrap2.classList.add("picked-wrap");
      pickedIcon2.classList.add("picked-icon");
      homePicked.src = `./images/icon-${randomNumber+1}.svg`;
      pickedWrap2.classList.add(`img-bg-${randomNumber+1}`);
    }, 1500);

    setTimeout(() => {
      if (i == randomNumber) {
        step2.classList.add("step-2-width");
        winner.textContent = "draw";
      }else if(i == 0 && randomNumber == 1){
        score--;
        localStorage.setItem("score",score);
        scoreElm.textContent = `${score}`;
        step2.classList.add("step-2-width");
        winner.textContent = "you lose";
      }else if(i == 0 && randomNumber == 2){
        score++;
        localStorage.setItem("score",score);
        scoreElm.textContent = `${score}`;
        step2.classList.add("step-2-width");
        winner.textContent = "you win";
      }else if(i == 1 && randomNumber == 2){
        score--;
        localStorage.setItem("score",score);
        scoreElm.textContent = `${score}`;
        step2.classList.add("step-2-width");
        winner.textContent = "you lose";
      }else if(i == 1 && randomNumber == 0){
        score++;
        localStorage.setItem("score",score);
        scoreElm.textContent = `${score}`;
        step2.classList.add("step-2-width");
        winner.textContent = "you win";
      }else if(i == 2 && randomNumber == 0){
        score--;
        localStorage.setItem("score",score);
        scoreElm.textContent = `${score}`;
        step2.classList.add("step-2-width");
        winner.textContent = "you lose";
      }else if(i == 2 && randomNumber == 1){
        score++;
        localStorage.setItem("score",score);
        scoreElm.textContent = `${score}`;
        step2.classList.add("step-2-width");
        winner.textContent = "you win";
      }
    }, 2500);
    
    setTimeout(() => {
      outcome.classList.remove("visibility");
    }, 3000);
  })
}

playAgainBtn.addEventListener("click",function(){
  main.classList.remove("hidden");
  step2.classList.add("hidden");
  youPicked.src = ``;
  pickedWrap1.classList.remove(`img-bg-${1}`);
  pickedWrap1.classList.remove(`img-bg-${2}`);
  pickedWrap1.classList.remove(`img-bg-${3}`);
  
  pickedWrap2.classList.remove("picked-wrap");
  pickedIcon2.classList.remove("picked-icon");
  homePicked.src = ``;
  pickedWrap2.classList.remove(`img-bg-${1}`);
  pickedWrap2.classList.remove(`img-bg-${2}`);
  pickedWrap2.classList.remove(`img-bg-${3}`);
  step2.classList.remove("step-2-width");

  outcome.classList.add("visibility");

})
