const popupButtons = document.querySelectorAll('[data-popup-btn]');
const popupClose = document.querySelectorAll('[data-popup-close]');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.body');


popupButtons.forEach(function (item) {
    item.addEventListener('click', function () {
        const popupId = this.dataset.popupBtn;
        const popup = document.querySelector('#' + popupId);
        popup.classList.toggle('is-open');
        overlay.classList.toggle('is-active');
        body.classList.add('lock');

        popupClose.forEach(function (item) {
            item.addEventListener('click', function () {
                popup.classList.remove('is-open');
                overlay.classList.remove('is-active');
                body.classList.remove('lock');
            });
        });

        overlay.addEventListener('click', function () {
            popup.classList.remove('is-open');
            overlay.classList.remove('is-active');
            body.classList.remove('lock');

        });
    });
});