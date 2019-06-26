jQuery(document).ready(function () {
	/* tabs switching */
	$('.tabs__link').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('.tabs__link').removeClass('tabs__link-active');
		$('.tabs__content').removeClass('tabs__content-active');

		$(this).addClass('tabs__link-active');
		$("#" + tab_id).addClass('tabs__content-active');
	});

	/*owl carousel*/
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		items: 1,
		dots: false,
		nav: true
	});

	jQuery(function scrollUp() {
		$('.main-footer__up-button').on("click", function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 800);
		});
	});
	
});