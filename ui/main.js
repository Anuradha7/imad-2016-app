console.log('Loaded!');

//changing content of body
var element = document.getElementById('main-text');
element.innerHTML ='hola!';

var img = document.getElementById('madi');
marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';  
}
img.onclick = function () {
    var interval = setInterval(moveRight,100);
};