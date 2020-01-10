var blackGamePiece;
    var wallObstacleRight;
    var wallObstacleBottom;
    var wallObstacleLeft;
    var wallObstacleTop;
    //  redGamePiece;
    
    function startGame() {
        myGameArea.start();
        blackGamePiece = new component(20, 20, "white", 115, 135);

        wallObstacleRight = new component(10, 300, "black", 690, 0 );
        wallObstacleBottom = new component(700, 10, "black", 0, 290 );
        wallObstacleLeft = new component (10, 300, "black", 0, 0);
        wallObstacleTop = new component (700, 10, "black", 0, 0);
    }
    
    var myGameArea = {
        canvas : document.createElement("canvas"),
        start : function() {
            this.canvas.width = 600;
            this.canvas.height = 300;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
            window.addEventListener('keydown', function (e) {
                myGameArea.keys = (myGameArea.keys || []);
                myGameArea.keys [e.keyCode] = true;
            })
            window.addEventListener('keyup', function (e) {
                myGameArea.keys [e.keyCode] = false;
            })
        },
        clear : function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        stop : function() {
            clearInterval(this.interval);
        }
    }
    
    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.update = function() { 
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        this.newPOS = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        // thiscrashWith = function(otherobj) {
        //     // var myleft = this.x;
        //     // var myright = this.x + (this.width);
        //     // var mytop = this.y;
        //     // var mybottom = this.y + (this.height);
        //     var otherleft = otherobj.x;
        //     var otherright = otherobj.x + (otherobj.width);
        //     var othertop = otherobj.y;
        //     var otherbottom = otherobj.y + (otherobj.height);
        //     var crash = true;
        //     if ((mybottom < othertop) ||
        //     (mytop > otherbottom) ||
        //     (myright < otherleft) ||
        //     (myleft > otherright)) {
        //         crash = false;
        //     }
        //     return crash;
        // }
    }
    
    function updateGameArea() {
        // if (blackGamePiece.crashWith(wallObstacleRight)) {
        //     myGameArea.stop();
        // } else {
        myGameArea.clear();
        wallObstacleRight.update();
        wallObstacleBottom.update();
        wallObstacleLeft.update();
        wallObstacleTop.update();
        blackGamePiece.speedX = 0;
        blackGamePiece.speedY = 0;
        if (myGameArea.keys && myGameArea.keys[37]) {blackGamePiece.speedX = -3; }
        if (myGameArea.keys && myGameArea.keys[39]) {blackGamePiece.speedX = 3; }
        if (myGameArea.keys && myGameArea.keys[38]) {blackGamePiece.speedY = -3; }
        if (myGameArea.keys && myGameArea.keys[40]) {blackGamePiece.speedY =3; }
        blackGamePiece.newPOS();
        blackGamePiece.update();
        }
    // }

    function moveup() {
        blackGamePiece.speedY -= 3;
    }

    function movedown() {
        blackGamePiece.speedY +=3;
    }

    function moveleft() {
        blackGamePiece.speedX -= 3;
    }

    function moveright() {
        blackGamePiece.speedX += 3;
    }

    function stopMove() {
        blackGamePiece.speedX = 0;
        blackGamePiece.speedY = 0;
    };

