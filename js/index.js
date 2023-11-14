$(document).ready(function () {

    scrollAnimaion();
    scrollSpy();
})

const scrollAnimaion = () => {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);

        }
    });
}

const scrollSpy = () => {
    var sectionIds = $('a');

    $(document).scroll(function () {
        sectionIds.each(function () {

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop() + 70;

            if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
                $(this).parent().addClass('active');
            } else {
                $(this).parent().removeClass('active');
            }


        });
    });
}

