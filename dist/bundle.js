/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
eval("/* eslint-disable no-use-before-define */\n/* eslint-disable no-alert */\n/* eslint-disable eqeqeq */\n/* eslint-disable no-plusplus */\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\nconst ballRadius = 10;\nlet x = canvas.width / 2;\nlet y = canvas.height - 30;\nlet dx = 2;\nlet dy = -2;\nconst paddleHeight = 10;\nconst paddleWidth = 75;\nlet paddleX = (canvas.width - paddleWidth) / 2;\nlet rightPressed = false;\nlet leftPressed = false;\nconst brickRowCount = 5;\nconst brickColumnCount = 3;\nconst brickWidth = 75;\nconst brickHeight = 20;\nconst brickPadding = 10;\nconst brickOffsetTop = 30;\nconst brickOffsetLeft = 30;\nlet score = 0;\nlet lives = 3;\n\nconst bricks = [];\nfor (let c = 0; c < brickColumnCount; c++) {\n  bricks[c] = [];\n  for (let r = 0; r < brickRowCount; r++) {\n    bricks[c][r] = { x: 0, y: 0, status: 1 };\n  }\n}\n\ndocument.addEventListener('keydown', keyDownHandler, false);\ndocument.addEventListener('keyup', keyUpHandler, false);\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\n\nfunction keyDownHandler(e) {\n  if (e.key == 'Right' || e.key == 'ArrowRight') {\n    rightPressed = true;\n  } else if (e.key == 'Left' || e.key == 'ArrowLeft') {\n    leftPressed = true;\n  }\n}\n\nfunction keyUpHandler(e) {\n  if (e.key == 'Right' || e.key == 'ArrowRight') {\n    rightPressed = false;\n  } else if (e.key == 'Left' || e.key == 'ArrowLeft') {\n    leftPressed = false;\n  }\n}\n\nfunction mouseMoveHandler(e) {\n  const relativeX = e.clientX - canvas.offsetLeft;\n  if (relativeX > 0 && relativeX < canvas.width) {\n    paddleX = relativeX - paddleWidth / 2;\n  }\n}\nfunction collisionDetection() {\n  for (let c = 0; c < brickColumnCount; c++) {\n    for (let r = 0; r < brickRowCount; r++) {\n      const b = bricks[c][r];\n      if (b.status == 1) {\n        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {\n          dy = -dy;\n          b.status = 0;\n          score++;\n          if (score == brickRowCount * brickColumnCount) {\n            alert('Winner Winner Chicken Dinner!');\n            document.location.reload();\n          }\n        }\n      }\n    }\n  }\n}\n\nfunction drawBall() {\n  ctx.beginPath();\n  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);\n  ctx.fillStyle = '#fc289d';\n  ctx.fill();\n  ctx.closePath();\n}\nfunction drawPaddle() {\n  ctx.beginPath();\n  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);\n  ctx.fillStyle = '#42e3f5';\n  ctx.fill();\n  ctx.closePath();\n}\nfunction drawBricks() {\n  for (let c = 0; c < brickColumnCount; c++) {\n    for (let r = 0; r < brickRowCount; r++) {\n      if (bricks[c][r].status == 1) {\n        const brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;\n        const brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;\n        bricks[c][r].x = brickX;\n        bricks[c][r].y = brickY;\n        ctx.beginPath();\n        ctx.rect(brickX, brickY, brickWidth, brickHeight);\n        ctx.fillStyle = '#c2699a';\n        ctx.fill();\n        ctx.closePath();\n      }\n    }\n  }\n}\nfunction drawScore() {\n  ctx.font = '16px Arial';\n  ctx.fillStyle = '#0095DD';\n  ctx.fillText(`Score: ${score}`, 8, 20);\n}\nfunction drawLives() {\n  ctx.font = '16px Arial';\n  ctx.fillStyle = '#0095DD';\n  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);\n}\n\nfunction draw() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  drawBricks();\n  drawBall();\n  drawPaddle();\n  drawScore();\n  drawLives();\n  collisionDetection();\n\n  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {\n    dx = -dx;\n  }\n  if (y + dy < ballRadius) {\n    dy = -dy;\n  } else if (y + dy > canvas.height - ballRadius) {\n    if (x > paddleX && x < paddleX + paddleWidth) {\n      dy = -dy;\n    } else {\n      lives--;\n      if (!lives) {\n        alert('chang da world. my final message. GoodB ye.');\n        document.location.reload();\n      } else {\n        x = canvas.width / 2;\n        y = canvas.height - 30;\n        dx = 3;\n        dy = -3;\n        paddleX = (canvas.width - paddleWidth) / 2;\n      }\n    }\n  }\n\n  if (rightPressed && paddleX < canvas.width - paddleWidth) {\n    paddleX += 7;\n  } else if (leftPressed && paddleX > 0) {\n    paddleX -= 7;\n  }\n\n  x += dx;\n  y += dy;\n  requestAnimationFrame(draw);\n}\n\ndraw();\n\n\n//# sourceURL=webpack://breakout_tutorial/./src/script.js?");
/******/ })()
;