const cnv = document.querySelector(".canvas");
const ctx = cnv.getContext("2d");

const MOUSE = {
	pressed: false,
	coords: [0, 0],
}

document.addEventListener("mousemove", e => {
	MOUSE.coords = [e.clientX, e.clientY];
	draw()
});

document.addEventListener("mousedown", e => {
	ctx.beginPath();
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
		ctx.lineWidth = size;
		ctx.strokeStyle = 'white';
		ctx.lineCap = 'round';
		ctx.lineTo(x, y);
		ctx.stroke();
		console.log(ctx)
	}
}