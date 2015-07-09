$('.contact-form').submit(function(event){
	event.preventDefault();

  $.ajax({
  	url: '/send',
  	type: 'POST',
  	data: $(this).serialize(),
  	success: function () {
  		// clear form fields, change button
  		$('.contact-form').find('input, textarea').val('');
  		$('.contact-submit').addClass('sent');
  	},
  	error: function () {}
  });
});

