const answer= document.querySelector(".ttt");

let image = document.getElementById('img1');

let image1 = 'icon-plus.svg';
let image2 = 'icon-minus.svg';

image.addEventListener("click",function(){
    answer.classList.toggle("ttt");

    if (image.src.includes(image1)) {
        image.src = image2;
    }
    else {
        image.src = image1;
    }
});


const answer1= document.querySelector(".answer1");
let imag= document.getElementById('img2');

let imag1 = 'icon-plus.svg';
let imag2 = 'icon-minus.svg';

imag.addEventListener("click",function(){
    answer1.classList.toggle("ttt");

    if (imag.src.includes(imag1)) {
        imag.src = imag2;
    }
    else {
        imag.src = imag1;
    }
});


const answer2= document.querySelector(".answer2");
let ima= document.getElementById('img3');

let ima1 = 'icon-plus.svg';
let ima2 = 'icon-minus.svg';

ima.addEventListener("click",function(){
    answer2.classList.toggle("ttt");

    if (ima.src.includes(ima1)) {
        ima.src = ima2;
    }
    else {
        ima.src = ima1;
    }
});


const answer3= document.querySelector(".answer3");
let im= document.getElementById('img4');

let im1 = 'icon-plus.svg';
let im2 = 'icon-minus.svg';

im.addEventListener("click",function(){
    answer3.classList.toggle("ttt");

    if (im.src.includes(im1)) {
        im.src = im2;
    }
    else {
        im.src = im1;
    }
});