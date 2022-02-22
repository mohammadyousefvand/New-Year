document.addEventListener('DOMContentLoaded', () => {

    var twoDaysFromNow = 1647790406;

    var flipdown = new FlipDown(twoDaysFromNow, {
            headings: ["روز", "ساعت", "دقیقه", "ثانیه"]
        })
        .start()

        .ifEnded(() => {
            let year_title = document.querySelector('.year-title')
            document.body.style.backgroundImage = 'url(images/spring.jpg)'
            year_title.innerHTML = 'عید شما مبارک 😃🎉'
            window.onresize = () => {
                let bodyWidth = getComputedStyle(document.body)
                let widthValue = parseInt(bodyWidth.width)

                if (widthValue < 500) {
                    document.body.style.backgroundImage = 'url(images/spring-mobile.jpg)'
                } else {
                    document.body.style.backgroundImage = 'url(images/spring.jpg)'
                }
            }
        });
});