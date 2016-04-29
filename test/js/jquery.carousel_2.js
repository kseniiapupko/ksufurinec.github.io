	$(function() {

   	
    $('.second-hider').carousel();
  });

(function($) {

	$.fn.carousel = function() {
		var left = $('.second-slider-left');
		var right = $('.second-slider-right');
		var elementsList = $('.second-list');

		var pixelsOffset = 300;
		var currentLeftValue = 0;
		var elementsCount = elementsList.find('.second-slider').length;
		var minimumOffset = - ((elementsCount-2) * pixelsOffset);
		var maximumOffset = 0;
		left.click(function() {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += 820;
				elementsList.animate({ left : currentLeftValue + "px"}, 820);
			}        
		});

		right.click(function() {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= 820;
				elementsList.animate({ left : currentLeftValue + "px"}, 820);
			}  
		});
	};
})(jQuery);


 