const cnv = document.querySelector(".canvas");
const ctx = cnv.getContext("2d");

const MOUSE = {
	pressed: false,
	coords: [0, 0],
}

document.addEventListener("mousemove", e => {
	onMouseMove(e);
});

document.addEventListener("mousedown", e => {
	onMouseDown();
});
document.addEventListener("mouseup", e => {
	onMouseUp();
});

document.addEventListener("touchmove", e => {
	onMouseMove(e);
});

document.addEventListener("touchstart", e => {
	onMouseDown();
});
document.addEventListener("touchend", e => {
	onMouseUp();
});

const cnvBoundingClientRect = cnv.getBoundingClientRect();
cnv.setAttribute('width', cnvBoundingClientRect.width);
cnv.setAttribute('height', cnvBoundingClientRect.height);


ctx.fillRect(0, 0, cnv.width, cnv.height);

function onMouseMove(e) {
	MOUSE.coords = [e.clientX, e.clientY];
	draw();
}
function onMouseDown() {
	ctx.beginPath();
	MOUSE.pressed = true;
}
function onMouseUp() {
	MOUSE.pressed = false;
}


function draw() {
	if (MOUSE.pressed) {
		const [x, y] = MOUSE.coords;
		console.log(x, y);
		const size = 5;
		ctx.lineWidth = size;
		ctx.strokeStyle = 'white';
		ctx.lineCap = 'round';
		ctx.lineTo(x, y);
		ctx.stroke();
		console.log(ctx)
	}
}