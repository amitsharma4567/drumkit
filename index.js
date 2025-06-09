var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

var tom1 = new Audio("./tom-1.mp3");
var tom2 = new Audio("./tom-2.mp3");
var tom3 = new Audio('./tom-3.mp3');
var tom4 = new Audio('./tom-4.mp3');
var snare = new Audio('./snare.mp3');
var crash = new Audio('./crash.mp3');
var kick = new Audio('./kick-bass.mp3');
function makeSound(key) {

    switch (key) {
        case "w":
            tom1.currentTime=0;
            tom1.play();
            break;

        case "a":
            tom2.currentTime=0;
            tom2.play();
            break;

        case "s":
            tom3.currentTime=0;
            tom3.play();
            break;

        case "d":
            tom4.currentTime=0;
            tom4.play();
            break;

        case "j":
            snare.currentTime=0;
            snare.play();
            break;

        case "k":
            crash.currentTime=0;
            crash.play();
            break;

        case "l":
            kick.currentTime=0;
            kick.play();
            break;


        default: console.log(key);

    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}


// gihtub button
document.getElementById("github").addEventListener("click", function() {
    window.open("https://github.com/amitsharma4567/drumkit", "_blank");
});
