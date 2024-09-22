var buttons = document.querySelectorAll("button.drum");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", handleClick);
}

// Button
function handleClick() {
	var buttonInnerHTML = this.innerHTML;

	playSound(buttonInnerHTML);
	buttonAnim(buttonInnerHTML);
}

// Key
document.addEventListener("keydown", function (event) {
	playSound(event.key);
	buttonAnim(event.key);
});

function playSound(key) {
	switch (key) {
		case "w":
			var sound = new Audio("sounds/crash.mp3");
			sound.play();
			break;
		case "a":
			var sound = new Audio("sounds/kick-bass.mp3");
			sound.play();
			break;
		case "s":
			var sound = new Audio("sounds/snare.mp3");
			sound.play();
			break;
		case "d":
			var sound = new Audio("sounds/tom-1.mp3");
			sound.play();
			break;
		case "j":
			var sound = new Audio("sounds/tom-2.mp3");
			sound.play();
			break;
		case "k":
			var sound = new Audio("sounds/tom-3.mp3");
			sound.play();
			break;
		case "l":
			var sound = new Audio("sounds/tom-4.mp3");
			sound.play();
			break;
	}
}

function buttonAnim(key) {
	var button = document.querySelector("." + key);
	button.classList.add("pressed");

	setTimeout(function () {
		button.classList.remove("pressed");
	}, 100);
}
