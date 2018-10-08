$('.slide').click(function (e) {
    e.preventDefault();
    console.log('Slide');
    
	var aid = $(this)
		.attr('href')
	$('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
});
