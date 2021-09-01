const cm = {
    canvas: undefined,
    ctx: undefined,
    stageWidth: 0,
    stageHeight: 0,
    t: 0,
    hillFrame: 0,
    snowflakes: [],
    leftPoint: {
        x : 0,
        y : 0,
    },
    topPoint: {
        x : 0,
        y : 0,
    },
    rightPoint:{
        x : 0,
        y : 0,
    },
    bottomPoint:{
        x : 0,
        y : 0,
    },
    xxx: 0,
    yyy: 0,
    direction: 1,
    imgElem: new Image(),
    color: {
        redcolor:39,
        greencolor:39,
        bluecolor:39,
        opacity: 0.5
    },
    eventCount : 0,
    imgBirdArr : [],
    imgBirdArr2 : [],
    hills: [
        new Hill('rgb(40,40,60)', 0.2, 15),
        new Hill('rgb(140,140,180', 0.5, 10),
        new Hill('rgb(215,215,235)', 1.4, 6),
    ]
};





const canvasContainer = document.getElementById('canvasContainer');
cm.canvas = document.getElementById('canvas');
cm.ctx = cm.canvas.getContext('2d');
const square = document.querySelector('.mainSquare');
cm.imgElem.src = './assets/image/snowboard.png';
const imgBird1 = new Image();
imgBird1.src = './assets/image/bird/top3.png';
const imgBird2 = new Image();
imgBird2.src = './assets/image/bird/middle3.png';
const imgBird3 = new Image();
imgBird3.src = './assets/image/bird/down3.png';
const imgBird4 = new Image();
imgBird4.src = './assets/image/bird/bottom3.png';
cm.imgBirdArr = [imgBird1, imgBird2, imgBird3, imgBird4];

const imgBird5 = new Image();
imgBird5.src = './assets/image/bird/bottom3re.png';
const imgBird6 = new Image();
imgBird6.src = './assets/image/bird/down3re.png';
const imgBird7 = new Image();
imgBird7.src = './assets/image/bird/middle3re.png';
const imgBird8 = new Image();
imgBird8.src = './assets/image/bird/top3re.png';
cm.imgBirdArr2 = [imgBird5, imgBird6, imgBird7, imgBird8];

const punchBirdImg = new Image();
punchBirdImg.src = './assets/image/bird/scream2.png'

let birdCount = 0;
let birdX = 0;
let birdY = 100;
let birdDirection = 1;
let punchBird = 0;
let punchBirdCount = 0;

const birdCanvas = document.querySelector('#birdCanvas');
const birdCtx = birdCanvas.getContext('2d');

//메인페이지 사각형 이벤트
square.onmouseover = squareOver;
square.onmouseout = squareOut;
square.onclick = squareClick;

//두번째 페이지 이벤트
//이벤트 위임(박스)
const flyingbox = document.querySelector('.flyingbox');
const frame2Main = document.querySelector('.frame2Main');

birdCanvas.onclick = birdClick;
flyingbox.onmouseover = boxesOver;
flyingbox.onmouseout = boxesOut;
flyingbox.onclick = boxesClick;

//세번째 페이지 이벤트
const outlinedIcon = document.querySelectorAll('#outlinedIcon');

for(let i = 0; i < 7; i++){

    outlinedIcon[i].onclick = outlinedClick;
}

function birdClick(e){

    let bound =birdCanvas.getBoundingClientRect();
 
    let valueX = (e.clientX - bound.left) * (birdCanvas.width / bound.width);
    
    if((valueX-100 >= birdX-100 && valueX-100 <= birdX+100) && (e.clientY-70 < 130 && e.clientY-70 > 70)){
        punchBird = 1;
        if(birdDirection == 1){
            birdDirection = 2;
        }else{
            birdDirection = 1;
        }
        
    }
}

