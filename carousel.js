
var radius = 340;
var autoRotate = true;
var rotateSpeed = -60;
var imgWidth = 190;
var imgHeight = 140; 

var odrag = document.getElementById('drag');
var ospin = document.getElementById('spin');
var aImg = document.getElementsByTagName('img');

function spining(){

var aELe = [...aImg];

ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// console.log("ospin.style.width : ",ospin.style.width);
// console.log("ospin.style.height : ",ospin.style.height);

var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

init();
function init(delayTime) {
    for(let i = 0; i < aELe.length; i++){
        aELe[i].addEventListener('click', choice);
        aELe[i].style.transform = 
        "rotateY(" + (i*(360 / aELe.length)) + 
        "deg) translateZ(" + radius + "px";
        
        aELe[i].style.transition = "transform 1s";
        aELe[i].style.transitionDelay =
            delayTime || (aELe.length - i) / 4 + "s";
    }
}

function choice(e){
   
    let dargetValue = e.target.dataset.value;
    
    //현재의 vh값을 계산하기
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    window.scrollTo( 0, vh*2 );

    //바디의 스크롤 히든처리
    document.body.style.overflowY = "hidden";
    
    const popup = document.getElementsByClassName('popup');
    const bgForScroll = document.querySelector('.bgForScroll');
    // const bottomPopupContent = document.querySelector('.bottomPopupContent');
    const bottomPopupContent = document.getElementsByClassName('bottomPopupContent');
    if(dargetValue == 1){
        popup[0].style.display = 'inline-block';
        bgForScroll.style.display = 'inline-block';
        bottomPopupContent[0].style.height = '3800px';
    }else if(dargetValue == 2){
 
        popup[1].style.display = 'inline-block';
        bgForScroll.style.display = 'inline-block';
        bottomPopupContent[1].style.height = '1200px';
    }else if(dargetValue == 3){
        popup[2].style.display = 'inline-block';
        bgForScroll.style.display = 'inline-block';
        bottomPopupContent[2].style.height = '100%';
    }else if(dargetValue == 4){
        popup[3].style.display = 'inline-block';
        bgForScroll.style.display = 'inline-block';
        bottomPopupContent[3].style.height = '700px';
    }else if(dargetValue == 5){
        popup[4].style.display = 'inline-block';
        bgForScroll.style.display = 'inline-block';
        bottomPopupContent[4].style.height = '1200px';
    }else if(dargetValue == 6){
        popup[5].style.display = 'inline-block';
        bgForScroll.style.display = 'inline-block';
        bottomPopupContent[5].style.height = '100%';
    }else if(dargetValue == 7){
        popup[6].style.display = 'inline-block';
        bgForScroll.style.display = 'inline-block';
        bottomPopupContent[6].style.height = '100%';
    }

}


function applyTransform(obj) {

    if(tY > 180) tY - 180;
    if(tY < 0) tY = 0;

    obj.style.transform = "rotateX(" + (-tY) + 
        "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {

    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

var sX, sY, nX, nY, desX = 0,
desY = 0,
tX = 0,
tY = 10;

if(autoRotate){
    var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');

    ospin.style.animation = 
        `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

document.onpointerdown = function (e){

    // clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX;
    var sY = e.clientY;

    this.onpointermove = function (e){
    
        e = e || window.event;
        var nX = e.clientX;
        var nY = e.clientY;

        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;

        applyTransform(odrag);

        sX = nX;
        sY = nY;
    };

    this.onpointerup = function (e){

        odrag.timer = setInterval(function (){
            desX *= 0.95;
            desY *= 0.95;

            tX += desX * 0.1;
            tY += desY * 0.1;

            applyTransform(odrag);

            playSpin(false);

            if(Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5){
                clearInterval(odrag.timer);
                playSpin(true);
            }
        }, 17);

        this.onpointermove = this.onpointerup = null;
    };
}

}