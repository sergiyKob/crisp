const accordionFooterBtn = document.querySelectorAll('[data-title="accordionFooterBtn"]');

accordionFooterBtn.forEach(function (item) {
  item.addEventListener('click', showContent);
  function showContent() {
    this.classList.toggle('is-active');
    this.nextElementSibling.classList.toggle('is-open');
  }
});

export default accordionFooterBtn;
