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
  var $speed = 300;
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
  
  var months = document.getElementsByClassName("month");

  // get the div element text in all the class month and put in the array
  var monthArray = [];
  for (var i = 0; i < months.length; i++) {
    monthArray.push(months[i].innerHTML);
  }

  // get the text of the clicked div element
  var clickedMonth = this.innerHTML;

  // put the text of the clicked div element in the invoices class element

  document.getElementById("invoices").innerHTML = clickedMonth;
  document.getElementById("invoices-closing").innerHTML = clickedMonth;
  document.getElementById("invoices-buying").innerHTML = clickedMonth;

});

function hideInvoice() {
  var invoiceContainer = document.getElementById("invoiceContainer");
  var clientInvoiceContainer = document.getElementById("clientInvoiceContainer");
  var arrow = document.getElementById("arrowDown");
  if (invoiceContainer.style.display === "none") {
    clientInvoiceContainer.style.height = "18rem";
    invoiceContainer.style.display = "flex";
    arrow.className = "arrow-down";
  } else {
    invoiceContainer.style.display = "none";
    clientInvoiceContainer.style.height = "8rem";
    arrow.className = "arrow-up";
  }
}