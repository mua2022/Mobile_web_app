
const products = [
    { name: 'chests', category: 'Chests' },
    { name: 'office', category: 'Office' },
    { name: 'Bed', category: 'Beds' },
    { name: 'Chair', category: 'Chairs' },
    
];

function searchProducts() {
    const searchField = document.getElementById('searchField').value.toLowerCase();
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    const filteredProducts = products.filter(product => product.category.toLowerCase().includes(searchField));

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.textContent = product.name + ' - ' + product.category;
            productList.appendChild(productDiv);
        });
    } else {
        productList.textContent = 'No products found';
    }
}
