// знахожу обгортку для картки товару в корзині, куди будуть добавлятись картки
const cartWrapper = document.querySelector('.mini-cart__list');
let itemsCartHeader = document.querySelector('.header__cart-qty span');
let itemsPriceHeader = document.querySelector('.header__cart-price span');
let subtotalCart = document.querySelector('.mini-cart__price span');


// відслідковую клік по кнопці "add to bag"
window.addEventListener('click', function (event) {
    if (event.target.closest('[data-cart]')) {
        //шукаю карточку з товаром в середині якої був клік
        const card = event.target.closest('.product');

        // збираю дані з цієї картки в один обєкт
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('[data-img]').getAttribute('src'),
            title: card.querySelector('.product__title').innerText,
            size: card.querySelector('.size-product__link--current').innerText,
            code: card.querySelector('.product__code').innerText,
            counter: card.querySelector('[data-counter]').value,
            price: card.querySelector('[data-price]').innerText,
            color: card.querySelector('.color-selection__link--current').getAttribute('style'),
        };

        console.log(productInfo.color);

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
                                        ${productInfo.size}
                                    </div>
                                    <div class="mini-cart-card__code">
                                        <span class="mini-cart-card__details-label">Art.No.:</span>
                                        ${productInfo.code}
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


});