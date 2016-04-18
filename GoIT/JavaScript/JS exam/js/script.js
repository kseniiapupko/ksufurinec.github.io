'use strict'

$(function() {


    $('.jcarousel')
        .jcarousel({
            animation: 'slow',
            wrap: 'circular'
        })

    .jcarouselAutoscroll({
        interval: 6000,
        target: '+=1',
        autostart: true
    });

    $('.jcarousel_prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel_next').jcarouselControl({
        target: '+=1'
    });

    $('.grid').isotope({
        // options
        itemSelector: '.grid--item',
        layoutMode: 'fitRows'
    });

    var pic = '';

    function renderList(pic) {

        $.ajax({
            url: 'http://api.pixplorer.co.uk/image?word=' + pic + '&amount=7&size=m',
            success: function(data) {
                // console.log(data);
                var piclist = tmpl($('#piclist--template').html(), data);

                $('.grid').remove();

                $('.ideas').append(piclist);
                $('.grid').isotope({
                    itemSelector: '.grid--item',
                    layoutMode: 'masonry',
                    masonry: {
                        gutter: 20
                    }
                });

            }
        });
    }

    $('#search__form').submit(function(e) {

        e.preventDefault();
        var query = encodeURIComponent($('.search__form--text').val());
        renderList(query);

    });

    renderList();

});
