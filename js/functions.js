$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     var $scroll = $(this);
                     
      $(window).scroll(function() {                            
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        var coords = '50% '+ yPos + 'px';
 
        $scroll.css({ backgroundPosition: coords });    
      });
   });
});
$(document).ready(function(){
    $(".tooltip-examples a").tooltip({
        placement : 'top'
    });
});
var map;
function initialize() {
  var mapOptions = {
    zoom: 16,
	scrollwheel: false,
    center: new google.maps.LatLng(33.620704, -111.921707)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);