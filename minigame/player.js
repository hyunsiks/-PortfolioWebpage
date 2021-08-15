const landCanvas = document.getElementById('landCanvas');
const landctx = landCanvas.getContext('2d');

const playerUp1 = new Image();
playerUp1.src = '../assets/image/player/위11.png';
const playerUp2 = new Image();
playerUp2.src = '../assets/image/player/위22.png';
const playerUp3 = new Image();
playerUp3.src = '../assets/image/player/위33.png';
const playerUp4 = new Image();
playerUp4.src = '../assets/image/player/위44.png';
const playerUp5 = new Image();
playerUp5.src = '../assets/image/player/위55.png';
const playerUp6 = new Image();
playerUp6.src = '../assets/image/player/위66.png';
const playerUpArr = [playerUp1, playerUp2, playerUp3, playerUp4, playerUp5, playerUp6];

const playerDown1 = new Image();
playerDown1.src = '../assets/image/player/아래11.png';
const playerDown2 = new Image();
playerDown2.src = '../assets/image/player/아래22.png';
const playerDown3 = new Image();
playerDown3.src = '../assets/image/player/아래33.png';
const playerDown4 = new Image();
playerDown4.src = '../assets/image/player/아래44.png';
const playerDown5 = new Image();
playerDown5.src = '../assets/image/player/아래55.png';
const playerDown6 = new Image();
playerDown6.src = '../assets/image/player/아래66.png';
const playerDownArr = [playerDown1, playerDown2, playerDown3, playerDown4, playerDown5, playerDown6];

const playerRight1 = new Image();
playerRight1.src = '../assets/image/player/오른쪽11.png';
const playerRight2 = new Image();
playerRight2.src = '../assets/image/player/오른쪽22.png';
const playerRight3 = new Image();
playerRight3.src = '../assets/image/player/오른쪽33.png';
const playerRight4 = new Image();
playerRight4.src = '../assets/image/player/오른쪽44.png';
const playerRight5 = new Image();
playerRight5.src = '../assets/image/player/오른쪽55.png';
const playerRight6 = new Image();
playerRight6.src = '../assets/image/player/오른쪽66.png';
const playerRightArr = [playerRight1, playerRight2, playerRight3, playerRight4, playerRight5, playerRight6];

const playerLeft1 = new Image();
playerLeft1.src = '../assets/image/player/왼쪽11.png';
const playerLeft2 = new Image();
playerLeft2.src = '../assets/image/player/왼쪽22.png';
const playerLeft3 = new Image();
playerLeft3.src = '../assets/image/player/왼쪽33.png';
const playerLeft4 = new Image();
playerLeft4.src = '../assets/image/player/왼쪽44.png';
const playerLeft5 = new Image();
playerLeft5.src = '../assets/image/player/왼쪽55.png';
const playerLeft6 = new Image();
playerLeft6.src = '../assets/image/player/왼쪽66.png';
const playerLeftArr = [playerLeft1, playerLeft2, playerLeft3, playerLeft4, playerLeft5, playerLeft6];

const tree1 = new Image();
tree1.src = '../assets/image/tree/나무11.png';
const tree2 = new Image();
tree2.src = '../assets/image/tree/나무22.png';
const tree3 = new Image();
tree3.src = '../assets/image/tree/나무33.png';
const tree4 = new Image();
tree4.src = '../assets/image/tree/나무44.png';
const tree5 = new Image();
tree5.src = '../assets/image/tree/나무55.png';
const tree6 = new Image();
tree6.src = '../assets/image/tree/나무66.png';

const house1 = new Image();
house1.src = '../assets/image/house/집1.png';
const house2 = new Image();
house2.src = '../assets/image/house/집2.png';
const house3 = new Image();
house3.src = '../assets/image/house/집3.png';
const house4 = new Image();
house4.src = '../assets/image/house/집4.png';
const house5 = new Image();
house5.src = '../assets/image/house/집5.png';
const house6 = new Image();
house6.src = '../assets/image/house/집6.png';

let landCount;
let landX =600;
let landY =400;
let nowPlaying = playerDownArr[0];
let playerDirection = 0;

landPlaying();

