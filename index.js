let slides = document.querySelectorAll('#slideshow img');
let slideIndex = 0;
let slideInterval;
let start = document.getElementById("start")

function showSlide(index){
    slides.forEach((slide,i)=>{
        if(i === index){
            slide.style.display = 'block';
        }
        else{
            slide.style.display = 'none';
        }
    })
}

// Automation Starts

function startSlideShow(){
    slideInterval = setInterval(()=>{
        slideIndex = (slideIndex + 1)% slides.length;
        showSlide(slideIndex);
        console.log(slideIndex)
    }, 2000)
    start.innerText = "Stop"

}

function stopSlideShow(){
    clearInterval(slideInterval);
    start.innerText = "Start"
}


function toggleSlideShow(){
    if(slideInterval){
        stopSlideShow();
        slideInterval = null;
    }
    else{
        startSlideShow();
    }
}


// Manual Process
function nextSlide(){
    stopSlideShow();
    slideIndex = (slideIndex + 1)% slides.length;
    showSlide(slideIndex);
}

function prevSlide(){
    stopSlideShow();

    slideIndex = (slideIndex - 1);
    if( slideIndex  == -1){
     slideIndex = slides.length-1
    }
    showSlide(slideIndex);   
}

showSlide(slideIndex);