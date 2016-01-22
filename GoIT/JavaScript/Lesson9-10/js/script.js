
  $(function() {
    $('.jcarousel').jcarousel({
      animation: 800,
      wrap: 'circular'
    })

    .jcarouselAutoscroll({
      interval: 2000,
      target: '+=1',
      autostart: true
    });

    $('.jcarousel-prev')
      .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.jcarousel-next')
      .on('jcarouselcontrol:active', function() {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });
  });

$('select').selectric();

$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(400);
        },
        function(){
            $(this).children('.sub-menu').slideUp(400);
        }
    );
}); 