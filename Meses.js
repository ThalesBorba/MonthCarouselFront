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
  
  var months = document.getElementsByClassName("month");

  var innerHtml = [];
  for (var i = 0; i < months.length; i++) {
    innerHtml.push(months[i].innerHTML);
  }

  var monthName = this.children[0].innerHtml;
  
document.getElementById("months").innerHTML=monthName[1];;
});