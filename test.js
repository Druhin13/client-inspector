//set the bg color of .navbar_component to the bg color of .main-wrapper, every mili sec
setInterval(function () {
    var bg = document.querySelector('.main-wrapper').style.backgroundColor;
    document.querySelector('.navbar_component').style.backgroundColor = bg;
}, 1);

//write the same in jquery
setInterval(function () {
    var bg = $('.main-wrapper').css('backgroundColor');
    $('.navbar_component').css('backgroundColor', bg);
}, 1);