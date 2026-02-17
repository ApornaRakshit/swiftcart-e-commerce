// Load All Categories
const loadCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(json => displayCategories(json));
};

// Load All Products
const loadAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => displayProducts(data));
};

// Load Category Products
const loadCategoryProduct = async (category) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${(category)}`
  );

  const data = await response.json();
  displayProducts(data);
};

// load product detail
const loadProductDetail = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url);
  const detail = await res.json();

  displayProductModal(detail);
};

const displayProductModal = (product) => {
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    <h3 class="text-xl font-bold mb-4">${product.title}</h3>

    <img src="${product.image}" 
         class="w-40 mx-auto mb-4"/>

    <p class="mb-2"><strong>Category:</strong> ${product.category}</p>
    <p class="mb-2"><strong>Price:</strong> $${product.price}</p>

    <p class="mb-2">
      <strong>Rating:</strong> 
      ${product.rating.rate} (${product.rating.count})
    </p>

    <p class="text-sm text-gray-600 mt-4">
      ${product.description}
    </p>

    <div class="card-actions justify-between mt-4">
      <button onclick="loadProductDetail(${product.id})" class="btn btn-soft btn-info btn-sm">
          <i class="fa-solid fa-bag-shopping"></i> Buy Now
      </button>
      <button class="btn btn-soft btn-primary btn-sm">
          <i class="fa-solid fa-cart-shopping"></i> Add to Cart
      </button>
    </div>

    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  `;

  document.getElementById("my_modal_5").showModal();
};

const displayCategories = (categories) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  // All button
  const allBtn = document.createElement("button");
  allBtn.className = "btn btn-outline btn-primary";
  allBtn.innerText = "All";

  allBtn.addEventListener("click", () => {
    loadAllProducts();
    setActiveButton(allBtn);
  });

  levelContainer.appendChild(allBtn);
  setActiveButton(allBtn);

  for (let category of categories) {
    let displayName =
      category.charAt(0).toUpperCase() + category.slice(1);

    const btn = document.createElement("button");
    btn.className = "btn btn-outline btn-primary";
    btn.innerText = displayName;

    btn.addEventListener("click", () => {
      loadCategoryProduct(category);
      setActiveButton(btn);
    });

    levelContainer.appendChild(btn);
  }
};

const setActiveButton = (clickedBtn) => {
  const buttons = document.querySelectorAll("#level-container button");

  buttons.forEach((btn) => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-outline");
  });

  clickedBtn.classList.remove("btn-outline");
  clickedBtn.classList.add("btn-primary");
};

// Display Products
const displayProducts = (products) => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  for (let product of products) {
    productContainer.innerHTML += `
        <div class="card bg-base-100 shadow-lg rounded-xl overflow-hidden">
          <figure class="bg-gray-100 p-6">
            <img src="${product.image}" 
                class="h-52 mx-auto object-contain"/>
          </figure>

          <div class="card-body">
            <div class="flex justify-between items-center">
              <span class="badge  text-blue-800 bg-blue-100">
                ${product.category}
              </span>
              <span class="text-sm font-semibold">
                <i class="fa-solid fa-star text-yellow-400"></i> 
                ${product.rating.rate} (${product.rating.count})
              </span>
            </div>

            <h2 class="card-title">
              ${product.title.slice(0, 35)}...
            </h2>

            <p class="text-xl font-bold">$${product.price}</p>

            <div class="card-actions justify-between mt-4">
              <button onclick="loadProductDetail(${product.id})" class="btn btn-outline btn-sm">
                <i class="fa-regular fa-eye"></i> Details
              </button>
              <button class="btn btn-primary btn-sm">
                <i class="fa-solid fa-cart-shopping"></i> Add
              </button>
            </div>

          </div>
        </div>
      `;
  }
};
loadCategories();
loadAllProducts();

const loadTrendingProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  // Sort by highest rating
  const sortedProducts = data.sort(
    (a, b) => b.rating.rate - a.rating.rate
  );

  // Take top 3
  const topThree = sortedProducts.slice(0, 3);

  displayTrendingProducts(topThree);
};

const displayTrendingProducts = (products) => {
  const container = document.getElementById("trending-container");

  if (!container) return;

  container.innerHTML = "";

  for (let product of products) {
    container.innerHTML += `
        <div class="card bg-base-100 shadow-lg rounded-xl overflow-hidden">
          <figure class="bg-gray-100 p-6">
            <img src="${product.image}" 
                class="h-52 mx-auto object-contain"/>
          </figure>

          <div class="card-body">
            <div class="flex justify-between items-center">
              <span class="badge  text-blue-800 bg-blue-100">
                ${product.category}
              </span>
              <span class="text-sm font-semibold">
                <i class="fa-solid fa-star text-yellow-400"></i> 
                ${product.rating.rate} (${product.rating.count})
              </span>
            </div>

            <h2 class="card-title">
              ${product.title.slice(0, 35)}...
            </h2>

            <p class="text-xl font-bold">$${product.price}</p>

            <div class="card-actions justify-between mt-4">
              <button onclick="loadProductDetail(${product.id})" class="btn btn-outline btn-sm">
                <i class="fa-regular fa-eye"></i> Details
              </button>
              <button class="btn btn-primary btn-sm">
                <i class="fa-solid fa-cart-shopping"></i> Add
              </button>
            </div>

          </div>
        </div>
      `;
  }
};

loadTrendingProducts();