function boxesOver(e){

    let boxElem = e.target;
    while(!boxElem.classList.contains('flying')){
        boxElem = boxElem.parentNode;
        if(boxElem.nodeName == 'BODY'){
            boxElem == null;;
            return null;
        }
    }
    for(let i =0; i <boxElem.children.length; i++){
        boxElem.children[i].classList.add('mouseoverBoxes');
    }
}
function boxesOut(e){

    let boxElem = e.target;
    while(!boxElem.classList.contains('flying')){
        boxElem = boxElem.parentNode;
        if(boxElem.nodeName == 'BODY'){
            boxElem == null;;
            return null;
        }
    }
    for(let i =0; i <boxElem.children.length; i++){
        boxElem.children[i].classList.remove('mouseoverBoxes');
    }
}
function boxesClick(e){

    let boxElem = e.target;
    while(!boxElem.classList.contains('flying')){
        boxElem = boxElem.parentNode;
        if(boxElem.nodeName == 'BODY'){
            boxElem == null;;
            return null;
        }
    }

    for(let i =0; i <boxElem.children.length; i++){
        boxElem.children[i].classList.add('mouseoverBoxes');
    }

    if(e.target.classList.contains('flying')){
        let check = frame2Main.classList;
        if(check.contains('logocube') ||check.contains('logocube2') ||check.contains('logocube3') ||check.contains('logocube4') ||
            check.contains('logocube5') ||check.contains('logocube6') ||check.contains('logocube7') ){

            frame2Main.classList.remove('logocube');
            frame2Main.classList.remove('logocube2');
            frame2Main.classList.remove('logocube3');
            frame2Main.classList.remove('logocube4');
            frame2Main.classList.remove('logocube5');
            frame2Main.classList.remove('logocube6');
            frame2Main.classList.remove('logocube7');

            if(!boxElem.classList.contains('clickingBoxes')){

                frame2Main.classList.add(`logo${e.target.classList[0]}`);
            }
        }else{

            if(!boxElem.classList.contains('clickingBoxes')){

                frame2Main.classList.add(`logo${e.target.classList[0]}`);
            }
        }
        

        
    }else{
        let check = frame2Main.classList;

        if(check.contains('logocube') ||check.contains('logocube2') ||check.contains('logocube3') ||check.contains('logocube4') ||
            check.contains('logocube5') ||check.contains('logocube6') ||check.contains('logocube7') ){

            frame2Main.classList.remove('logocube');
            frame2Main.classList.remove('logocube2');
            frame2Main.classList.remove('logocube3');
            frame2Main.classList.remove('logocube4');
            frame2Main.classList.remove('logocube5');
            frame2Main.classList.remove('logocube6');
            frame2Main.classList.remove('logocube7');

            if(!boxElem.classList.contains('clickingBoxes')){

                frame2Main.classList.add(`logo${e.target.parentNode.classList[0]}`);
            }
        }else{

            if(!boxElem.classList.contains('clickingBoxes')){

                frame2Main.classList.add(`logo${e.target.parentNode.classList[0]}`);
            }
        }
    }
    
    boxElem.classList.toggle('clickingBoxes');
    
}

//2번째 프레임 깃으로 이동 이벤트처리
frame2Main.addEventListener('mouseover', checkGoGit);
frame2Main.addEventListener('mouseout', deleteGoGit);
frame2Main.addEventListener('click', flyingBoxGit);
function checkGoGit(e){
    if(e.target.classList.length ==2){
        document.querySelector('.GoingToGitMessage').style.display = "block";
    }
}
function deleteGoGit(e){
    document.querySelector('.GoingToGitMessage').style.display = "none";
}
function flyingBoxGit(e){
    console.log(e.target.classList[1]);
    if(e.target.classList[1] == "logocube"){
        window.open('https://github.com/hyunsiks/myJava', '_blank');
    }else if(e.target.classList[1] == "logocube2"){
        window.open('https://github.com/hyunsiks/mySQL', '_blank');
    }else if(e.target.classList[1] == "logocube3"){
        window.open('https://github.com/hyunsiks/myHTML_CSS', '_blank');
    }else if(e.target.classList[1] == "logocube4"){
        window.open('https://github.com/hyunsiks/myHTML_CSS', '_blank');
    }else if(e.target.classList[1] == "logocube5"){
        window.open('https://github.com/hyunsiks/myJavaScript', '_blank');
    }else if(e.target.classList[1] == "logocube6"){
        window.open('https://github.com/hyunsiks/mySpring', '_blank');
    }
}

