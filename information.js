const flipedInfo = document.getElementsByClassName("flipedInfo");
for(let i=0; i<flipedInfo.length; i++){
    flipedInfo[i].addEventListener('click', clickForFlip);
    flipedInfo[i].addEventListener('mouseover', overForFlip);
    flipedInfo[i].addEventListener('mouseout', outForFlip);
}

function clickForFlip(e){
    
    if(e.target.classList.contains('turnFront')){
       e.target.classList.remove('turnFront');

       e.target.classList.add('turnBack');
   }else if(e.target.classList.contains('turnBack')){
        e.target.classList.remove('turnBack');
        
        e.target.classList.add('turnFront');
    }else{

       e.target.classList.add('turnFront');
   }
    
}

function overForFlip(e){

    e.target.children[0].style.filter = 'invert(8%) sepia(95%) saturate(4590%) hue-rotate(358deg) brightness(101%) contrast(112%)';
  
}

function outForFlip(e) {
    e.target.children[0].style.filter = 'invert(0%) sepia(100%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)';
}