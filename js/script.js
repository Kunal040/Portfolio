
$(document).ready(function () {

    $("a").on('click', function (event) {


        if (this.hash !== "") {

            event.preventDefault();


            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {


                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 10 && scroll < 300) {
            $('#_header').addClass('show');
        }
        else {
            $('#_header').removeClass('show');
        }

    });
    $('.top-links a li').click(function (e) {
        $('.top-links a').removeClass('active');
        $(e.currentTarget).parent('a').addClass('active');

    });

    $('#submit').click(function (e) {
        e.preventDefault();
        var name = "";
        var email = "";
        var message = "";
        name = $('#name').val();
        email = $('#email').val();
        message = $('#message').val();
        var contact_info = `<h3>Name: </h3>` + name + `<br><h3>Email: </h3>` + email + `<br><h3>Message: </h3>` + message;
        if (name == "" || email == "" || message == "") {

            return false;
        }
        else {

            $.ajax({
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    'key': 'wQqfq3yCxLwoMSmmJ6WcOQ',
                    'message': {
                        'from_email': 'admin@himankpathak.me',
                        'to': [
                            {
                                'email': 'phitur040@gmail.com',
                                'name': 'Kunal Khoche',
                                'type': 'to'
                            }
                        ],
                        'autotext': 'true',
                        'subject': 'Website Email',
                        'html': `<h1>WEBSITE EMAIL</h1>` + contact_info
                    }
                }
            });
            // 
            // 
            // 
            // 


            $('.thanknote').fadeIn(500, function () {
                $(this).addClass('up');
            });


            $('.thanknote').delay(3500).slideDown(500, function () {
                $(this).removeClass('up');
                $(this).fadeOut(1000);
                $(this).css('transform', 'translateY(150px)');
            });

        }
    });


});



