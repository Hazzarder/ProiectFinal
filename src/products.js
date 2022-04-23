function fetchProducts() {
    fetch('src/products.json')
    .then(response => {
        return response.json();
        
    })
    .then(data =>{
        
        const html = data.map(products =>{
            return `                <div class="product">
            <div class="image-container">
                <img src="${products.Photo[0]}" alt="">
            </div>
            <div class="titleh2">
                <h2>${products.Name}</h2>
            </div>
            <div class="price">
                <p>$${products.Price}</p>
            </div>
            <div class="buttons">
                <button onclick="addCart(${products.id})">Add To Cart</button>
                <button onclick="buyNow(${products.id})">Buy Now</button>
            </div>
        </div>`
        
        }).join('');
        
        document
        .querySelector('#products')
        .insertAdjacentHTML("afterbegin",html)
    }).catch(error => {
        console.log(error);
    })
    
}
fetchProducts();






