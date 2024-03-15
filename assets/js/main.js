// ....................header scroll animation

$(window).scroll(function () {
    if ($(this).scrollTop() > 5) {
        $("header").css({ "box-shadow": "0px 4px 5px #3366664f", "background": " #fffff" });
    }
    else {
        $("header").css({ "box-shadow": "none", "background": "#fff" });
    }
});

// ......................................................owl carousel 
$('.testimonail-slider').owlCarousel({
    loop: false,
    nav: false,
    responsive: {
        0: {
            items: 1,
            margin: 10,

        },
        768: {
            items: 2,
            margin: 20,
        },
        992: {
            items: 2,
            margin: 40,
        }
    }
})

//...............................................................humburger actice class

$(document).ready(function () {
    $('.humburger').click(function () {
        $('.humburger-line').toggleClass('active');
        $('.menu').toggleClass('show');
        $('.overlay').toggleClass('show');
        $('body').toggleClass('overflow');
    });

    $('.overlay').click(function () {
        $('.humburger-line').toggleClass('active');
        $('.menu').toggleClass('show');
        $('.overlay').toggleClass('show');
        $('body').toggleClass('overflow');
    });
});

//   ......................pagel loading spinner

$(window).on('load', function () {
    setTimeout(function () {
        $('.page-loader').fadeOut();
        $('body').removeClass("overflow")
    }, 1500);
});

//...........................on click btn show spinnner

$('button').click(function () {
    $(".page-loader").css("display", "block");
    $('body').addClass("overflow")
    setTimeout(function () {
        $('.page-loader').fadeOut();
        $('body').removeClass("overflow")
    }, 1500);
})


