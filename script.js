// script.js
document.addEventListener('DOMContentLoaded', function () {
    const cartModal = document.getElementById('cart-modal');
    const cellphoneModal = document.getElementById('cellphone-modal');
    const closeCartModal = document.querySelector('.close');
    const closeCellphoneModal = document.querySelector('.close-cellphone');
    const viewCart = document.getElementById('view-cart');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    const cellphoneForm = document.getElementById('cellphone-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    let cart = [];

    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            cartItems.appendChild(li);
        });
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            cart.push(this.previousElementSibling.previousElementSibling.textContent);
            updateCart();
            cellphoneModal.style.display = 'block';
        });
    });

    closeCartModal.addEventListener('click', function () {
        cartModal.style.display = 'none';
    });

    closeCellphoneModal.addEventListener('click', function () {
        cellphoneModal.style.display = 'none';
    });

    viewCart.addEventListener('click', function () {
        cartModal.style.display = 'block';
    });

    clearCartButton.addEventListener('click', function () {
        cart = [];
        updateCart();
    });

    cellphoneForm.addEventListener('submit', function (event) {
        event.preventDefault();
        confirmationMessage.style.display = 'block';
        setTimeout(function () {
            confirmationMessage.style.display = 'none';
            cellphoneModal.style.display = 'none';
        }, 5000); // Mantén el mensaje visible por 5 segundos antes de ocultarlo
    });
});
