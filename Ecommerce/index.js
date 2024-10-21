fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

let products = [{ id, image, price, description}]

function displayProducts({id, title, price, description}){
    return`<div class="product-card">
        <div class="product-profile">
        <h1>${title}</h1>
        <img src="${image}" alt=${id}>
            <h2>${price}</h2>
             <h3>${id}</h3>
              <h4>${description}>
        </div>
    </div>       `

}
let productcard= document.getElementById("card-container");

let productCard = gods.map((item) => {
    return displayProducts(item);
});

cardContainer.innerHTML = productCard;
