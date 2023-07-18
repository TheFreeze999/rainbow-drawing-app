const cnv = document.querySelector(".canvas");
const ctx = cnv.getContext("2d");

const MOUSE = {
	pressed: false,
	coords: [0, 0]
}

let firstMouseMoveDone = false;
document.addEventListener("mousemove", e => {
	/* if (!firstMouseMoveDone) {
		MOUSE.coords = [e.clientX, e.clientY];
		firstMouseMoveDone = true;
		return;
	}
	let [x, y] = MOUSE.coords;
	console.log({ x, y });
	console.log(MOUSE.coords)
	x = x + 0.01 * (e.clientX - x);
	y = y + 0.01 * (e.clientY - y);
	MOUSE.coords = [x, y]; */
	MOUSE.coords = [e.clientX, e.clientY];
});

document.addEventListener("mousedown", e => {
	MOUSE.pressed = true;
});
document.addEventListener("mouseup", e => {
	MOUSE.pressed = false;
});

const cnvBoundingClientRect = cnv.getBoundingClientRect();
cnv.setAttribute('width', cnvBoundingClientRect.width);
cnv.setAttribute('height', cnvBoundingClientRect.height);


ctx.fillRect(0, 0, cnv.width, cnv.height);

function draw() {
	if (MOUSE.pressed) {
		const [x, y] = MOUSE.coords;
		console.log(x, y);
		const size = 5;
		ctx.clearRect(x - size / 2, y - size / 2, size, size);
	}
	requestAnimationFrame(draw);
}

draw();