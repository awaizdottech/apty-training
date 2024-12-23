const BASE_URL = "https://dummyjson.com/products";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("error fetching data:", error);
    throw error;
  }
}

async function searchProducts(query) {
  const url = `${BASE_URL}/search?q=${encodeURIComponent(query)}`;
  return await fetchData(url);
}

async function listAllProducts() {
  return await fetchData(BASE_URL);
}

async function getProductById(productId) {
  const url = `${BASE_URL}/${productId}`;
  return await fetchData(url);
}

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  async function renderAllProducts() {
    try {
      const data = await listAllProducts();
      content.innerHTML = data.products
        .map(
          (product) => `
                <div class="product">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <button onclick="viewProduct(${product.id})">view details</button>
                </div>
            `
        )
        .join("");
    } catch (error) {
      content.innerHTML = `<p>error loading products.</p>`;
    }
  }

  async function renderSearchResults(query) {
    try {
      const data = await searchProducts(query);
      content.innerHTML = data.products
        .map(
          (product) => `
                <div class="product">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <button onclick="viewProduct(${product.id})">view details</button>
                </div>
            `
        )
        .join("");
    } catch (error) {
      content.innerHTML = `<p>error searching for products.</p>`;
    }
  }

  async function renderProductDetails(productId) {
    try {
      const product = await getProductById(productId);
      content.innerHTML = `
                <div class="product-details">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <p>Price: $${product.price}</p>
                    <button onclick="renderAllProducts()">back to products</button>
                </div>
            `;
    } catch (error) {
      content.innerHTML = `<p>error loading product details.</p>`;
    }
  }

  window.renderAllProducts = renderAllProducts;
  window.renderSearchResults = renderSearchResults;
  window.viewProduct = renderProductDetails;

  renderAllProducts();
});

function searchProductsUI() {
  const query = document.getElementById("search").value;
  if (query) {
    window.renderSearchResults(query);
  } else {
    alert("please enter a search query.");
  }
}
