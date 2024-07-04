document.addEventListener('DOMContentLoaded', function() {
    const api_url = 'https://dummyjson.com/carts';

    fetch(api_url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not correct ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.carts) {
                const cartsContainer = document.getElementById('carts-container');

                data.carts.forEach(cart => {
                    const cartDiv = document.createElement('div');
                    cartDiv.className = 'cart';

                    const cartTitle = document.createElement('h2');
                    cartTitle.textContent = 'Arman: ' + cart.id;
                    cartDiv.appendChild(cartTitle);

                    const cartItemsDiv = document.createElement('div');
                    cartItemsDiv.className = 'cart-items';

                    cart.products.forEach(product => {
                        const productDiv = document.createElement('div');
                        productDiv.className = 'product';

                        const productImage = document.createElement('img');
                        productImage.src = product.thumbnail;
                        productImage.alt = product.title;
                        productDiv.appendChild(productImage);

                        const productDetailsDiv = document.createElement('div');
                        productDetailsDiv.className = 'product-details';

                        const productTitle = document.createElement('span');
                        productTitle.className = 'product-title';
                        productTitle.textContent = product.title;
                        productDetailsDiv.appendChild(productTitle);

                        const productQuantity = document.createElement('span');
                        productQuantity.className = 'product-quantity';
                        productQuantity.textContent = 'Quantity: ' + product.quantity;
                        productDetailsDiv.appendChild(productQuantity);

                        productDiv.appendChild(productDetailsDiv);
                        cartItemsDiv.appendChild(productDiv);
                    });

                    cartDiv.appendChild(cartItemsDiv);
                    cartsContainer.appendChild(cartDiv);
                });
            } else {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Error this page.';
                document.getElementById('carts-container').appendChild(errorMessage);
            }
        })
        .catch(error => {
            console.error('Error fetching the API:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Error this page: ' + error.message;
            document.getElementById('carts-container').appendChild(errorMessage);
        });
});
// Arman_Esnaashari