function setup(){
    resize();
    draw();
}

    /***********************/
    let mediaTopLeftX = 0; 
    let mediaBottomLeftX = 0; 
    let mediaTopRightX = 0; 
    let mediaBottomRightX = 0;

    let mediaTopLeftY = 0; 
    let mediaBottomLeftY = 0; 
    let mediaTopRightY = 0; 
    let mediaBottomRightY = 0; 

    /*********************/
        /******************/
        let TopPointY = 40;
        let leftPointY = 40;
        let bottomPointY = 40;
        let rightPointY = 40;

        let imgSizeX = 100;
        let imgSizeY = 100;
        /*****************/
    
function draw(){
    
    cm.ctx.clearRect(0, 0, cm.stageWidth, cm.stageHeight);
    
    cm.hillFrame++;
    //눈송이시작=====================================================================================
    let t = cm.hillFrame / 60; // 시간 업데이트
    // 매 프라임마다 무작위 개수의 눈송이 생성
    for (let i = 0; i < Math.random()*+1; i++) {
        cm.snowflakes.push(new snowflake()); // 눈송이 객체 추가
    }
    cm.snowflakes.push(new snowflake());
    // for 반복문을 사용하여 눈송이 반복
    
    for (let flake of cm.snowflakes) {
        
        // console.log("나옵니다1");
        flake.update(t,this); // 눈송이 위치 업데이트
        flake.display(); // 눈송이 그리기
        
    }

    
    //눈송이끝=====================================================================================
    //새시작=====================================================================================

    birdCtx.clearRect(0,0,birdCanvas.width,birdCanvas.height);

    if(birdDirection == 1){
        birdX += 1;

        if(birdCount < 10){    
            birdCtx.drawImage(cm.imgBirdArr[0], birdX, birdY);
        }else if(birdCount < 20 && birdCount >= 10){
            birdCtx.drawImage(cm.imgBirdArr[1], birdX, birdY);
        }else if(birdCount < 30 && birdCount >= 20){
            birdCtx.drawImage(cm.imgBirdArr[2], birdX, birdY);
        }else if(birdCount < 30 && birdCount >= 30){
            birdCtx.drawImage(cm.imgBirdArr[3], birdX, birdY);
        }else{
            birdCount = 0;
        }

        if(birdX >= birdCanvas.width){
            birdDirection = 2;
        }

    }else{
        birdX -= 1;
        
        if(birdCount < 10){
            birdCtx.drawImage(cm.imgBirdArr2[0], birdX, birdY);
        }else if(birdCount < 20 && birdCount >= 10){
            birdCtx.drawImage(cm.imgBirdArr2[1], birdX, birdY);
        }else if(birdCount < 30 && birdCount >= 20){
            birdCtx.drawImage(cm.imgBirdArr2[2], birdX, birdY);
        }else if(birdCount < 30 && birdCount >= 30){
            birdCtx.drawImage(cm.imgBirdArr2[3], birdX, birdY);
        }else{
            birdCount = 0;
        }
        
        if(birdX <= -300){
            birdDirection = 1;
        }
    }

    if(punchBird == 1){
        birdCtx.drawImage(punchBirdImg, birdX + 20, birdY + 10);
        punchBirdCount++;
        if(punchBirdCount > 10){
            punchBirdCount = 0;
            punchBird = 0;
        }
    }


    birdCount++;


    for(let i=0; i < cm.hills.length; i++){
    
        cm.hills[i].draw(this.ctx);
    }

    cm.t++;

    if(cm.hillFrame > 1000000){
        cm.hillFrame = 0;
    }

    cm.ctx.beginPath();
    cm.ctx.fillStyle='white';

    switch(cm.direction){

        case 1:{
 
            cm.ctx.save();

            cm.ctx.translate(cm.topPoint.x - cm.xxx, cm.topPoint.y +cm.yyy);
            cm.ctx.rotate(320 * Math.PI/180);
            cm.ctx.drawImage(cm.imgElem,-20-mediaTopLeftX, -100 -mediaTopLeftY , imgSizeX, imgSizeY);
        
            cm.ctx.restore();
            

            break;
        }
        case 2:{
            cm.ctx.save();

            cm.ctx.translate(cm.leftPoint.x + cm.xxx, cm.leftPoint.y +cm.yyy);
            cm.ctx.rotate(230 * Math.PI/180);
            
            cm.ctx.drawImage(cm.imgElem, 20-mediaBottomLeftX, -90 -mediaBottomLeftY, imgSizeX, imgSizeY);
            
            cm.ctx.restore();
            break;
        }
        case 3:{
            cm.ctx.save();

            cm.ctx.translate(cm.bottomPoint.x + cm.xxx, cm.bottomPoint.y -cm.yyy);
            cm.ctx.rotate(140 * Math.PI/180);
            
            cm.ctx.drawImage(cm.imgElem, 0-mediaBottomRightX, -78 -mediaBottomRightY, imgSizeX, imgSizeY);
            
            cm.ctx.restore();
            break;
        }
        case 4:{
            cm.ctx.save();

            cm.ctx.translate(cm.rightPoint.x - cm.xxx, cm.rightPoint.y -cm.yyy);
            cm.ctx.rotate(50 * Math.PI/180);
            
            cm.ctx.drawImage(cm.imgElem, 0-mediaTopRightX, -93-mediaTopRightY, imgSizeX, imgSizeY);
            
            cm.ctx.restore();
            break;
        }
    }

    
    if(cm.stageWidth < 485){
        imgSizeX = 60;
        imgSizeY = 60;
        
        //어디까지 진행할 것인지 정하는것
        TopPointY = -112;
        leftPointY = -132;
        bottomPointY = -130;
        rightPointY = -120;
        
        //좌표를 어디로 찍을 지를 정하는것
        mediaTopLeftX = 100;
        mediaTopLeftY = 57;
        
        mediaBottomLeftX = -60;
        mediaBottomLeftY = -132;
        
        mediaBottomRightX = 100;
        mediaBottomRightY = -348;
        
        mediaTopRightX = 300;
        mediaTopRightY = -163;
    }else if(cm.stageWidth < 930){
        imgSizeX = 100;
        imgSizeY = 100;
        TopPointY = -20;
        leftPointY = -50;
        bottomPointY = -30;
        rightPointY = -20;
        mediaTopLeftX = 50;
        mediaTopLeftY = 45;
        
        mediaBottomLeftY = -50;
        
        mediaBottomRightX = 70;
        mediaBottomRightY = -155;
        
        mediaTopRightX = 150;
        mediaTopRightY = -65;
    }else{
        mediaTopLeftX = 0; 
        mediaBottomLeftX = 0; 
        mediaTopRightX = 0; 
        mediaBottomRightX = 0;
    
        mediaTopLeftY = 0; 
        mediaBottomLeftY = 0; 
        mediaTopRightY = 0; 
        mediaBottomRightY = 0; 
    
        TopPointY = 40;
        leftPointY = 40;
        bottomPointY = 40;
        rightPointY = 40;
    }
    
    if((cm.topPoint.y +cm.yyy >= cm.leftPoint.y + TopPointY) && cm.direction ==1){
        
        cm.xxx = 0;
        cm.yyy = 0;
        cm.direction = 2;
    }else if((cm.leftPoint.x + cm.xxx >= cm.bottomPoint.x +leftPointY) && cm.direction == 2){
    
        cm.xxx = 0;
        cm.yyy = 0;
        cm.direction = 3;
    }else if((cm.bottomPoint.x + cm.xxx >= cm.rightPoint.x+bottomPointY) && cm.direction == 3){
    
        cm.xxx = 0;
        cm.yyy = 0;
        cm.direction = 4;
    }else if((cm.rightPoint.y - cm.yyy <= cm.topPoint.y -rightPointY) && cm.direction == 4){
        cm.xxx = 0;
        cm.yyy = 0;
        cm.direction = 1;
    }
    cm.ctx.save();
    cm.ctx.filter = 'blur(10px)';
    cm.xxx+= (cm.topPoint.x - cm.leftPoint.x) / 100
    cm.yyy+=(cm.leftPoint.y - cm.topPoint.y) / 100
    cm.ctx.fill();

    cm.ctx.closePath();
    cm.ctx.restore();

    turnmain = requestAnimationFrame(draw);
}

