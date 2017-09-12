var width = 100, // width of a progress bar in percentage
    perfData = window.performance.timing, // The PerformanceTiming interface
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart), // Calculated Estimated Time of Page Load which returns negative value.
    time = parseInt((EstimatedTime/1000)%60)*100;

    console.log(time);


    $('.shrinker').animate({
        width: '0%'
    }, time, 'linear', function() {
        $('#progress-bar-div').addClass('fadeOut');
        setTimeout(function() {
            $('#progress-bar-div').css('display', 'none');
        }, 300);
    });

$(window).on('load', function() {

    var granimInstance1 = new Granim({
        element: '.granim-el1',
        name: 'granim',
        elToSetClassOn: 'body',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        opacity: [1, 1],
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
            },
            animateHeaderTextIn: function() {
                Animation.Header.animateLogoOut();
                $('#name-top-logo').css('display', 'inline-block');
                $('#name-top-logo').animate({
                    top: 0,
                    fontSize: '50px',
                    opacity: 1
                }, 200);
            },

            animateHeaderTextOut: function () {
                Animation.Header.animateLogoIn();
                
                $('#name-top-logo').animate({
                    top: '100px',
                    fontSize: '80px',
                    opacity: 0
                }, 200);

                setTimeout(function() {
                    $('#name-top-logo').css('display', 'none');
                }, 250);
            },

            animateLogoIn: function () {
                $('.intro').css('display', 'block');
                $('.intro').removeClass('fadeOut');
                $('.intro').addClass('fadeIn');
            },

            animateLogoOut: function() {
                $('.intro').removeClass('fadeIn');
                $('.intro').addClass('fadeOut');
                setTimeout(function() {
                    $('.intro').css('display', 'none');
                }, 250);
            },

            changeHeaderColor: function () {
                $('header nav a').animate({
                    color: 'black'
                }, 250);
                $('#name-top-logo').css('color', 'black');
                $('header').css('background-color', 'white');
            },

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
                        scrollTop: Animation.Scroller.getOffsetTop(id) + offset + 'px'
                    }, 300);
                }, 250);
            },

            scrollToSection: function (e) {
                e.preventDefault();
                var id = e.target.id + '-section';
                Animation.Scroller.scrollTo(id);
            },

            getOffsetTop: function (id) {
                var el = $('#' + id);
                return el.offset().top;
            },
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
    var browserWidth;

    function getWidthOfWindow() {
        return window.innerWidth;
    }

    function updateBrowserWidth() {
        browserWidth = getWidthOfWindow();
        console.log(browserWidth);
    }

    window.addEventListener('resize', updateBrowserWidth);

    window.addEventListener('scroll', function() {
        var el = document.querySelector("#about-me-section");
        var irrday = document.querySelector("#irrday");
        var spotter = document.querySelector("#spotter");
        var nocover = document.querySelector("#notbythecover");
        var groceryapp = document.querySelector("#groceryapp");
        var getmusic = document.querySelector("#getmusic");

        if (browserWidth > 1000) {

            if (window.scrollY >= ((window.innerHeight / 2) - 150)) {
                if (LogoVisible) {
                    Animation.Header.animateHeaderTextIn();
                    LogoVisible = !LogoVisible;
                    $('.my-pic-container').removeClass('fadeOut');
                    $('.my-pic-container').addClass('fadeIn');
                }
            }

            if (window.scrollY <= ((window.innerHeight / 2) - 150)) {
                if (!LogoVisible) {
                    Animation.Header.animateHeaderTextOut();
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
        } else {

            irrday.classList.remove('blurWhite');
            spotter.classList.remove('blurBlack');
            nocover.classList.remove('blurWhite');
            getmusic.classList.remove('blurBlack');
            groceryapp.classList.remove('blurWhite');

            if (window.scrollY >= ((window.innerHeight / 2) - 150)) {
                if (LogoVisible) {
                    Animation.Header.animateLogoOut();
                    LogoVisible = !LogoVisible;
                    $('.my-pic-container').removeClass('fadeOut');
                    $('.my-pic-container').addClass('fadeIn');
                    console.log('animateLogoOut should fire here');
                    console.log("LogoVisible: " + LogoVisible);
                }
            }

            if (window.scrollY <= ((window.innerHeight / 2) - 150)) {
                    console.log(LogoVisible);
                    if (!LogoVisible) {
                        Animation.Header.animateLogoIn();
                        LogoVisible = !LogoVisible;
                        $('.my-pic-container').removeClass('fadeIn');
                        $('.my-pic-container').addClass('fadeOut');
                        console.log('animateLogoOIn should fire here');
                    }
                }
        }

    });

    var FormClass = {
            Validation: {
                checkForm: function (e) {
                    var id = e.target.id;
                    switch(id) {
                        case 'name':
                            FormClass.nameValid = FormClass.Validation.checkValidity(e.target.value);
                            if (FormClass.nameValid) {
                                FormClass.name.classList.add('input-valid');
                            }
                            break;
                        case 'email':
                            FormClass.emailValid = FormClass.Validation.checkValidity(e.target.value);
                            if (FormClass.emailValid) {
                                FormClass.email.classList.add('input-valid');
                            }
                            break;
                        case 'message':
                            FormClass.messageValid = FormClass.Validation.checkValidity(e.target.value);
                            if (FormClass.messageValid) {
                                FormClass.message.classList.add('input-valid');
                            }
                        default:
                            // nothing to do here
                            break;
                    }
                    if (FormClass.Validation.validateForm()) {
                        if ($('#submit').hasClass('submit-not-ready')) {
                            $('#submit').removeClass('submit-not-ready').addClass('submit-ready');
                        }
                        submit.classList.add('submit-ready');
                    } else {
                        if ($('#submit').hasClass('submit-ready')) {
                            $('#submit').removeClass('submit-ready').addClass('submit-not-ready');
                        }
                    }
                },

                checkValidity: function (value) {
                    var bool;
                    if (value) {
                        bool = true;
                    } else {
                        bool = false;
                    }
                    return bool;
                },

                validateForm: function () {
                    var bool = false;
                    if (FormClass.nameValid && FormClass.emailValid && FormClass.messageValid) {
                        bool = true;
                    } else {
                        bool = false;
                    }

                    return bool;
                }
            },

            Animation: {

                slideUpLabel: function (e) {
                    var id = e.target.id;

                    if (id == 'name') {
                        FormClass.nameLabel.classList.add('label-slide-up');
                        FormClass.nameLabel.classList.remove('label-slide-down');
                    } else if (id == 'email') {
                        FormClass.emailLabel.classList.add('label-slide-up');
                        FormClass.emailLabel.classList.remove('label-slide-down');
                    } else {
                        FormClass.messageLabel.classList.add('label-slide-up');
                        FormClass.messageLabel.classList.remove('label-slide-down');
                    }
                },

                slideDownLabel: function (e) {
                    var id = e.target.id;

                    if (id == 'name' && e.target.value.length === 0) {
                        FormClass.nameLabel.classList.remove('label-slide-up');
                        FormClass.nameLabel.classList.add('label-slide-down');
                        FormClass.name.classList.remove('input-valid');
                    } else if (id == 'email' && e.target.value.length === 0) {
                        FormClass.emailLabel.classList.remove('label-slide-up');
                        FormClass.emailLabel.classList.add('label-slide-down');
                        FormClass.email.classList.remove('input-valid');
                    } else if (id == 'message' && e.target.value.length === 0) {
                        FormClass.messageLabel.classList.remove('label-slide-up');
                        FormClass.messageLabel.classList.add('label-slide-down');
                        FormClass.message.classList.remove('input-valid');
                    }
                }

            },

            form         : document.querySelector('#contact-form'),

            name         : document.querySelector('#name'),
            nameLabel    : document.querySelector('#name-label'),
            nameValid    : false,

            email        : document.querySelector('#email'),
            emailLabel   : document.querySelector('#email-label'),
            emailValid   : false,

            message      : document.querySelector('#message'),
            messageLabel : document.querySelector('#message-label'),
            messageValid : false,

            submit       : document.querySelector('#submit'),

    };

    (function ($) {

        $('.button').click(function() {
            Animation.Scroller.scrollTo("about-me-section");
        })

        $('#irrday_button').click(function(e) {
            console.log(e.target.id);
            $('#irrday .description-container').css('z-index', 15);
            $("#irrday .description-container").animate({
                opacity: 1
            }, 250);
        });

        $('#spotter_button').click(function(e) {
            console.log(e.target.id);
            $('#spotter .description-container').css('z-index', 15);
            $("#spotter .description-container").animate({
                opacity: 1
            }, 250);
        });

        $('#notbythecover_button').click(function(e) {
            $("#notbythecover .description-container").css('z-index', 15);
            $("#notbythecover .description-container").animate({
                opacity: 1
            }, 250);
        });

        $('#getmusic_button').click(function(e) {
            $("#getmusic .description-container").css('z-index', 15);
            $("#getmusic .description-container").animate({
                opacity: 1
            }, 250);
        });

        $('#groceryapp_button').click(function(e) {
            $("#groceryapp .description-container").css('z-index', 15);
            $("#groceryapp .description-container").animate({
                opacity: 1
            }, 250);
        });

        $('#home').click(Animation.Scroller.scrollToSection);
        $('#about-me').click(Animation.Scroller.scrollToSection);
        $('#work').click(Animation.Scroller.scrollToSection);
        $('#contact').click(Animation.Scroller.scrollToSection);

        FormClass.name.addEventListener('keyup', FormClass.Validation.checkForm);
        FormClass.email.addEventListener('keyup', FormClass.Validation.checkForm);
        FormClass.message.addEventListener('keyup', FormClass.Validation.checkForm);

        FormClass.name.addEventListener('focus', FormClass.Animation.slideUpLabel);
        FormClass.email.addEventListener('focus', FormClass.Animation.slideUpLabel);
        FormClass.message.addEventListener('focus', FormClass.Animation.slideUpLabel);

        FormClass.name.addEventListener('blur', FormClass.Animation.slideDownLabel);
        FormClass.email.addEventListener('blur', FormClass.Animation.slideDownLabel);
        FormClass.message.addEventListener('blur', FormClass.Animation.slideDownLabel);

        FormClass.submit.addEventListener('click', function(e) { 
            e.preventDefault();
            if (FormClass.Validation.validateForm()) {

                $.ajax({
                    url: "https://formspree.io/baolongrex@gmail.com",
                    method: 'POST',
                    data: $(FormClass.form).serialize(),
                    dataType: 'json',
                    beforeSend: function() {
                        $('.contact-h1').addClass('fadeOut');
                        $('#contact-form').addClass('fadeOut');

                        setTimeout(function() {
                            $('.contact-h1').css('z-index', '-25');
                            $('#contact-form').css('z-index', '-25');
                            $('.spinner').css('display', 'block');
                            $('.spinner').removeClass('fadeOut');
                            $('.spinner').addClass('fadeIn');
                        }, 150);
                    },
                    success: function(data) {
                        setTimeout(function() {
                        $('.spinner').removeClass('fadeIn');
                        $('.spinner').addClass('fadeOut');
                        $('.success-message').css('display', 'block');
                        $('.success-message').addClass('fadeIn');
                        setTimeout(function() {
                            $('.spinner').css('display', 'block');
                        }, 150);
                    }, 3000);
                    },
                    error: function(err) {
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
                        console.log(err);
                    }
                });
            } else {
                $('.input-submit').addClass('impatient');
                setTimeout(function() {
                    $('.input-submit').removeClass('impatient');
                }, 3000);
            }
        });
        updateBrowserWidth()
        return browserWidth;
    })(jQuery);

    console.log(browserWidth);

})