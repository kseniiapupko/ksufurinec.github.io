$(function () {

  var $links = $('.tabs__link');

  $links.on('click', function (e) {

    e.preventDefault();

    if ($(this).hasClass('tabs__link--active')) {
      return this;
    }
    
    var $link = $(this); //tab title
    var $parent = $link.parents('.tabs'); //tab block
    var $tab = $parent.find($link[0].hash); //tab href
    var $linkActive = $parent.find('.tabs__link--active'); //active tab
    var $tabActive = $parent.find('.tabs__text--active'); //active tab text

    $linkActive.removeClass('tabs__link--active');
    $tabActive.fadeOut(100);
    $tabActive.removeClass('tabs__text--active');

    setTimeout(function(){
			$link.addClass('tabs__link--active');
			$tab.fadeIn(100);
			$tab.addClass('tabs__text--active');
    }, 200);
   
  });

});
