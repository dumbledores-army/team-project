let slideIndexD = 1;
showSlidesD(slideIndexD);
function plusSlidesD(n) {
    showSlidesD(slideIndexD += n);
}
function currentSlides(n) {
    showSlidesD(slideIndexD = n);
}
function showSlidesD(n) {
    let i;
    let slides = document.getElementsByClassName("gallery__mySlides");
    let dots = document.getElementsByClassName("gallery__dot");
    if (n > slides.length) slideIndexD = 1;
    if (n < 1) slideIndexD = slides.length;
    for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
    for(i = 0; i < dots.length; i++)dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndexD - 1].style.display = "block";
    dots[slideIndexD - 1].className += " active";
}

//# sourceMappingURL=index.11602242.js.map
