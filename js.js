document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems2 = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems2);
    var elems3 = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems3);
  });

  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });