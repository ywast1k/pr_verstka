const cart = [];


function addToCart(item) {
    cart.push(item);
    console.log('Товар добавлен в корзину:', item);
    // Сохраняем корзину в Local Storage, чтобы использовать на другой части сайта
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Функция для получения товаров из корзины
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
