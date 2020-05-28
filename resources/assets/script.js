paceOptions = {
   ajax: true,
   document: true,
   eventLag: false
};

Pace.on('done', function() {
   $('.p-tagline').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19, 1, 0.22, 1]));

$("#preloader").delay(1500).animate({top: '-100vh'}, 2000, $.bez([0.19, 1, 0.22, 1]));
});

var a = window.pageYOffset;
window.onscroll = function() {
  var b = window.pageYOffset;
  document.getElementById("navigation").style.top = a > b ? "0" : "-70px";
  a = b;
};

TweenMax.from(".navigation", 2, {
   delay: 3,
   y: "-60px",
   ease: Expo.easeInOut
});