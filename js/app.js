document.addEventListener('DOMContentLoaded', () => {

    var twoDaysFromNow = 1647790406;

    var flipdown = new FlipDown(twoDaysFromNow, {
            headings: ["روز", "ساعت", "دقیقه", "ثانیه"]
        })
        .start()

        .ifEnded(() => {
            console.log('The countdown has ended!');
        });
});