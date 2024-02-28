var answerBox = document.getElementsByClassName("answer-block");
var answerBoxText = document.querySelector(".answer-block > p")
var inputBox = document.querySelector("textarea");
var suspenseBtn = document.querySelector("#suspense");
var regularBtn = document.querySelector("#regular");
var submitBtn = document.querySelector("button");

function decisionController() {
    if (suspenseBtn.checked && inputBox.value) {

        var audio = new Audio(`./datasrc/sfx/suspenseWithpartyhorn.mp3`);
        audio.play();
        submitBtn.disabled = true;
        answerBoxText.textContent = "Suspensing...";

        setTimeout(function () {
            decisionMaker("suspense");
            submitBtn.disabled = false;
        }, 5400);

    } else if(regularBtn.checked) {

        decisionMaker();

    }
} 

function decisionMaker (type) {

    var options = inputBox.value.split(", ");
    var randomIndex = Math.floor(Math.random() * options.length);

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