// document.querySelector("button").addEventListener("click", function() {
//     alert("hello");
// });
let crash = new Audio('sounds/crash.mp3');
let kickBass = new Audio('sounds/kick-bass.mp3');
let snare = new Audio('sounds/snare.mp3');
let tom1 = new Audio('sounds/tom-1.mp3');
let tom2 = new Audio('sounds/tom-2.mp3');
let tom3 = new Audio('sounds/tom-3.mp3');
let tom4 = new Audio('sounds/tom-4.mp3');

let _numberOfButton = document.querySelectorAll(".drum").length;
for (let index = 0; index < _numberOfButton; index++) {

    document.querySelectorAll(".drum")[index].addEventListener("click", function() {
        // alert("hello");
        var keyPress = this.innerHTML;
        makeSound(keyPress);
        animation(keyPress);

    });

    document.addEventListener("keypress", function(event) {

        makeSound(event.key);
        // event.currentTime = 0;
        animation(event.key);
        console.log(event);

    });

    function makeSound(key) {
        switch (key) {
            case "f":

                tom1.play();
                tom1.currentTime = 0;

                break;
            case "a":
                tom2.play();
                tom2.currentTime = 0;
                break;
            case "s":
                tom3.play();
                tom3.currentTime = 0;

                break;
            case "d":
                tom4.play();
                tom4.currentTime = 0;

                break;
            case "j":
                snare.play();
                snare.currentTime = 0;
                break;
            case "k":
                crash.play();
                crash.currentTime = 0;

                break;
            case "l":

                kickBass.play();
                kickBass.currentTime = 0;

                break;

            default:
                console.log("press correct key");

                break;
        }

    }

}

function animation(_key) {
    var activeButton = document.querySelector("." + _key);
    activeButton.classList.add("pressed");
    setTimeout(
        function() {
            activeButton.classList.remove("pressed");
        }, 100
    )
}