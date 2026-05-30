// HTML Elements
const answerBox = document.getElementsByClassName("answer-block");
const answerBoxText = document.querySelector(".answer-block > p")
const inputBox = document.querySelector("textarea");
const suspense_button = document.querySelector("#suspense");
const regular_button = document.querySelector("#regular");
const submit_button = document.querySelector("#submit-button");

// Variables
var decision_type = "";

function decisionController() {
    if (decision_type === "suspense" && inputBox.value) {

        let audio = new Audio(`./datasrc/sfx/suspenseWithpartyhorn.mp3`);
        audio.play();
        submit_button.disabled = true;
        answerBoxText.textContent = "Suspensing...";

        setTimeout(function () {
            decisionMaker("suspense");
            submit_button.disabled = false;
        }, 5400);

    } else if(decision_type === "regular") {

        decisionMaker();

    }
} 

suspense_button.addEventListener("click", () => {
    decision_type = "suspense";

    suspense_button.classList.add("blue-background"); 
    regular_button.classList.remove("blue-background");
});

regular_button.addEventListener("click", () => {
    decision_type = "regular";

    regular_button.classList.add("blue-background");
    suspense_button.classList.remove("blue-background");
});

function decisionMaker (type) {

    let options = inputBox.value.split(", ");
    let randomIndex = Math.floor(Math.random() * options.length);

    if (type == "suspense") {
        answerBoxText.textContent = `🎉${options[randomIndex].toUpperCase()}🎉`;
    } else {
        answerBoxText.textContent = options[randomIndex].toUpperCase();
    }

    options.splice(randomIndex, 1);
    console.log(options);
    var newOptions = options.join(", ");
    inputBox.value = newOptions;

}