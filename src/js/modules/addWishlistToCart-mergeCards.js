// знахожу обгортку для картки товару в корзині, куди будуть добавлятись картки
const cartWrapper = document.querySelector('.mini-cart__list');
let itemsCartHeader = document.querySelector('.header__cart-qty span');
let itemsPriceHeader = document.querySelector('.header__cart-price span');
let subtotalCart = document.querySelector('.mini-cart__price span');

// відслідковую клік по сторінці
window.addEventListener('click', function (event) {
  //перевіряю чи клік був по кнопці "добавити в корзину"
  if (event.target.closest('.wishlist-card__btn')) {
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

    // вивожу дані про ціну і кількісь в хедер
    const itemSumm = parseInt(productInfo.price) * parseInt(productInfo.counter);

    itemsCartHeader.innerText = parseInt(itemsCartHeader.innerText) + parseInt(productInfo.counter);
    itemsPriceHeader.innerText = parseInt(itemsPriceHeader.innerText) + itemSumm;

    // вивожу ціну subtotal в корзині
    subtotalCart.innerText = parseInt(itemsPriceHeader.innerText);

    // перевіряю чи є такий товар вже в корзині
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

    // якщо товар є в корзині
    if (itemInCart) {
      const counterElement = itemInCart.querySelector('.mini-cart-card__quantity');
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      // якщо немає такого товару в корзині, зібрані дані підставляємо в шаблон товару в корзину
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
                                <button class="btn btn--edit" aria-label="delete" title="delete" data-delete>
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

    // Скидаємо counter на "1", після добавлення товару в корзину
    card.querySelector('[data-counter]').value = '1';
  }

  //видалення товару з корзини
  if (event.target.closest('.mini-cart__item')) {
    if (event.target.closest('[data-delete]')) {
      // знахожу картку, кількісь і ціну в корзині
      const cardInCart = event.target.closest('.mini-cart-card');
      const itemInCartPrice = cardInCart.querySelector('.mini-cart-card__price');
      const itemInCartCounter = cardInCart.querySelector('.mini-cart-card__quantity');
      // віднімаю суму в хедері при видаленні картки з корзини
      const itemInCartSumm =
        parseInt(itemInCartCounter.innerText) * parseInt(itemInCartPrice.innerText);
      itemsPriceHeader.innerText = parseInt(itemsPriceHeader.innerText) - itemInCartSumm;
      // віднімаю кількість товару в хедері при видаленні картки з корзини
      itemsCartHeader.innerText =
        parseInt(itemsCartHeader.innerText) - parseInt(itemInCartCounter.innerText);
      // віднімаю суму в subtotal
      subtotalCart.innerText = parseInt(subtotalCart.innerText) - itemInCartSumm;

      event.target.closest('.mini-cart__item').remove();
    }
  }

  // delete wishlist card
  if (event.target.closest('.wishlist')) {
    if (event.target.closest('[data-delete]')) {
      event.target.closest('.wishlist__item').remove();
    }
  }
});
