	$(function() {

   	
    $('.carousel-hider').carousel();
  });

(function($) {

	$.fn.carousel = function() {
		var left = $('.carousel-arrow-left');
		var right = $('.carousel-arrow-right');
		var elementsList = $('.carousel-list');

		var pixelsOffset = 300;
		var currentLeftValue = 0;
		var elementsCount = elementsList.find('.carousel-element').length;
		var minimumOffset = - ((elementsCount-2) * pixelsOffset);
		var maximumOffset = 0;
		left.click(function() {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += 715;
				elementsList.animate({ left : currentLeftValue + "px"}, 700);
			}        
		});

		right.click(function() {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= 715;
				elementsList.animate({ left : currentLeftValue + "px"}, 700);
			}  
		});
	};

  })(jQuery);
