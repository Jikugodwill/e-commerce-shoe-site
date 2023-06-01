//list of shoe images, their names, prices in XAF and categories

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 50000,
    category: "Running",
    image:
      "https://images.pexels.com/photos/4252970/pexels-photo-4252970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 55000,
    category: "Running",
    image:
      "https://images.pexels.com/photos/14174469/pexels-photo-14174469.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    id: 3,
    name: "Puma Suede Classic",
    price: 35000,
    category: "Casual",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374915/01/sv01/fnd/IND/fmt/png/PUMA-Suede-Classic-+Sneakers",
  },
  {
    id: 4,
    name: "Converse Chuck Taylor All Star",
    price: 30000,
    category: "Casual",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71q%2B1Q%2B%2B%2B%2BL._AC_UX500_.jpg",
  },
  {
    id: 5,
    name: "Vans Old Skool",
    price: 40000,
    category: "Skateboarding",
    image: "https://images.vans.com/is/image/VansEU/VD3HY28-HERO?$583x583$",
  },
  {
    id: 6,
    name: "Reebok Classic Leather",
    price: 45000,
    category: "Casual",
    image:
      "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/8a0d9a0a0b5c4b6a9b3daa0a00f0d3a5_9366/Classic_Leather_Shoes_White_49799_01_standard.jpg",
  },
  {
    id: 7,
    name: "New Balance 574",
    price: 50000,
    category: "Running",
    image: "https://nb.scene7.com/is/image/NB/ml574v2_nb_02_i?$pdpPictLG$",
  },
  {
    id: 8,
    name: "Timberland 6-Inch Premium Boots",
    price: 80000,
    category: "Boots",
    image:
      "https://images.timberland.com/is/image/timberland/10061024-HERO?$PDP-FULL-IMAGE$",
  },
  {
    id: 9,
    name: "Dr. Martens 1460",
    price: 75000,
    category: "Boots",
    image:
      "https://images.drmartens.com / is / image / DrMartens / 11822006 - HERO ? $PDP - FULL - IMAGE$",
  },
  {
    id: 10,
    name: "Gucci Ace Leather Sneakers",
    price: 400000,
    category: "Luxury",
    image:
      "https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1618569600/602010_A38G0_9064_001_100_0000_Light-Gucci-Print-Ace-sneaker.jpg",
  },
  {
    id: 11,
    name: "Balenciaga Triple S",
    price: 600000,
    category: "Luxury",
    image: "https://www.balenciaga.com/66/11/12331111pv_20_f.jpg",
  },
  {
    id: 12,
    name: "Nike Air Force 1",
    price: 45000,
    category: "Casual",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5a1d1b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-force-1-07-mens-shoe-2XZzXK.jpg",
  },
  {
    id: 13,
    name: "Nike Air Jordan 1",
    price: 150000,
    category: "Basketball",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1d1c3b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-jordan-1-mid-shoe-2XZzXK.jpg",
  },
  {
    id: 14,
    name: "Nike Air Max 97",
    price: 60000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1d1c3b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-jordan-1-mid-shoe-2XZzXK.jpg",
  },
  {
    id: 15,
    name: "Nike Air Max 90",
    price: 55000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1d1c3b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-jordan-1-mid-shoe-2XZzXK.jpg",
  },
  {
    id: 16,
    name: "Nike Air Max 270",
    price: 70000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1d1c3b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-jordan-1-mid-shoe-2XZzXK.jpg",
  },
  {
    id: 17,
    name: "Nike Air Max 720",
    price: 80000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1d1c3b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-jordan-1-mid-shoe-2XZzXK.jpg",
  },
  {
    id: 18,
    name: "Nike Air Max 2090",
    price: 90000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1d1c3b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-jordan-1-mid-shoe-2XZzXK.jpg",
  },
  {
    id: 19,
    name: "Nike Air Max Plus",
    price: 70000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1d1c3b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-jordan-1-mid-shoe-2XZzXK.jpg",
  },
  {
    id: 20,
    name: "Nike Air Max 95",
    price: 65000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1d1c3b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-jordan-1-mid-shoe-2XZzXK.jpg",
  },
  {
    id: 21,
    name: "Nike Air Max 98",
    price: 65000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1d1c3b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-jordan-1-mid-shoe-2XZzXK.jpg",
  },
  {
    id: 22,
    name: "Nike Air Max 200",
    price: 65000,
    category: "Running",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5a1d1b1e-5b1a-4b1a-8b1a-1b1a1b1a1b1a/air-force-1-07-mens-shoe-2XZzXK.jpg",
  },
];

// <img class="product-image" src="https://via.placeholder.com/300" alt="product">

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search-bar");
const categoriesContainer = document.querySelector(".cats");



const displayProducts = (filteredProducts) => {
  console.log(filteredProducts);
  productsContainer.innerHTML = filteredProducts.map(
  (product) => `<div class="product">
  <img class="product-image" src=${product.image} alt="product">
  <h3 class="product-name">${product.name}</h3>
  <p class="product-cat">${product.category}</p>
  <p class="product-price"><span class="price-value">${product.price}</span><span class="unit">FCFA</span></p>
  <button class="buy-btn">Add to Cart</button>
  </div>`
  ).join("");
}

const setCategories = () => {
  const categoriesList = products.map(product => product.category);

  const cats = ["All", ...categoriesList.filter((cat, index) => categoriesList.indexOf(cat) === index)];

  console.log(cats);

  categoriesContainer.innerHTML = cats.map(cat => `<span class="cat">${cat}</span>`).join("")
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
  setCategories();

  searchInput.onkeyup = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      displayProducts(
        products.filter(product =>
          product.price.toString().indexOf(searchTerm) !== -1
          ||
          product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        )
      );
      
      console.log(searchTerm);

      if (products.filter(product =>
        product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        ||
          product.price.toString().indexOf(searchTerm) !== -1).length === 0)
      {
        productsContainer.innerHTML = `<div class="error">
        <h1>Sorry, ${searchTerm} not found</h1>
        <img src="./assets/404Error.gif" alt="404 error">
    </div>`;
      }

    } else {
      displayProducts(products);
    }
  }

  categoriesContainer.onclick = (e) => {
    const selectedCat = e.target.textContent;
    console.log(products.filter(product => product.category == selectedCat));
    if (selectedCat === "All") {
      displayProducts(products);
    } else if (products.filter(product => product.category == selectedCat).length > 0) {
      displayProducts(products.filter((product) => product.category === selectedCat))
    } else {
      return;
    }
  }
});
