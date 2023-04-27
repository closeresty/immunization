/*

Template: COINEX - Crypto Currency HTML Template 
Author: iqonicthemes.in
Version: 2.0

*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

1.Page Loader
2.Back To Top
3.Header
4.counter
5.Wow Animation
6.Progress Bar
7.Countdown
8.Owl Carousel
9.Magnific Popup
10.Timeline
11.Accordion
12.Chart
13.Contact from

------------------------------------------------
Index Of Script
----------------------------------------------*/

$(document).ready(function() {

    /*------------------------
    Page Loader
    --------------------------*/
    jQuery("#load").fadeOut();
    jQuery("#loading").delay(0).fadeOut("slow");



    /*------------------------
    Back To Top
    --------------------------*/
    $('#back-to-top').fadeOut();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1400);
        } else {
            $('#back-to-top').fadeOut(400);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function() {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });



    /*------------------------
    Header
    --------------------------*/
    // $('.navbar-nav li a').on('click', function(e) {
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top - 50
    //     }, 1500);
    //     e.preventDefault();
    // });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 20) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });



    /*------------------------
    counter
    --------------------------*/
    $('.timer').countTo();


    /*------------------------
    Wow Animation
    --------------------------*/
    new WOW().init();


    /*------------------------
    Progress Bar
    --------------------------*/
    $('.iq-progress-bar > span').each(function() {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 2s'
        });
        setTimeout(function() {
            $this.appear(function() {
                $this.css('width', width + '%');
            });
        }, 500);
    });



    /*------------------------
    Countdown
    --------------------------*/
    $('#countdown').countdown({
        date: '11/03/2023 23:59:59',
        day: 'Day',
        days: 'Days'
    });



    /*------------------------
    Owl Carousel
    --------------------------*/
    $('.owl-carousel').each(function() {
        var $carousel = $(this);
        $carousel.owlCarousel({
            items: $carousel.data("items"),
            loop: $carousel.data("loop"),
            margin: $carousel.data("margin"),
            nav: $carousel.data("nav"),
            dots: $carousel.data("dots"),
            autoplay: $carousel.data("autoplay"),
            autoplayTimeout: $carousel.data("autoplay-timeout"),
            navText: ['<i class="fa fa-angle-left fa-2x"></i>', '<i class="fa fa-angle-right fa-2x"></i>'],
            responsiveClass: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: $carousel.data("items-mobile-sm")
                },
                // breakpoint from 480 up
                480: {
                    items: $carousel.data("items-mobile")
                },
                // breakpoint from 786 up
                786: {
                    items: $carousel.data("items-tab")
                },
                // breakpoint from 1023 up
                1023: {
                    items: $carousel.data("items-laptop")
                },
                1199: {
                    items: $carousel.data("items")
                }
            }
        });
    });


    /*------------------------
    Magnific Popup
    --------------------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        tLoading: 'Loading image #%curr%...',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            navigateByImgClick: true,
            enabled: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',
        preloader: false,
        removalDelay: 160,
        fixedContentPos: false
    });



    /*------------------------
    Timeline
    --------------------------*/
    $('.timeline').timeline({
        forceVerticalMode: 800,
        mode: 'horizontal',
        visibleItems: 4
    });



    /*------------------------
    Accordion
    --------------------------*/
    $('.iq-accordion .iq-ad-block .ad-details').hide();
    $('.iq-accordion .iq-ad-block:first').addClass('ad-active').children().slideDown('slow');
    $('.iq-accordion .iq-ad-block').on("click", function() {
        if ($(this).children('div').is(':hidden')) {
            $('.iq-accordion .iq-ad-block').removeClass('ad-active').children('div').slideUp('slow');
            $(this).toggleClass('ad-active').children('div').slideDown('slow');
        }
    });



    /*------------------------
    Chart
    --------------------------*/
    var chart = AmCharts.makeChart("chartdiv", {
        "theme": "none",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": [{
            "country": "USA",
            "visits": 4025,
            "color": "#FF0F00"
        }, {
            "country": "China",
            "visits": 3882,
            "color": "#FF6600"
        }, {
            "country": "Japan",
            "visits": 3509,
            "color": "#FF9E01"
        }, {
            "country": "Germany",
            "visits": 3322,
            "color": "#FCD202"
        }, {
            "country": "UK",
            "visits": 2000,
            "color": "#F8FF01"
        }, {
            "country": "France",
            "visits": 2914,
            "color": "#B0DE09"
        }, {
            "country": "India",
            "visits": 2500,
            "color": "#04D215"
        }, {
            "country": "Spain",
            "visits": 2411,
            "color": "#0D8ECF"
        }, {
            "country": "Netherlands",
            "visits": 2265,
            "color": "#0D52D1"
        }, {
            "country": "Russia",
            "visits": 1000,
            "color": "#2A0CD0"
        }, {
            "country": "South Korea",
            "visits": 943,
            "color": "#8A0CCF"
        }, {
            "country": "Canada",
            "visits": 841,
            "color": "#CD0D74"
        }, {
            "country": "Brazil",
            "visits": 795,
            "color": "#754DEB"
        }, {
            "country": "Italy",
            "visits": 686,
            "color": "#DDDDDD"
        }, {
            "country": "Taiwan",
            "visits": 538,
            "color": "#333333"
        }],
        "valueAxes": [{
            "position": "left",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "color": "#fff"
        }],
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "colorField": "color",
            "fillAlphas": 0.85,
            "lineAlpha": 0.1,
            "type": "column",
            "topRadius": 1,
            "valueField": "visits"
        }],
        "depth3D": 40,
        "angle": 30,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "color": "#fff",
            "gridAlpha": 0
        },
        "export": {
            "enabled": true
        }

    }, 0);



    /*------------------------
    chart round
    --------------------------*/
    var chart = AmCharts.makeChart("chartrounddiv", {
        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "color": "#fff",
        "addClassNames": true,
        "legend": {
            "position": "right",
            "color": "#fff",
            "marginRight": 100,
            "autoMargins": false
        },
        "innerRadius": "30%",
        "defs": {
            "filter": [{
                "id": "shadow",
                "width": "200%",
                "height": "200%",
                "feOffset": {
                    "result": "offOut",
                    "in": "SourceAlpha",
                    "dx": 0,
                    "dy": 0
                },
                "feGaussianBlur": {
                    "result": "blurOut",
                    "in": "offOut",
                    "stdDeviation": 5
                },
                "feBlend": {
                    "in": "SourceGraphic",
                    "in2": "blurOut",
                    "mode": "normal"
                }
            }]
        },
        "dataProvider": [{
            "country": "Lithuania",
            "litres": 501.9
        }, {
            "country": "Czech Republic",
            "litres": 301.9,
        }, {
            "country": "Ireland",
            "litres": 201.1
        }, {
            "country": "Germany",
            "litres": 165.8
        }, {
            "country": "Australia",
            "litres": 139.9
        }, {
            "country": "Austria",
            "litres": 128.3
        }, {
            "country": "UK",
            "color": "#fff",
            "litres": 99
        }, {
            "country": "Belgium",
            "litres": 60
        }, {
            "country": "The Netherlands",
            "litres": 50
        }],
        "valueField": "litres",
        "titleField": "country",
        "export": {
            "enabled": true
        }
    });

    chart.addListener("init", handleInit);

    chart.addListener("rollOverSlice", function(e) {
        handleRollOver(e);
    });

    function handleInit() {
        chart.legend.addListener("rollOverItem", handleRollOver);
    }

    function handleRollOver(e) {
        var wedge = e.dataItem.wedge.node;
        wedge.parentNode.appendChild(wedge);
    }



    /*------------------------
    chart round
    --------------------------*/
    var chart = AmCharts.makeChart("chartnew", {
        "type": "pie",
        "theme": "light",
        "color": "#fff",
        "dataProvider": [{
            "country": "Lithuania",
            "value": 260
        }, {
            "country": "Ireland",
            "value": 201
        }, {
            "country": "Germany",
            "value": 65
        }, {
            "country": "Australia",
            "value": 39
        }, {
            "country": "UK",
            "value": 19
        }, {
            "country": "Latvia",
            "value": 10
        }],
        "valueField": "value",
        "titleField": "country",
        "outlineAlpha": 0.4,
        "depth3D": 15,
        "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
        "angle": 30,
        "export": {
            "enabled": true
        }
    });


    /*------------------------
    Contact from
    --------------------------*/
    $('#contact').submit(function(e) {
        var flag = 0;
        e.preventDefault(); // Prevent Default Submission
        $('.require').each(function() {
            if ($.trim($(this).val()) == '') {
                $(this).css("border", "1px solid red");
                e.preventDefault(); // Prevent Default Submission
                flag = 1;
            } else {
                $(this).css("border", "1px solid grey");
                flag = 0;
            }
        });

        if (grecaptcha.getResponse() == "") {
            flag = 1;
            alert('Please verify Recaptch');

        } else {
            flag = 0;
        }

        if (flag == 0) {
            $.ajax({
                    url: 'contact-form.php',
                    type: 'POST',
                    data: $("#contact").serialize() // it will serialize the form data
                })
                .done(function(data) {
                    $("#result").html('Form was successfully submitted.');
                    $('#contact')[0].reset();
                })
                .fail(function() {
                    alert('Ajax Submit Failed ...');
                });
        }

    });


});