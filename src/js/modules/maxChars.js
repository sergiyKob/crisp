// забороняє вводити з клавіатури більше вказаних символів //
const input = document.querySelectorAll('[data-counter]');
// кількість символів
const maxChars = 2;

input.forEach(function (item) {
  item.addEventListener('keydown', function () {
    if (this.value.length >= maxChars) {
      this.value = this.value.substr(0, maxChars);
    }
  });

  item.addEventListener('keyup', function () {
    if (this.value.length >= maxChars) {
      this.value = this.value.substr(0, maxChars);
    }
  });
});
// -------------------------------------------- //

export default maxChars;
