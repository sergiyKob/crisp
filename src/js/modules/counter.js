const btnMinus = document.querySelector('.counter__btn--minus');
const btnPlus = document.querySelector('.counter__btn--plus');
const input = document.querySelector('.counter__input');

btnMinus.addEventListener('click', function () {
  if (input.value > 1) {
    input.value = --input.value;
  }
});

btnPlus.addEventListener('click', function () {
  if (input.value <= 98) {
    input.value = ++input.value;
  }
});
