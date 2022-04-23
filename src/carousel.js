document.querySelectorAll(".carousel_products").forEach(carousel_products=> {
    const items= carousel_products.querySelectorAll(".carousel-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;

        
    });
    console.log(buttonsHtml);

    carousel_products.insertAdjacentHTML("beforeend",
     `<div class="carousel-buttons">
     ${buttonsHtml.join("")}
     </div>`);
     const buttons = carousel_products.querySelectorAll(".carousel-button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", ()=>{
            items.forEach(item => item.classList.remove("carousel-item-selected"));
            buttons.forEach(button => button.classList.remove("carousel-button-selected"));

            items[i].classList.add("carousel-item-selected");
            button.classList.add("carousel-button-selected");
        });
    });
}) ;





