const btn = document.querySelector('[data-btn="btn"]');
const content = document.querySelector('[data-content="content"]');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', () => {
    if (content.classList.toggle('visible')) {
        btn.textContent = "Сховати"
    } else {
        btn.textContent = "Показати"
    }
    overlay.classList.toggle('active');
})
overlay.addEventListener('click', () => {
    btn.textContent = "Показати"
    content.classList.remove('visible');
    overlay.classList.remove('active');
})
