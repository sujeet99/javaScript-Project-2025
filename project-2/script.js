 const left = document.querySelector(".left");
 const right = document.querySelector(".right");
 const slider= document.querySelector(".slider");
 const images = document.querySelectorAll('.image');

let sliderNumber = 1;
const totalImages = images.length;
const nextSlide = () => {
    slider.style.transform = `translateX(-${800*sliderNumber}px)`;
    sliderNumber++;
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(sliderNumber-2)*800}px)`;
    sliderNumber--;
}
const getlastSlide = () => {
    slider.style.transform = `translateX(-${(totalImages-1)*800}px)`;
    sliderNumber = totalImages;
};
 
const getfirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    sliderNumber = 1;
}

 right.addEventListener('click', () => {
    sliderNumber < totalImages ? nextSlide() : getfirstSlide();
 })

left.addEventListener('click', () => {
    sliderNumber > 1 ? prevSlide() : getlastSlide();
})

 