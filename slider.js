var images = [
    'images/rance-creation-logo.jpg', 
    'images/edutechng.jpg', 
    'images/medplus.png',
    'images/hero-1-2.png'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}