const data = JSON.parse(dataInfo);
const cartBox = document.querySelector('.cart-box');

data.forEach(element => {
    const bodyEl = document.createElement('div');
    bodyEl.classList.add('bodyContent'); // Добавляем класс container

    const itemImg = document.createElement('img');
    itemImg.src = element.url;
    itemImg.alt = 'Add to Cart';

    const itemContent = document.createElement('div');
    itemContent.classList.add('item__content');

    const itemHead = document.createElement('h4');
    itemHead.classList.add('head');
    itemHead.textContent = element.name;

    const itemText = document.createElement('p');
    itemText.classList.add('other');
    itemText.textContent = element.textInfo;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('price');
    itemPrice.textContent = `$${element.price}`;

    const button = document.createElement('button');
    button.classList.add('button');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-shopping-cart');
    button.appendChild(icon);
    const buttonText = document.createTextNode(' Add to Cart');
    button.appendChild(buttonText);

    button.addEventListener('click', () => {
        addToCart({
            name: element.name,
            price: element.price,
            url: element.url,
            color: element.color,
            size: element.size
        });
    });

    cartBox.appendChild(bodyEl);
    bodyEl.appendChild(itemImg);
    bodyEl.appendChild(itemContent);
    bodyEl.appendChild(button);
    itemContent.appendChild(itemHead);
    itemContent.appendChild(itemText);
    itemContent.appendChild(itemPrice);
});

