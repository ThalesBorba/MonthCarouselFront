var $owl = $('.owl-carousel');

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});

$owl.owlCarousel({
  center: true,
  loop: true,
  items: 5,
});

$(document).on('click', '.owl-item>div', function() {
  var $speed = 300;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
  
  var months = document.getElementsByClassName("srcUrl");

  var src = [];
  for (var i = 0; i < months.length; i++) {
    src.push(months[i].src);
  }

  var monthName = this.children[0].src.split('=');
  
document.getElementById("months").innerHTML=monthName[1];;
});