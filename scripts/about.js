var N = 33;
var windowWidth = window.innerWidth;
var windowSm = 960;
const matchMedia = window.matchMedia('(max-width:960px)');
var pic = "";

function pic_window(){
    for (var i = 1; i <= N ;i++) {
        var n = i % 11;
        if (matchMedia.matches) {
            if(n % 2 == 0){
                pic += '<img src= ../images/A_' + i + '.jpg>';
            }
        } 
        else {
            if((n < 8)&&(n > 0)){
                pic += '<img src= ../images/A_' + i + '.jpg>';
            }
        }
    }
    document.getElementById("item").innerHTML = pic;
}

window.onload = function() {
    pic_window();
}
window.addEventListener('resize',function(){
    pic = "";
    pic_window();
});