$(function () {

    var $inputs = $('.form__text');

    var $button = $('.form__button');

    $inputs.on('mouseenter',function (e) {
        e.preventDefault();

        var $row = $(this).parents('.form__row');
        var tooltip = $(this)[0].title;

        if ($row.find('.form__tooltip').length === 0) {
          $row.append('<div class="form__tooltip">'+tooltip+'</div>');
          $(this).attr('title','');
        }

        $row.find('.form__tooltip').fadeIn(600);
    }); 

    $inputs.on('mouseleave',function (e) {
        e.preventDefault();

         var $row = $(this).parents('.form__row');
        if ($row.find('.form__tooltip').length > 0) {
            $row.find('.form__tooltip').fadeOut(600);
        }
    });

    $button.on('click', function(e){
        e.preventDefault();

        var $rows = $(this).parents('.form').find('fieldset .form__row');

        $rows.each(function(i) {
            var tooltip = $(this).find('.form__text')[0].title;
           
            if ($(this).find('.form__tooltip').length === 0) {
              $(this).append('<div class="form__tooltip">'+tooltip+'</div>');
              $(this).find('.form__text').attr('title','');
            }
        });

        $rows.find('.form__tooltip').fadeIn(600);
    });
 
});
