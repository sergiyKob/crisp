const showMore = document.querySelector('.categories__btn');
const categoriesItemLength = document.querySelectorAll('.categories__item').length;
let items = 8;

showMore.addEventListener('click', () => {
  items += 4;
  const array = Array.from(document.querySelector('.categories__list').children);
  const visibleItems = array.slice(0, items);

  visibleItems.forEach((el) => el.classList.add('is-visible'));

  if (visibleItems.length === categoriesItemLength) {
    showMore.style.display = 'none';
  }
});
