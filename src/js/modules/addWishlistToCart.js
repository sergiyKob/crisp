// знахожу обгортку для картки товару в корзині, куди будуть добавлятись картки
const cartWrapper = document.querySelector('.mini-cart__list');

// відслідковую клік по сторінці
window.addEventListener('click', function (event) {
  //перевіряю чи клік був по кнопці "добавити в корзину"
  if (event.target.hasAttribute('data-cart')) {
    //шукаю карточку з товаром в середині якої був клік
    const card = event.target.closest('.wishlist-card');
    // збираю дані з цієї картки в один обєкт
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.wishlist-card__img img').getAttribute('src'),
      title: card.querySelector('.wishlist-card__title').innerText,
      price: card.querySelector('.wishlist-card__price').innerText,
      counter: card.querySelector('[data-counter]').value,
    };

    // зібрані дані підставляємо в шаблон товару в корзині
    const cartItemHtml = `  <li class="mini-cart__item">
                    <article class="mini-cart-card" data-id=${productInfo.id}>
                        <div class="mini-cart-card__inner">
                            <div class="mini-cart-card__img">
                                <img src="${productInfo.imgSrc}" width="83" height="103" alt="${productInfo.title}">
                            </div>
                            <div class="mini-cart-card__body">
                                <a class="mini-cart-card__title" href="/product.html"
                                    title="${productInfo.title}">
                                    ${productInfo.title}
                                </a>
                                <div class="mini-cart-card__details">
                                    <div class="mini-cart-card__size">
                                        <span class="mini-cart-card__details-label">Size:</span>
                                        W31/L34
                                    </div>
                                    <div class="mini-cart-card__code">
                                        <span class="mini-cart-card__details-label">Art.No.:</span>
                                        434536465
                                    </div>
                                    <div class="mini-cart-card__row">
                                        <div class="mini-cart-card__quantity">${productInfo.counter}</div>
                                        <div class="mini-cart-card__price">${productInfo.price}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="mini-cart-card__actions">
                                <button class="btn btn--edit" aria-label="delete" title="delete">
                                    <svg width="10" height="10">
                                        <use xlink:href="img/sprite.svg#icon-close"></use>
                                    </svg>
                                </button>
                                <button class="btn btn--edit" aria-label="edit" title="edit">
                                    <svg width="10" height="10">
                                        <use xlink:href="img/sprite.svg#icon-pen"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                </li>`;

    // відображаю товар в корзині
    cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
  }
});
