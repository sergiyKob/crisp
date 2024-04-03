const filterTitle = document.querySelectorAll('[data-title="filter-title"]');

filterTitle.forEach(function (item) {
  item.addEventListener('click', showContent);
  function showContent() {
    this.classList.toggle('is-active');
    this.nextElementSibling.classList.toggle('is-open');
  }
});