function landPlaying(){

    console.log('플레이어화면 켜짐');
    
    landctx.clearRect(0,0,landCanvas.width,landCanvas.height);
   
    
    window.onkeydown=function(e){  
        
        if(e.keyCode == 37){ //좌
            
            playerDirection = 1;
            
        }else if(e.keyCode == 38){//상
            
            playerDirection = 2;
            
        } else if(e.keyCode == 39){//우
            
            playerDirection = 3;

        }else if(e.keyCode == 40){//하
            
            playerDirection = 4;
            
        }
        
    };
    
    window.onkeyup=function(e){  
        
        if(e.keyCode == 37){ //좌
            
            playerDirection = 0;
            
        }else if(e.keyCode == 38){//상
            
            playerDirection = 0;
            
        } else if(e.keyCode == 39){//우
            
            playerDirection = 0;
            
        }else if(e.keyCode == 40){//하
            
            playerDirection = 0;
            
        }
        
    };
    //왼쪽
    if(playerDirection == 1){
        
        if(landCount < 5){
            // birdCtx.fillRect(50,50, 100,100);
            nowPlaying = playerLeftArr[0];
            // landctx.drawImage(playerRightArr[0], landX, landY);
        }else if(landCount < 10 && landCount >= 5){
            
            nowPlaying = playerLeftArr[1];
            // landctx.drawImage(playerRightArr[1], landX, landY);
        }else if(landCount < 15 && landCount >= 10){
            
            nowPlaying = playerLeftArr[2];
            // landctx.drawImage(playerRightArr[2], landX, landY);
        }else if(landCount < 20 && landCount >= 15){
            
            nowPlaying = playerLeftArr[3];
            // landctx.drawImage(playerRightArr[3], landX, landY);
        }else if(landCount < 25 && landCount >= 20){
            
            nowPlaying = playerLeftArr[4];
            // landctx.drawImage(playerRightArr[4], landX, landY);
        }else if(landCount < 30 && landCount >= 25){
            
            nowPlaying = playerLeftArr[5];
            // landctx.drawImage(playerRightArr[5], landX, landY);
        }else{
            landCount = 0;
        }
        // landctx.lineTo(0, 450);
        // landctx.lineTo(200, 450);
        // landctx.lineTo(500, 250);
        // landctx.lineTo(800, 250);
        // landctx.lineTo(1100, 500);
        // landctx.lineTo(1250, 650);
        // landctx.lineTo(1600, 650);
        if(landY < landCanvas.height - 450){
            //x값
            // (landX -200)
            // console.log("X값 : ", (landX -200));
            //y값
            // landY - (landX -200) * (Math.tan(30 * Math.PI*2/180));
            // console.log((landCanvas.height - 450) - landY);
            // console.log("y값 : ", landY - (landX -200) * (Math.tan(30 * Math.PI*2/180)));
            // console.log("랜드X : ",landX);
            // console.log("랜드y : ",landY);
            console.log(((landCanvas.height - 450) - landY) / (Math.tan(30 * Math.PI*2/180)));
            if((200 + ((landCanvas.height - 450) - landY) / (Math.tan(30 * Math.PI*2/180))) > landX){
                landX -= 2;
            }
            
        }

        if(landX > 0 && landY >= landCanvas.height - 450){
            console.log(landY >= landCanvas.height - 450);
            landX -= 2;
        }
        landCount++;
    }

    //위쪽
    if(playerDirection == 2){
        
        if(landCount < 5){
            // birdCtx.fillRect(50,50, 100,100);
            nowPlaying = playerUpArr[0];
            // landctx.drawImage(playerRightArr[0], landX, landY);
        }else if(landCount < 10 && landCount >= 5){
            
            nowPlaying = playerUpArr[1];
            // landctx.drawImage(playerRightArr[1], landX, landY);
        }else if(landCount < 15 && landCount >= 10){
            
            nowPlaying = playerUpArr[2];
            // landctx.drawImage(playerRightArr[2], landX, landY);
        }else if(landCount < 20 && landCount >= 15){
            
            nowPlaying = playerUpArr[3];
            // landctx.drawImage(playerRightArr[3], landX, landY);
        }else if(landCount < 25 && landCount >= 20){
            
            nowPlaying = playerUpArr[4];
            // landctx.drawImage(playerRightArr[4], landX, landY);
        }else if(landCount < 30 && landCount >= 25){
            
            nowPlaying = playerUpArr[5];
            // landctx.drawImage(playerRightArr[5], landX, landY);
        }else{
            landCount = 0;
        }

        // landctx.lineTo(0, 450);
        // landctx.lineTo(200, 450);
        // landctx.lineTo(500, 250);
        // landctx.lineTo(800, 250);
        // landctx.lineTo(1250, 650);
        // landctx.lineTo(1600, 650);

        //x좌표 0 ~ 200 까지 직선구간
        if(landY > 450 && landX >= 0 && landX <200){
            console.log("0 ~ 200 구간");
            landY -= 2;
        }

        //x좌표 200~500 까지 30도 구간
        if((landY < 450 & landY > 250) && (landX >= 200 && landX <500)){
            
            console.log(450 - ((landX-200) * (Math.tan(30 * Math.PI*2/180))));

            if((450 - ((landX-200) * (Math.tan(30 * Math.PI*2/180)))) > landY){
                console.log("200 ~ 500 구간");
                landY-= 2;
            } 
        }

        //x좌표 500 ~ 800  까지 직선 구간
        if(landY > 250 && landX >= 500 && landX <800){
            console.log("500 ~ 800 구간");
            console.log(landY >= landCanvas.height - 450);
            landY -= 2;
        }

        //x좌표 800 ~ 1250 까지 45도 구간
        if((landY < 650 & landY > 250) && (landX >= 800 && landX <1250)){
            console.log("800 ~ 1250 구간");
            console.log(250 + (landX - 800));
            if(250 + (landX - 800) < landY){

                landY-= 2;
            } 
        }
        //x좌표 1250 ~ 1600 까지 직선구간
        if(landY > 650 && landX >= 1250 && landX <1600){
            console.log("1250 ~ 1600 구간");
            landY -= 2;
        }

        landCount++;
    }

    //오른쪽
    if(playerDirection == 3){
        
        if(landCount < 5){
            // birdCtx.fillRect(50,50, 100,100);
            nowPlaying = playerRightArr[0];
            // landctx.drawImage(playerRightArr[0], landX, landY);
        }else if(landCount < 10 && landCount >= 5){
            
            nowPlaying = playerRightArr[1];
            // landctx.drawImage(playerRightArr[1], landX, landY);
        }else if(landCount < 15 && landCount >= 10){
            
            nowPlaying = playerRightArr[2];
            // landctx.drawImage(playerRightArr[2], landX, landY);
        }else if(landCount < 20 && landCount >= 15){
            
            nowPlaying = playerRightArr[3];
            // landctx.drawImage(playerRightArr[3], landX, landY);
        }else if(landCount < 25 && landCount >= 20){
            
            nowPlaying = playerRightArr[4];
            // landctx.drawImage(playerRightArr[4], landX, landY);
        }else if(landCount < 30 && landCount >= 25){
            
            nowPlaying = playerRightArr[5];
            // landctx.drawImage(playerRightArr[5], landX, landY);
        }else{
            landCount = 0;
        }
        landX += 2;
        landCount++;
    }

    //아래쪽
    if(playerDirection == 4){
        
        if(landCount < 5){
            // birdCtx.fillRect(50,50, 100,100);
            nowPlaying = playerDownArr[0];
            // landctx.drawImage(playerRightArr[0], landX, landY);
        }else if(landCount < 10 && landCount >= 5){
            
            nowPlaying = playerDownArr[1];
            // landctx.drawImage(playerRightArr[1], landX, landY);
        }else if(landCount < 15 && landCount >= 10){
            
            nowPlaying = playerDownArr[2];
            // landctx.drawImage(playerRightArr[2], landX, landY);
        }else if(landCount < 20 && landCount >= 15){
            
            nowPlaying = playerDownArr[3];
            // landctx.drawImage(playerRightArr[3], landX, landY);
        }else if(landCount < 25 && landCount >= 20){
            
            nowPlaying = playerDownArr[4];
            // landctx.drawImage(playerRightArr[4], landX, landY);
        }else if(landCount < 30 && landCount >= 25){
            
            nowPlaying = playerDownArr[5];
            // landctx.drawImage(playerRightArr[5], landX, landY);
        }else{
            landCount = 0;
        }
        landY += 2;
        landCount++;
    }
    
    
    
    // tree1.scale
    // let allItemArr = [];
    // allItemArr.push(noewPlaying);
    // allItemArr.push(tree1);
    // allItemArr.push(tree2);
    // allItemArr.push(tree3);
    // allItemArr.push(tree4);
    // allItemArr.push(tree5);
    // allItemArr.push(tree6);
    // if(landY > 210){

    // }
    landctx.fillStyle= "rgba(150,250,70,0.7)";
    landctx.strokeStyle='brown';
    landctx.save();
    landctx.globalAlpha=0.6;
    
    // landctx.globalAlpha=0.2;
    
    landctx.moveTo(0, landCanvas.height);
    landctx.lineTo(0, 450);
    landctx.lineTo(200, 450);
    landctx.lineTo(500, 250);
    landctx.lineTo(800, 250);
    landctx.lineTo(1250, 650);
    landctx.lineTo(1600, 650);

    landctx.lineTo(1600, landCanvas.height);
    landctx.lineTo(0, landCanvas.height);
    landctx.fill();
    landctx.stroke();
    landctx.restore();
    

    landctx.drawImage(tree1, 50,10,200,200);
    landctx.drawImage(tree1, 1050,10,200,200);
    landctx.drawImage(tree1, 1250,310,200,200);
    landctx.drawImage(tree1, 1350,350,200,200);
    landctx.drawImage(tree3, 500,60,200,200);
    landctx.drawImage(tree4, 650,20,200,200);
    landctx.drawImage(tree5, 1100,50,200,200);
    landctx.drawImage(tree6, 600,510,100,100);
    landctx.drawImage(house6, 930,80,400,400);
    landctx.drawImage(house2, 1130,300,400,400);
    landctx.drawImage(house5, 0,0,400,400);
    landctx.drawImage(tree2, 50,240,200,200);
    landctx.drawImage(nowPlaying, landX,landY);

   
    //prev버튼 누를때 끄도록 설계
    timerID = requestAnimationFrame(landPlaying);

}