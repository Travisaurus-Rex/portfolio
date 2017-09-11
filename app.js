$(document).ready(function() {

    var granimInstance1 = new Granim({
        element: '.granim-el1',
        name: 'granim',
        elToSetClassOn: 'body',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        opacity: [0.9, 0.9],
        stateTransitionSpeed: 1000,
        states : {
            "default-state": {
                gradients: [
                    ['#FF1C6F', '#FFCF4A'],
                    ['#FFCF4A', '#28FA71'],
                    ['#28FA71', '#28D7FA'],
                    ['#28D7FA', '#8D28FA'],
                    ['#8D28FA', '#FF1C6F']
                ],
                transitionSpeed: 5000,
                loop: true
            },
            "dark-state": {
                gradients: [
                    ['#757F9A', '#D7DDE8'],
                    ['#5C258D', '#4389A2']
                ],
                transitionSpeed: 5000,
                loop: true
            }
        },
        onStart: function() {

        },
        onGradientChange: function(colorDetails) {

        },
        onEnd: function() {

        }
    }
    );

    var granimInstance1 = new Granim({
        element: '.granim-el2',
        name: 'granim',
        elToSetClassOn: 'body',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        opacity: [1, 1],
        stateTransitionSpeed: 1000,
        states : {
            "default-state": {
                gradients: [
                    ['#FF1C6F', '#FFB01C'],
                    ['#FFB01C', '#28FA71'],
                    ['#28FA71', '#28D7FA'],
                    ['#28D7FA', '#8D28FA'],
                    ['#8D28FA', '#FF1C6F']
                ],
                transitionSpeed: 5000,
                loop: true
            },
            "dark-state": {
                gradients: [
                    ['#757F9A', '#D7DDE8'],
                    ['#5C258D', '#4389A2']
                ],
                transitionSpeed: 5000,
                loop: true
            }
        },
        onStart: function() {

        },
        onGradientChange: function(colorDetails) {

        },
        onEnd: function() {

        }
    }
    );

    $("#text-morph-first").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 5000,
        complete: function () {
            // Called after the entrance animation is executed.
            setTimeout(function() {
                $(".animated").removeClass('bounceIn');
                $(".animated").addClass('zoomOut');
            }, 4700)
        }
    });

    function getOffsetTop(id) {
        var el = $('#' + id);
        return el.offset().top;
    }

    function animateHeaderTextIn() {
        $('.intro').removeClass('fadeIn');
        $('.intro').addClass('fadeOut');
        setTimeout(function() {
            $('.intro').css('display', 'none')
        }, 150);
        $('#name-top-logo').css('display', 'inline-block');
        $('#name-top-logo').animate({
            top: 0,
            fontSize: '50px',
            opacity: 1
        }, 200);

        console.log('animateHeaderTextIn');
    }

    function animateHeaderTextOut() {
        $('.intro').css('display', 'block')
        $('.intro').removeClass('fadeOut');
        $('.intro').addClass('fadeIn');
        
        $('#name-top-logo').animate({
            top: '100px',
            fontSize: '80px',
            opacity: 0
        }, 200);

        setTimeout(function() {
            $('#name-top-logo').css('display', 'none');
        }, 250);
        console.log('animateHeaderTextOut');
    }

    function animateLogoIn() {
        $('.intro').css('display', 'block');
        $('.intro').removeClass('fadeOut');
        $('.intro').addClass('fadeIn');
    }

    function changeHeaderColor() {
        $('header nav a').animate({
            color: 'black'
        }, 250);
        $('#name-top-logo').css('color', 'black');
        $('header').css('background-color', 'white');
        $('header').css('box-shadow', '0 0 6px rgba(0,0,0,0.1)');
    }

    $('.button').click(function() {
        Animation.Scroller.scrollTo("about-me-section");
    })

    function scrollToSection(e) {
        e.preventDefault();
        var id = e.target.id + '-section';
        Animation.Scroller.scrollTo(id);
    }

    $('#home').click(scrollToSection);
    $('#about-me').click(scrollToSection);
    $('#work').click(scrollToSection);
    $('#contact').click(scrollToSection);

    var Animation = {
        Header: {
            bgColor: 'transparent',
            removeIn: function() {
                $('#home').removeClass('moveInRight');
                $('#about-me').removeClass('moveInRight');
                $('#work').removeClass('moveInLeft');
                $('#contact').removeClass('moveInLeft');
            },
            removeOut: function() {
                $('#home').removeClass('slide-up');
                $('#about-me').removeClass('slide-up');
                $('#work').removeClass('slide-up');
                $('#contact').removeClass('slide-up');
            },
            addIn: function() {
                $('#home').addClass('moveInRight');
                $('#about-me').addClass('moveInRight');
                $('#work').addClass('moveInLeft');
                $('#contact').addClass('moveInLeft');
            },
            addOut: function() {
                $('#home').addClass('slide-up');
                $('#about-me').addClass('slide-up');
                $('#work').addClass('slide-up');
                $('#contact').addClass('slide-up');
            },
            toggleHeaderColor: function() {
                var color, background;
                if (this.bgColor == 'transparent') {
                    background = 'white'
                    color = 'black';
                    this.bgColor = 'white';
                    $('#home').addClass('home-after');
                    $('#about-me').addClass('about-me-after');
                    $('#work').addClass('work-after');
                    $('#contact').addClass('contact-after');
                    $('header').css('box-shadow', '0 0 6px rgba(0,0,0,0.1)');
                } else {
                    color = 'white';
                    background = 'transparent'
                    this.bgColor = 'transparent';
                    $('#home').removeClass('home-after');
                    $('#about-me').removeClass('about-me-after');
                    $('#work').removeClass('work-after');
                    $('#contact').removeClass('contact-after');
                    $('header').css('box-shadow', 'none')
                }

                $('header').css('background-color', background);
                $('#name-top-logo').css('color', color);
            }
        },
        Scroller: {
            scrollTo: function(id) {
                var offset;
                if (id == 'about-me' || id == 'about-me-section') {
                    offset = 2;
                } else {
                    offset = -70;
                }
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: getOffsetTop(id) + offset + 'px'
                    }, 300);
                }, 250);
            }
        }
    }

    $('#name-top-logo').mouseover(function() {

        Animation.Header.removeOut();
        Animation.Header.addIn();

        $('#menu').animate({
            opacity: 0
        }, 250)
        $('header').mouseleave(function() {
            // make things go bye bye
            $('#menu').animate({
                opacity: 1
            }, 100);

            Animation.Header.addOut();
            Animation.Header.removeIn();
            
        })
    })

    var LogoVisible = true;
    var HeaderVisible = false;
    var HeaderWhite = true;

    window.addEventListener('scroll', function() {
        var el = document.querySelector("#about-me-section");
        var irrday = document.querySelector("#irrday");
        var spotter = document.querySelector("#spotter");
        var nocover = document.querySelector("#notbythecover");
        var groceryapp = document.querySelector("#groceryapp");
        var getmusic = document.querySelector("#getmusic");

        if (window.scrollY >= ((window.innerHeight / 2) - 150)) {
            if (LogoVisible) {
                animateHeaderTextIn();
                LogoVisible = !LogoVisible;
                $('.my-pic-container').removeClass('fadeOut');
                $('.my-pic-container').addClass('fadeIn');
            }
        }

        if (window.scrollY <= ((window.innerHeight / 2) - 150)) {
            if (!LogoVisible) {
                animateHeaderTextOut();
                LogoVisible = !LogoVisible;
                $('.my-pic-container').removeClass('fadeIn');
                $('.my-pic-container').addClass('fadeOut');
            }
        }

        if (window.scrollY >= el.offsetTop) {
            if (!HeaderVisible) {
                Animation.Header.toggleHeaderColor();
                HeaderVisible = !HeaderVisible;
            }
        }

        if (window.scrollY <= el.offsetTop) {
            if (HeaderVisible) {
                Animation.Header.toggleHeaderColor();
                HeaderVisible = !HeaderVisible;
            }
        }

        // irrday blurring
        if (window.scrollY >= irrday.offsetTop - (window.innerHeight / 3)) {
            irrday.classList.remove('blurWhite');
            irrday.classList.add('unblurWhite');
        }

        if (window.scrollY <= irrday.offsetTop - (window.innerHeight / 3)) {
            irrday.classList.remove('unblurWhite');
            irrday.classList.add('blurWhite');
        }

        // spotter blurring
        if (window.scrollY >= spotter.offsetTop - (window.innerHeight / 2)) {
            spotter.classList.remove('blurBlack');
            spotter.classList.add('unblurBlack');
        }

        if (window.scrollY <= spotter.offsetTop - (window.innerHeight / 2)) {
            spotter.classList.remove('unblurBlack');
            spotter.classList.add('blurBlack');
        }

        // nocover blurring
        if (window.scrollY >= nocover.offsetTop - (window.innerHeight / 2)) {
            nocover.classList.remove('blurWhite');
            nocover.classList.add('unblurWhite');
        }

        if (window.scrollY <= nocover.offsetTop - (window.innerHeight / 2)) {
            nocover.classList.remove('unblurWhite');
            nocover.classList.add('blurWhite');
        }

        // getmusic blurring
        if (window.scrollY >= getmusic.offsetTop - (window.innerHeight / 2)) {
            getmusic.classList.remove('blurBlack');
            getmusic.classList.add('unblurBlack');
        }

        if (window.scrollY <= getmusic.offsetTop - (window.innerHeight / 2)) {
            getmusic.classList.remove('unblurBlack');
            getmusic.classList.add('blurBlack');
        }

        // groceryapp blurring
        if (window.scrollY >= groceryapp.offsetTop - (window.innerHeight / 2)) {
            groceryapp.classList.remove('blurWhite');
            groceryapp.classList.add('unblurWhite');
        }

        if (window.scrollY <= groceryapp.offsetTop - (window.innerHeight / 2)) {
            groceryapp.classList.remove('unblurWhite');
            groceryapp.classList.add('blurWhite');
        }


    })

    function sendEmail() {


        $.ajax({
            url: "https://formspree.io/baolongrex@gmail.com", 
            method: "POST",
            data: {message: "hello!"},
            dataType: "json"
        });
    }

    function checkForm(e) {
        var id = e.target.id;
        switch(id) {
            case 'name':
                nameValid = checkValidity(e.target.value);
                if (nameValid) {
                    name.classList.add('input-valid');
                }
                break;
            case 'email':
                emailValid = checkValidity(e.target.value);
                if (emailValid) {
                    email.classList.add('input-valid');
                }
                break;
            case 'message':
                messageValid = checkValidity(e.target.value);
                if (messageValid) {
                    message.classList.add('input-valid');
                }
            default:
                // nothing to do here
                break;
        }
        if (validateForm()) {
            if ($('#submit').hasClass('submit-not-ready')) {
                $('#submit').removeClass('submit-not-ready').addClass('submit-ready');
            }
            submit.classList.add('submit-ready');
        } else {
            if ($('#submit').hasClass('submit-ready')) {
                $('#submit').removeClass('submit-ready').addClass('submit-not-ready');
            }
        }
    }

    function checkValidity(value) {
        var bool;
        if (value) {
            bool = true;
        } else {
            bool = false;
        }

        return bool;
    }

    function slideUpLabel(e) {
        var id = e.target.id;

        if (id == 'name') {
            nameLabel.classList.add('label-slide-up');
            nameLabel.classList.remove('label-slide-down');
        } else if (id == 'email') {
            emailLabel.classList.add('label-slide-up');
            emailLabel.classList.remove('label-slide-down');
        } else {
            messageLabel.classList.add('label-slide-up');
            messageLabel.classList.remove('label-slide-down');
        }
    }

    function slideDownLabel(e) {
        var id = e.target.id;

        if (id == 'name' && e.target.value.length === 0) {
            nameLabel.classList.remove('label-slide-up');
            nameLabel.classList.add('label-slide-down');
            name.classList.remove('input-valid');
        } else if (id == 'email' && e.target.value.length === 0) {
            emailLabel.classList.remove('label-slide-up');
            emailLabel.classList.add('label-slide-down');
            email.classList.remove('input-valid');
        } else if (id == 'message' && e.target.value.length === 0) {
            messageLabel.classList.remove('label-slide-up');
            messageLabel.classList.add('label-slide-down');
            message.classList.remove('input-valid');
        }
    }


    var name      = document.querySelector('#name'),
        nameLabel = document.querySelector('#name-label'),
        nameValid = false;

    var email      = document.querySelector('#email'),
        emailLabel = document.querySelector('#email-label'),
        emailValid = false;

    var message      = document.querySelector('#message'),
        messageLabel = document.querySelector('#message-label'),
        messageValid = false;

    var form = document.querySelector('#contact-form');

    var submit = document.querySelector('#submit');

    name.addEventListener('keyup', checkForm);
    email.addEventListener('keyup', checkForm);
    message.addEventListener('keyup', checkForm);

    name.addEventListener('focus', slideUpLabel);
    email.addEventListener('focus', slideUpLabel);
    message.addEventListener('focus', slideUpLabel);

    name.addEventListener('blur', slideDownLabel);
    email.addEventListener('blur', slideDownLabel);
    message.addEventListener('blur', slideDownLabel);

    function validateForm() {
        var bool = false;
        if (nameValid && emailValid && messageValid) {
            bool = true;
        } else {
            bool = false;
        }

        return bool;
    }

    submit.addEventListener('click', function(e) { 
        e.preventDefault();
        if (validateForm()) {


            $('.contact-h1').addClass('fadeOut');
            $('#contact-form').addClass('fadeOut');

            setTimeout(function() {
                $('.contact-h1').css('z-index', '-25');
                $('#contact-form').css('z-index', '-25');
                $('.spinner').css('display', 'block');
                $('.spinner').removeClass('fadeOut');
                $('.spinner').addClass('fadeIn');
            }, 150);

            //var rand = Math.random();
            
            if (/*rand < 0.5*/ false) {
                setTimeout(function() {
                    $('.spinner').removeClass('fadeIn');
                    $('.spinner').addClass('fadeOut');
                    $('.success-message').css('display', 'block');
                    $('.success-message').addClass('fadeIn');
                    setTimeout(function() {
                        $('.spinner').css('display', 'block');
                    }, 150);
                }, 3000);
            } else {
                setTimeout(function() {
                    $('.spinner').removeClass('fadeIn');
                    $('.spinner').addClass('fadeOut');
                    $('.contact-h1').html('Something went wrong. Why don\'t you try again?');
                    $('.contact-h1').css('z-index', '25');
                    $('#contact-form').css('z-index', '25');
                    $('.contact-h1').removeClass('fadeOut');
                    $('#contact-form').removeClass('fadeOut');
                    $('.contact-h1').addClass('fadeIn');
                    $('.contact-h1').addClass('error-message');
                    $('#contact-form').addClass('fadeIn');
                    setTimeout(function() {
                        $('.spinner').css('display', 'block');
                    }, 150);
                }, 3000);
            }
            /*

            $.ajax({
                url: "https://formspree.io/baolongrex@gmail.com",
                method: 'POST',
                data: $(form).serialize(),
                dataType: 'json',
                beforeSend: function() {
                    //$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
                },
                success: function(data) {

                },
                error: function(err) {

                }
            });

            */
        } else {
            $('.input-submit').addClass('impatient');
            setTimeout(function() {
                $('.input-submit').removeClass('impatient');
            }, 3000);
        }
    });
})