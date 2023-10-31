const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const liIndicator = document.querySelectorAll(".controls li");
const indicatorParent = document.querySelector(".controls ul");
const carousel = document.querySelector(".carousel");

let sectionIndex = 0;


// The control arrows

rightArrow.addEventListener("click", function() {
    if (sectionIndex < 3) {
        sectionIndex = sectionIndex + 1;
    } else {
        sectionIndex = 0;
    }

    document.querySelector(".controls .selected").classList.remove("selected");
    indicatorParent.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
})


leftArrow.addEventListener("click", function() {
    if (sectionIndex > 0) {
        sectionIndex = sectionIndex - 1;
    } else {
        sectionIndex = 3;
    }

    document.querySelector(".controls .selected").classList.remove("selected");
    indicatorParent.children[sectionIndex].classList.add("selected");
    slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
})


// The indicator circles

liIndicator.forEach(function(indicator, ind) {
    indicator.addEventListener("click", function() {
        sectionIndex = ind;
        document.querySelector(".controls .selected").classList.remove("selected");
        indicator.classList.add("selected");
        slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
    })
})


// Autoplay mood

let intervalId = 0;

function autoPlay() {
    intervalId = setInterval(function () {
        if (sectionIndex < 3) {
            sectionIndex = sectionIndex + 1;
        } else {
            sectionIndex = 0;
        }
    
        document.querySelector(".controls .selected").classList.remove("selected");
        indicatorParent.children[sectionIndex].classList.add("selected");
        slider.style.transform = `translate(${sectionIndex * -25}%)`;
    }, 5000)
}
autoPlay();


// Autoplay stop and play on mouseover and mouseleave

carousel.addEventListener("mouseover", function () {
    clearInterval(intervalId);
})

carousel.addEventListener("mouseleave", function () {
    autoPlay();
})