function resize(){
    cm.stageWidth = document.body.clientWidth;
    cm.stageHeight = document.body.clientHeight;
    cm.canvas.width = cm.stageWidth*2;
    cm.canvas.height = cm.stageHeight * 2;
    cm.ctx.scale(2,2);

    const halfLine = Math.cos(Math.PI/4) * 350;
    const clientRect = square.getBoundingClientRect();		//Element의 속성 값 반환
    const topLine = clientRect.top;
    const leftLine = clientRect.left;

    // console.log("탑top: ",clientRect.top);
    // console.log("left : ",clientRect.left);

    cm.leftPoint = {
        x : leftLine,
        y : topLine + halfLine,
    }
    cm.topPoint = {
        x : leftLine + halfLine,
        y : topLine,
    }
    cm.rightPoint = {
        x : leftLine + (halfLine*2),
        y : topLine + halfLine,
    }
    cm.bottomPoint = {
        x : leftLine + halfLine,
        y : topLine + (halfLine*2),
    }

    for(let i=0; i < cm.hills.length; i++){

        cm.hills[i].resize(document.body.clientWidth, document.body.clientHeight);
        
    }

    // this.sun.resize(cm.stageWidth, cm.stageHeight);
    
}

function getRandomColor(){

    // Math.random() * 100
    cm.color.redcolor = Math.random() * 250;
    cm.color.greencolor = Math.random() * 250;
    cm.color.bluecolor = Math.random() * 250;
    return `rgba(${cm.color.redcolor},${cm.color.greencolor},${cm.color.bluecolor},0.7)`
}

