const listSlider = document.querySelector('#list_slider');
let slider = document.querySelectorAll(".slider");
let sliderLast = slider[slider.length-3]

const btnLeft = document.querySelector("#btn-left");
const btnRigth = document.querySelector("#btn-rigth");

listSlider.insertAdjacentElement('afterbegin', sliderLast);

function Next(){
    let = sliderFirst = document.querySelectorAll(".slider")[0]
    listSlider.style.marginLeft = "-100%";
    listSlider.style.transition = "all 1s";
    setTimeout(function(){
        listSlider.style.transition = "none";
        listSlider.insertAdjacentElement("beforeend", sliderFirst);
        listSlider.style.marginLeft = "0";
    }, 1000);
}

btnRigth.addEventListener('click', function(){
    Next();
});


function Prev(){
    slider = document.querySelectorAll(".slider")
    sliderLast= slider[slider.length-1]
    listSlider.style.marginLeft = "0";
    listSlider.style.transition = "all 1s";
    setTimeout(function(){
        listSlider.style.transition = "none";
        listSlider.insertAdjacentElement("afterbegin", sliderLast);
        listSlider.style.marginLeft = "-100%";
    }, 1000);
}

btnLeft.addEventListener('click', function(){
    Prev();
});
