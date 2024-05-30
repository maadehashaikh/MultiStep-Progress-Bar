let progress = document.getElementById("progress");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
const progressSteps = document.querySelectorAll(".progress-step .fa-solid");
// default step value !! 
let currentStep = 1;
const next = () => {
  currentStep++;
  refresh();
  console.log("I am next");
}
const prev =  ()  => {
  currentStep--;
  refresh();
  console.log("I am prev");
}

const refresh = () => {
  progressSteps.forEach((step , index) => {
     if(index < currentStep)  step.classList.add("active");
     else step.classList.remove("active");
    });
  }

