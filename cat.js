var greenBtn = document.querySelector('.btn-1')
var blueBtn = document.querySelector('.btn-2')
var catSvg = document.querySelector('svg.cat')

var btns = document.querySelectorAll('button')


for(var i=0; i<btns.length; i++){
    btns[i].addEventListener('click', manageCatClasses)
}   

function manageCatClasses(){
    if(this.getAttribute("data-add")){
        catSvg.classList.add(this.getAttribute("data-add"))
    }
    if(this.getAttribute("data-remove")){
        catSvg.classList.remove(this.getAttribute("data-remove"))
    }
}