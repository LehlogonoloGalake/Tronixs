

let SlideIndex = 1;

ShowSlides(SlideIndex);

function Arrow(n){
   ShowSlides(SlideIndex+=n);

}

function ShowSlides(n){
    let i;
    let x = document.getElementsByClassName("image");

    if(n>x.length){
        SlideIndex =1;
    }
    if(n < 1){
        SlideIndex = x.length;
    }

    for(i = 0; i< x.length; i++){
        x[i].style.display= "none";
    }

    x[SlideIndex-1].style.display = "block";
}





