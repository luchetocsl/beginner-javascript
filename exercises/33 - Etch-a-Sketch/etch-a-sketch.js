//Get Elements
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakebutton = document.querySelector(".shake");

const MOVE_AMOUNT = 10;

//Set up our Canvas fro drawing
const width = canvas.width;
const height = canvas.height;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

console.log(x, y);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw  function
function draw({ key }) {
	hue += 10;

	console.log(key);
	//start the path
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

	// move our x and y values depending on what the user did

	switch (key) {
		case "ArrowUp":
			y -= MOVE_AMOUNT;
			break;
		case "ArrowRight":
			x += MOVE_AMOUNT;
			break;
		case "ArrowDown":
			y += MOVE_AMOUNT;
			break;
		case "ArrowLeft":
			x -= MOVE_AMOUNT;
			break;
		default:
			break;
	}

	ctx.lineTo(x, y);
	ctx.stroke();
}

function handleKey(e) {
	if (e.key.includes("Arrow")) {
		e.preventDefault();
		draw({ key: e.key });
	}

	console.log(e.key);
	console.log("handling key");
}

window.addEventListener("keydown", handleKey);

function clearCanvas() {
	canvas.classList.add("shake");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	canvas.addEventListener(
		"animationend",
		function () {
			canvas.classList.remove("shake");
		},
		{ once: true }
	);
}

shakebutton.addEventListener("click", clearCanvas);
