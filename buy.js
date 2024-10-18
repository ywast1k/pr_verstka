const addCart = document.querySelector('.add-cart');

data.forEach(element => {
    const buyEl = document.createElement('div');
    buyEl.classList.add('item');

    const itemImg = document.createElement('img');
    itemImg.classList.add('imgPay');
    itemImg.src = element.url;
    

    const itemContentBuy = document.createElement('div');
    itemContentBuy.classList.add('item_content');

    const itemBuyHead = document.createElement('h3');
    itemBuyHead.classList.add('item_heading');
    itemBuyHead.textContent=element.name;

    const itemPriceBuy = document.createElement('p');
    itemPriceBuy.classList.add('item_text');
    itemPriceBuy.textContent = `Price: `;

    const itemSpan = document.createElement('span');
    itemSpan.classList.add('item_prColor');
    itemSpan.textContent = `$ ${element.price}`;

    const itemColor = document.createElement('p');
    itemColor.classList.add('item_text');
    itemColor.textContent = `Color: ${element.color}`;

    const itemSize = document.createElement('p');
    itemSize.classList.add('item_text');
    itemSize.textContent = `Size: ${element.size}`;
    
    const Quantity = document.createElement('p');
    Quantity.classList.add('item_text');
    Quantity.textContent = "Quantity: ";

    const input = document.createElement('input');
    input.classList.add('item_input');
    input.textContent = "2";

    const buttonRem = document.createElement('button');
    buttonRem.classList.add('buttonRem');
    buttonRem.textContent = 'X';

    addCart.appendChild(buyEl);
    buyEl.appendChild(itemImg);
    buyEl.appendChild(itemContentBuy);
    buyEl.appendChild(buttonRem);
    itemContentBuy.appendChild(itemBuyHead);
    itemContentBuy.appendChild(itemPriceBuy);
    itemPriceBuy.appendChild(itemSpan);
 
    itemContentBuy.appendChild(itemColor);
    itemContentBuy.appendChild(itemSize);
    itemContentBuy.appendChild(Quantity);
    Quantity.appendChild(input);

    




});