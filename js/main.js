enchant();

window.onload = function(){
    var speed = 4.000;
    var score = 0;
    var count = 0;
    var game = new Core(320, 320);
    game.fps = 30;
    game.preload("assets/bomb.png");
    game.onload = function(){

        var score_sign = new Label();
        score_sign.text = String(score);
        game.rootScene.addChild(score_sign);
        score_sign.color ="white";
        score_sign.font = "30px Monospace";

        score_sign.x = 0;
        score_sign.y = 0;

        var bomb1 = new Sprite(32, 32);
        bomb1.image = game.assets["assets/bomb.png"];
        bomb1.x = Math.random() * 290;
        bomb1.y = 0;
        bomb1.frame = 5;
        game.rootScene.addChild(bomb1);

        bomb1.addEventListener("enterframe", function(){
           if(count == 3) {
             speed = 0;
             score_sign.text = "Game Over";
             game.rootScene.removeChild(bomb1);
             game.rootScene.removeChild(bomb2);
             game.rootScene.removeChild(bomb3);

             location.reload();
           };
           if(this.y < 290) {
            this.y  += speed;
            }else{
             this.y  = 0;
             this.x = Math.random() * 290;
             count ++;
            }

        });


        bomb1.addEventListener("touchstart", function(){
             this.y = 0;
             this.x = Math.random() * 290;
             score ++;
             score_sign.text = String(score);
        });

        var bomb2 = new Sprite(32, 32);
        bomb2.image = game.assets["assets/bomb.png"];
        bomb2.x = Math.random() * 280;
        bomb2.y = 0;
        bomb2.frame = 5;
        game.rootScene.addChild(bomb2);

        bomb2.addEventListener("enterframe", function(){
           if(this.y < 288) {
            this.y  += speed;
            }else{
             this.y  = 0;
             this.x = Math.random() * 280;
             count ++;
            }

        });


        bomb2.addEventListener("touchstart", function(){
             this.y = 0;
             this.x = Math.random() * 280;
             score ++;
             score_sign.text = String(score);
        });


        var bomb3 = new Sprite(32, 32);
        bomb3.image = game.assets["assets/bomb.png"];
        bomb3.x = Math.random() * 271;
        bomb3.y = 0;
        bomb3.frame = 5;
        game.rootScene.addChild(bomb3);

        bomb3.addEventListener("enterframe", function(){
           if(this.y < 288) {
            this.y  += speed;
            }else{
             this.y  = 0;
             this.x = Math.random() * 275;
             count ++;
            }

        });


        bomb3.addEventListener("touchstart", function(){
             this.y = 0;
             this.x = Math.random() * 275;
             score ++;
             score_sign.text = String(score);
        });
    };
    game.start();

};