window.addEventListener('load', setup);
window.addEventListener('resize', resize);

function squareOver(){
    cm.eventCount = 2;

    getRandomColor();
    
    square.style.background = getRandomColor();
}
function squareOut(){

    square.style.background = "rgba(39,39,39,0.5)";

}
function squareClick(){

    let red1, green1, blue1;
    let red2, green2, blue2;
    let red3, green3, blue3;

    //red color 만들기
    if(cm.color.redcolor >= 0 && cm.color.redcolor < 70){
        red1 = cm.color.redcolor;
        red2 = cm.color.redcolor + (255 - cm.color.redcolor)/3;
        red3 = cm.color.redcolor + ((255 - cm.color.redcolor)/3)*2;
    }else if(cm.color.redcolor > 180 && cm.color.redcolor <= 255){
        red1 = cm.color.redcolor - (cm.color.redcolor/3)*2;
        red2 = cm.color.redcolor - (cm.color.redcolor/3);
        red3 = cm.color.redcolor;
    }else{
        red1 = cm.color.redcolor - 70;
        red2 = cm.color.redcolor;
        red3 = cm.color.redcolor + 70;
    }

    //green color 만들기
    if(cm.color.greencolor >= 0 && cm.color.greencolor < 70){
        green1 = cm.color.greencolor;
        green2 = cm.color.greencolor + (255 - cm.color.greencolor)/3;
        green3 = cm.color.greencolor + ((255 - cm.color.greencolor)/3)*2;
    }else if(cm.color.greencolor > 180 && cm.color.greencolor <= 255){
        green1 = cm.color.greencolor - (cm.color.greencolor/3)*2;
        green2 = cm.color.greencolor - (cm.color.greencolor/3);
        green3 = cm.color.greencolor;
    }else{
        green1 = cm.color.greencolor - 70;
        green2 = cm.color.greencolor;
        green3 = cm.color.greencolor + 70;
    }

    //blue color 만들기
    if(cm.color.bluecolor >= 0 && cm.color.bluecolor < 70){
        blue1 = cm.color.bluecolor;
        blue2 = cm.color.bluecolor + (255 - cm.color.bluecolor)/3;
        blue3 = cm.color.bluecolor + ((255 - cm.color.bluecolor)/3)*2;
    }else if(cm.color.bluecolor > 180 && cm.color.bluecolor <= 255){
        blue1 = cm.color.bluecolor - (cm.color.bluecolor/3)*2;
        blue2 = cm.color.bluecolor - (cm.color.bluecolor/3);
        blue3 = cm.color.bluecolor;
    }else{
        blue1 = cm.color.bluecolor - 70;
        blue2 = cm.color.bluecolor;
        blue3 = cm.color.bluecolor + 70;
    }

    cm.color.opacity = 0.7;

    cm.hills[0].color = `rgb(${red1},${green1},${blue1})`;
    cm.hills[1].color = `rgb(${red2},${green2},${blue2})`;
    cm.hills[2].color = `rgb(${red3},${green3},${blue3})`;
}

function outlinedClick(){
    const popup = document.getElementsByClassName('popup')
    for(let i =0; i < 7; i++){
        popup[i].style.display = 'none';
    }
    document.querySelector('.bgForScroll').style.display = 'none';
    document.body.style.overflowY = "scroll";
}
