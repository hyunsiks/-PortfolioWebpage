const sun = document.getElementById('sun');
const aboutMe = document.querySelector('.aboutMe');
const infoRight = document.querySelector('.infoRight');

let translateValue;
let currentScroll2;
let turnOn = 0;


/************************
 * 스크롤 Y축 이동
*************************/

window.addEventListener('scroll', function(e){
    if(this.scrollY>600){
                document.body.classList.add('flipped');
                sun.style.zIndex = 3;
    }else{
        document.body.classList.remove('flipped');
    }
    
    if(this.scrollY>1300){
        if(document.body.classList.contains('flipped')){

            document.body.classList.replace('flipped','reds');
        }else{
            document.body.classList.add('reds');
        }
        if(turnOn == 0){
            trunOn = 1;
            // cancelAnimationFrame(turnmain);
            spining();
        }
    }else{
        document.body.classList.replace('reds','flipped');
    }
    
    if(this.scrollY>1800){
        sun.style.opacity = 0;
        aboutMe.classList.add('addAboutMe');
        infoRight.classList.add('addLeftRight');
    }else{
        sun.style.opacity = 1;
    }
})