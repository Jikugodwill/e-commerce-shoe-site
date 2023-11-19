//list of shoe images, their names, prices in XAF and categories

const products = [
  {
    id: 1,
    name: "Nike Air Max 270 React",
    price: 50000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/zoxl3cb14axp0hcrfp3r/nike-air-max-270-react-bauhaus-release-date.jpg",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 23",
    price: 55000,
    category: "Running",
    image:
      "https://productimage001.runnersneed.com/productimages/large/c22aga0135_7030_a.jpg",
  },
  {
    id: 3,
    name: "Puma Suede Classic XXI",
    price: 35000,
    category: "Casual",
    image:
      "https://static.super-shop.com/1203678-puma-suede-classic-xxi-shoes-black.jpg?w=1920",
  },
  {
    id: 4,
    name: "Converse Chuck Taylor All Star 70",
    price: 30000,
    category: "Casual",
    image:
      "https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw1e4d661e/firstspirit/media/07_product_detail_pages/2020_fall_4/chuck_2/M-Converse-PDP-Chuck-70-P2.jpg",
  },
  {
    id: 5,
    name: "Vans Old Skool Stacked",
    price: 40000,
    category: "Skateboarding",
    image:
      "https://images.vans.com/is/image/VansEU/VN0A4U155ZN-HERO?$PDP-FULL-IMAGE$",
  },
  {
    id: 6,
    name: "Reebok Classic Leather Legacy",
    price: 45000,
    category: "Casual",
    image:
      "https://images.keepersport.net/eyJidWNrZXQiOiJrZWVwZXJzcG9ydC1wcm9kdWN0LWltYWdlcy11cy1lYXN0LTEiLCJrZXkiOiJyZWVib2tcLzEwMTcxMDQ1X0dXOTk3MF8wMDBcL3JlZWJvay1jbGFzc2ljLWxlYXRoZXItbGVnYWN5LXdlaXNzLXJvdC1ndzk5NzAtbGlmZXN0eWxlX2dhbGxlcnkucG5nIiwiZWRpdHMiOltdfQ==",
  },
  {
    id: 7,
    name: "New Balance 574 V3",
    price: 50000,
    category: "Running",
    image:
      "https://en.beyondstore.fi/tuotekuvat/1200x1200/New%20Balance%20574%20V3%20WMNS%20%27Green%20Leaf%27%2C%20nibus%20cloud%20%3A%20white%203.JPG",
  },
  {
    id: 8,
    name: "Timberland 6-Inch Premium Waterproof Boots",
    price: 80000,
    category: "Boots",
    image:
      "https://images.timberland.com/is/image/timberland/12709713-ALT4?wid=650&hei=650&qlt=50&resMode=sharp2&op_usm=0.9,1.0,8,0",
  },
  {
    id: 9,
    name: "Dr. Martens 1460 Quad",
    price: 75000,
    category: "Boots",
    image:
      "https://www.prfo.com/cdn/shop/products/dr-martens-unisex-101-quad-smooth-boots-black-top_1200x.jpg?v=1665154121",
  },
  {
    id: 10,
    name: "Gucci Ace Embroidered Sneaker",
    price: 400000,
    category: "Luxury",
    image: "https://i.ebayimg.com/images/g/zTIAAOSwYFlj2mEX/s-l1600.jpg",
  },
  {
    id: 11,
    name: "Balenciaga Speed 2023",
    price: 600000,
    category: "Luxury",
    image:
      "https://dynamic.zacdn.com/oK6H5L0nLWGdDgThhMYmFUsIlyg=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/balenciaga-7234-0960662-2.jpg",
  },
  {
    id: 12,
    name: "Nike Air Force 1 Fontanka",
    price: 45000,
    category: "Casual",
    image: "https://i.ebayimg.com/images/g/cy8AAOSwriVkqI~U/s-l1200.webp",
  },
  {
    id: 13,
    name: `Nike Air Jordan 1 Low OG "Reverse Mocha`,
    price: 150000,
    category: "Basketball",
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Ftravis-scott-air-jordan-1-low-reverse-mocha-detailed-look-release-info-dm7866-162-001.jpg?cbr=1&q=90",
  },
  {
    id: 14,
    name: `Nike Air Max 97 OG "Silver Bullet`,
    price: 60000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/jpsm3wtth4ozzwow4y3w/nike-air-max-97-og-metallic-silver.jpg",
  },
  {
    id: 15,
    name: `Nike Air Max 90 OG "Infrared`,
    price: 55000,
    category: "Running",
    image:
      "https://i.pinimg.com/736x/9d/f1/90/9df190f8a5e62c20f0c884982f179c8f.jpg",
  },
];

// <img class="product-image" src="https://via.placeholder.com/300" alt="product">

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search-bar");
const categories = document.querySelector(".cats");

//rearrange the products in random order
const shuffled = products.sort(() => 0.5 - Math.random());

//display all products
const allProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) => `<div class="product">
  <img class="product-image ${!product.image && "blurred"}" src=${
        product.image || "../assets/defaultShoe.jpg"
      } alt="product">
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
