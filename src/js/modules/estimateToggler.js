const toggler = document.querySelector('.cart-form__toggler');
const content = document.querySelector('.cart-form__estimate-inner');

toggler.addEventListener('click', function () {
  toggler.classList.toggle('is-active');
  content.classList.toggle('is-open');

  if (content.classList.contains('is-open')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = null;
  }
});
