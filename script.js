// --------adress-----//
var adressbtn = document.querySelector('#adress-form');
var adress_form = document.querySelector('.adress-from-pop-up');
var adress_close = document.querySelector('#adress-close');

adressbtn.onclick = function() {
    adress_form.style.display = 'flex';
}

adress_close.onclick = function() {
    adress_form.style.display = 'none';
}

// -------slider product-----
const righbtnone = document.querySelector('.fa-chevron-right-one')
const leftbtnone = document.querySelector('.fa-chevron-left-one')
const imgNuberone = document.querySelector('.slider__product__one__container__items')
let index = 0
righbtnone.addEventListener("click",function(){
    console.log("ok")
    index = index+1
    if(index>imgNuberone.length-1){
        index = 0
    }
    document.querySelector(".slider__product__one__container__items-content").style.transform = '-100%'
})

leftbtnone.addEventListener("click",function(){
    index = index-1
    if(index <= 0){
        index = imgNuberone.length-1
    }
    document.querySelector(".slider__product__one__container__items-content").style.right = index *100+"%"
})

