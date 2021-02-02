class Ball {
  constructor() {
    this.ballRadius = 10;
    this.color = '#0095DD';
    this.x = 250;
    this.y = 160;
    this.dx = 2;
    this.dy = 2;
  }
  // this method draws the ball
  drawBall(ctx) {
    console.log(ctx);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  // this method changes the position of the ball on the canvas
  move(canvas) {
    // this is what moves the ball (literaly)
    console.log(canvas);
    if (this.x + this.dx > canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
      this.dx = -(this.dx);
    }
    if (this.y + this.dy > canvas.height - this.ballRadius || this.y + this.dy < this.ballRadius) {
      this.dy = -(this.dy);
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}
// CONSTANTS
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// INITIALIZATIONS
const ball1 = new Ball();
function renderObjectsOnCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball1.move(canvas);
  ball1.drawBall(ctx);
}
setInterval(renderObjectsOnCanvas, 10);

class Brick {
  constructor () {
    this.brickRowCount = 5;
    this.brickColumnCount = 3;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
  }

  //Draw Bricks
  drawBricks(ctx) {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        if (bricks[c][r].status == 1) {
          const brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
          const brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = '#c2699a';
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
}


class Paddle {
  constructor(canvas) {
    this.color = "red";
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this paddleX = (canvas.width - paddleWidth) /2;
    this.paddleY = canvas.height - paddleHeight;
  }

  drawPaddle(ctx) {
    console.log(ctx)
    ctx.rect(this.paddleX, this.paddleY, this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath()
  }

  move(canvas) {
    if (rightPressed) {
      this.paddleX += 7;
      if (this.paddleX + this.paddleWidth > canvas.width) {
        this.paddleX = canvas.width - this.paddleWidth;    
      }
      
    }
  }
}