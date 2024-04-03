const filterBtn = document.querySelector('.filter-mobile-btn');
const sidebar = document.querySelector('.catalog__sidebar');

filterBtn.addEventListener('click', function () {
  filterBtn.classList.toggle('is-active');
  sidebar.classList.toggle('is-open');
});

export default filterBtn;
