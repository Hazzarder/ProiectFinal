function createButton() {
    fetch('src/brands.json')
    .then(response => {
        return response.json();
        
    })
    .then(data =>{
        
        const html = data.map(products =>{
            return `<div>
            <input type="checkbox" onclick="filterProducts"${products.brand}">
            <span>${products.brand}</span>
            </div>
            `
        
        }).join('');
        
        document
        .querySelector('#filters')
        .insertAdjacentHTML("afterbegin",html)
    }).catch(error => {
        console.log(error);
    })
    
}
createButton();
function filterProducts() {
    console.log();
}
