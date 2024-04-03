// добавляю прослушку на все вікно

window.addEventListener('click', function (event) {
  if (event.target.dataset.action === 'plus') {
    const counterWrapper = event.target.closest('.counter');
    const counter = counterWrapper.querySelector('.counter__input');

    if (counter.value <= 98) {
      counter.value = ++counter.value;
    }
  }

  if (event.target.dataset.action === 'minus') {
    const counterWrapper = event.target.closest('.counter');
    const counter = counterWrapper.querySelector('.counter__input');

    if (counter.value > 1) {
      counter.value = --counter.value;
    }
  }
});

// забороняє вводити з клавіатури більше 2 чисел //
const input = document.querySelector('.counter__input');
const maxChars = 2;
input.addEventListener('keydown', function () {
  if (this.value.length >= maxChars) {
    this.value = this.value.substr(0, maxChars);
  }
});
input.addEventListener('keyup', function () {
  if (this.value.length >= maxChars) {
    this.value = this.value.substr(0, maxChars);
  }
});
// -------------------------------------------- //
