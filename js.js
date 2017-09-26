$(function () {
    console.log('Hej');
    setTimeout(function () {
        $('.gudni').addClass('shake-slow').addClass('shake-constant');
        setTimeout(function () {
            $('.gudni').removeClass('shake-slow').addClass('shake-crazy');
        }, 120000)
    }, 120000)

    $(document).on('click', '.gudni', function () {
        if ($(this).attr('src') == "IMG_0449.JPG") {
            $(this).attr('src', "IMG_0547.JPG");
        } else {
            $(this).attr('src', "IMG_0449.JPG");
        }
    });
});