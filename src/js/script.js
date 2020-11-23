$(document).ready(function(){
    $("#phone").mask("8(999) 999-9999");
    $(function() {
        $("#date").mask("99.99.9999", {placeholder: "dd/mm/yyyy" });
    });
    $('ul.menu__links').on('click', 'li:not(.menu__link_active)', function() {
        $(this)
            .addClass('menu__link_active').siblings().removeClass('menu__link_active')
            .closest('div.container').find('div.menu__content').removeClass('menu__content_active').eq($(this).index()).addClass('menu__content_active');
    });
    $('[data-modal=book]').on('click',function () {
        $('.overlay ,#book').fadeIn()

    });
    $('[data-modal=message]').on('click',function () {
        $('.overlay ,#message').fadeIn()

    });
    $('.modal__close').on('click', function () {
       $('.overlay,#book,#message').fadeOut()

    });




    $(function () {
        $("#time").mask("99:99" );
    });
    $(function() {
        $("#telephone").mask("8(999) 999-9999");
    });

    $('ul.menu__links').on('click', 'li:not(.menu__link_active)', function() {
        $(this)
            .addClass('menu__link_active').siblings().removeClass('menu__link_active')
            .closest('div.container').find('div.menu__contain').removeClass('menu__contain_active').eq($(this).index()).addClass('menu__contain_active');
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >800){
            $('.pageup').fadeIn()
        }else
            $('.pageup').fadeOut()

    });

    window.addEventListener('DOMContentLoaded', () => {
        const header__nav = document.querySelector('.header__nav')
        header__link = document.querySelectorAll('.header__link')
        hamburger = document.querySelector('.hamburger')

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active')
            header__nav.classList.toggle('header__nav_active')
        })
        header__link.forEach( item => {
            link.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active')
                header__nav.classList.toggle('header__nav_active')
            })
        })
    });


    $(function(){
        $('.carousel__inner').slick({
            autoplay: true,
            speed: 1200,
            prevArrow: '<button type="button" class="slick-prev"> < </button>',
            nextArrow: '<button type="button" class="slick-next"> > </button>'
        });
    });
});
