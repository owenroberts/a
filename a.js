let fastLane, amp;
let scene = 'start';
let imgs = [], img, prevLevel, size = 0;

function preload() {
	fastLane = loadSound('fast-lane.mp3');
	imgs.push(loadImage('1.png'));
	imgs.push(loadImage('2.png'));
	imgs.push(loadImage('3.png'));
	imgs.push(loadImage('4.png'));
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	textFont('Monaco');
	textSize(80);
	textAlign(CENTER, CENTER);
	fastLane.playMode('restart');

	amp = new p5.Amplitude();

	img = imgs[2];
	imageMode(CENTER);
}

function mousePressed() {
	start();
}

function touchEnded() {
	start();
}

function start() {
	if (scene == 'start') {
		fastLane.play();
		scene = 'a';
	}
}

function draw() {
	background(255);
	if (scene == 'start') {
		text("Tap to start", 0, 0, width, height);
	} else {
		let level = amp.getLevel();
  		size = map(level, 0, 1, width/2, width * 2);
  		image(img, width/2, height/2, size, size);

  		if (prevLevel > level + 0.085) {
  			img = random(imgs);
  		}

  		prevLevel = level;
	}
}