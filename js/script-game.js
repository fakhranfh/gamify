$(document).ready(function () {
    $(window).resize(function () {
        if( $(document).width() <= 767 ){
            $('#body').addClass("container-fluid");
            $('#body').removeClass("container");
        }
        else{
            $('#body').addClass("container");
            $('#body').removeClass("container-fluid");
        }
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

    //munculkan modal login dan daftar bila ditekan
    function loginDanDaftar(){
        $('#link-login').click(function(){
            $('#modal-login').modal();
            if(localStorage.ingatUname != undefined //jika bukan pertama kali buka website ini
            ){
                $('#modal-login input')[0].value = localStorage.ingatUname;
                $('#modal-login input')[1].value = localStorage.ingatPwd;
            }
        });

        $('#link-daftar').click(function(){
            $('#modal-daftar').modal()
        });
    }

    // ganti menu login dan daftar dengan menu username
    function gantiMenu() {
        $('ul[class="navbar-nav"]').html('<li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" id="navbardrop-user" data-toggle="dropdown"> '+ localStorage.uname +' </a> <div class="dropdown-menu"> <a id="btn-logout" class="dropdown-item" href="index.html">Log Out</a> </div></li>');

        $('#btn-logout').click(function () {
            // hapus isi key uname dan pwd pada localStorage
            localStorage.email = "";
            localStorage.uname = "";
            localStorage.pwd = "";
        });
    }

    // menentukan tampilan navigation bagian kanan
    if(localStorage.uname == undefined || // jika pertama kali buka website ini
        localStorage.uname == ""){ // jika belum login
        loginDanDaftar(); // tampilkan menu login dan daftar
    }
    else{
        gantiMenu(); // jika masih login, tampilkan menu username
    }

    $('#modal-daftar button[type="submit"]').click(function () {
        if( $('#modal-daftar input').val() !== ""){
            if( $("#input-password-daftar").val() !== $("#input-konf-password-daftar").val()){
                alert("Password tidak sama!");
            }
            else{
                localStorage.emailDaftar = $('#input-email-daftar').val();
                localStorage.unameDaftar = $('#input-username-daftar').val();
                localStorage.pwdDaftar = $('#input-password-daftar').val();
                $('#modal-daftar').modal('toggle');
            }
        }
        return false;
    });

    //jika tombol 'masuk' pada modal login ditekan
    $('#modal-login button[type="submit"]').click(function () {
        var uname = $('#input-username-login').val();
        var pwd = $('#input-password-login').val();

        if(uname !== "" && pwd !== ""){
            if( uname !== localStorage.unameDaftar && pwd !== localStorage.pwdDaftar){
                alert('Username atau password salah!');
                return false;
            }
            else{
                localStorage.email = localStorage.emailDaftar;
                localStorage.uname = localStorage.unameDaftar;
                localStorage.pwd = localStorage.pwdDaftar;

                if( $('#check-ingat-saya').prop('checked') ){
                    localStorage.ingatEmail = localStorage.email;
                    localStorage.ingatUname = localStorage.uname;
                    localStorage.ingatPwd = localStorage.pwd;
                }
                else{
                    localStorage.ingatEmail = "";
                    localStorage.ingatUname = "";
                    localStorage.ingatPwd = "";
                }
            }
        }
    });
})