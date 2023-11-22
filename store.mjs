import { shoeData } from "./data/shoeData.js";

const products = shoeData();

console.log("shoes", products);

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search-bar");
const categories = document.querySelector(".cats");

//rearrange the products in random order
const shuffled = products.sort(() => 0.5 - Math.random());
console.log("shuffled", shuffled);

//display all products
const allProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) => `<div class="product">
      <div class="img-container">
      <img class="product-image ${!product.image && "blurred"}" src=${
        product.image || "../assets/defaultShoe.jpg"
      } alt="product">
      </div>
  <h3 class="product-name">${product.name}</h3>
  <p class="product-cat">${product.category}</p>
  <p class="product-price"><span class="unit">FCFA</span><span class="price-value">${
    product.price
  }</span></p>
  <button class="buy-btn">Add to Cart</button>
</div>`
    )
    .join("");
};

//set categories
const setCategories = () => {
  const categoriesList = products.map((item) => item.category);

  const cats = [
    "All",
    ...categoriesList.filter(
      (item, index) => categoriesList.indexOf(item) === index
    ),
  ];

  categories.innerHTML = cats
    .map((item) => `<span class="cat">${item}</span>`)
    .join("");
  console.log(cats);
};

//filter products by category
categories.onclick = (e) => {
  const selectedCat = e.target.textContent;
  if (selectedCat === "All") {
    allProducts(shuffled);
  } else {
    allProducts(products.filter((item) => item.category === selectedCat));
  }
  // add the active class to the selected category
  const cat = document.querySelectorAll(".cat");
  cat.forEach((item) => {
    item.classList.remove("active");
  });
  e.target.classList.add("active");
};

document.addEventListener("DOMContentLoaded", () => {
  allProducts(shuffled);
  setCategories();

  searchInput.onkeyup = (e) => {
    const value = e.target.value;

    //search either by name, price or category
    const result = products.filter(
      (product) =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase()) ||
        product.price.toString().includes(value)
    );
    // display the result and if there's no result, display console.error
    allProducts(result);
    if (result.length === 0) {
      console.error("No result found");
      // html tag
      productsContainer.innerHTML = `<h3 class="no-result">No result found for "${value}"</h3>`;
    }
  };
});
