const accordionBtn = document.querySelectorAll('[data-title="accordion-btn"]');

accordionBtn.forEach(function (item) {
    item.addEventListener('click', showContent);
    function showContent() {
        this.classList.toggle('accordion__btn--active');
        this.nextElementSibling.classList.toggle('accordion__content--open')
    }
  
})

export default accordionBtn;