$(function () {
    $('.animate').textillate({
        in: {
            effect: 'fadeInDown',

            // set the delay factor applied to each consecutive character
            delayScale: 1.5,

            // set the delay between each character
            delay: 1000,
            callback: function () {
                //음악 플레이하기
            }
        }
    });
    $('.animate2').textillate({
        in: {
            effect: 'fadeInLeft',

            // set the delay factor applied to each consecutive character
            delayScale: 1.5,

            // set the delay between each character
            delay: 1000,
        }
    });
})