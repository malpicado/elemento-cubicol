const steps = document.querySelectorAll(".step");
const stepText = document.querySelector("#step-text");

steps.forEach((step) =>{
    step.addEventListener("mouseover",()=>{
        stepText.innerHTML = step.dataset.content;
    });
});

