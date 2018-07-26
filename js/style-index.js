$(document).ready(function () {
    //ganti warna navbar jadi item saat discroll
    var navbarHitam = function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
    }
    navbarHitam();
    $(window).scroll(function(){
        navbarHitam();
    });

    //smooth scroll
    $('.dropdown-item').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1000);
    });

    //buat button back to top
    $('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-angle-up"></i></div>');

    //munnculkan button bila discroll ke bawah
    var btnToTop = function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }
    btnToTop();
    $(window).scroll(function () {
        btnToTop();
    });

    //bila ditekan, scroll sampai paling atas 1000ms
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    //munculkan modal login bila ditekan
    $('#link-login').click(function(){
        $('#modal-login').modal()
    })

    //munculkan modal login bila ditekan
    $('#link-daftar').click(function(){
        $('#modal-daftar').modal()
    })
})