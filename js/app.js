let products = [];

async function loadProducts() {

    const response = await fetch("data/products.json");
    products = await response.json();

    fillFilters();

    renderProducts(products);

}

function fillFilters(){

    const brandFilter = document.getElementById("brandFilter");
    const categoryFilter = document.getElementById("categoryFilter");

    const brands = [...new Set(products.map(p => p.brand))];
    const categories = [...new Set(products.map(p => p.category))];

    brandFilter.innerHTML = `<option value="">כל המותגים</option>`;
    categoryFilter.innerHTML = `<option value="">כל הקטגוריות</option>`;

    brands.forEach(brand=>{
        brandFilter.innerHTML += `<option value="${brand}">${brand}</option>`;
    });

    categories.forEach(category=>{
        categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
    });

    const brandsList = document.getElementById("brands-list");
    brandsList.innerHTML="";

    brands.forEach(brand=>{
        brandsList.innerHTML += `
            <div class="brand-card">${brand}</div>
        `;
    });

}

function renderProducts(list){

    const productsGrid = document.getElementById("products-grid");

    productsGrid.innerHTML="";

    list.forEach(product=>{

        productsGrid.innerHTML += `

        <div class="product-card">

            <img
                src="${product.image}"
                class="product-image"
                alt="${product.name}">

            <div class="product-info">

                <div class="product-brand">
                    ${product.brand}
                </div>

                <div class="product-title">
                    ${product.name}
                </div>

                <div class="product-price">
                    ₪${product.price}
                </div>

                <div class="stock ${product.stock ? "in" : "out"}">
                    ${product.stock ? "במלאי" : "אזל מהמלאי"}
                </div>

            </div>

        </div>

        `;

    });

}

function filterProducts(){

    const text = document.getElementById("searchInput").value.toLowerCase();
    const brand = document.getElementById("brandFilter").value;
    const category = document.getElementById("categoryFilter").value;

    const filtered = products.filter(product=>{

        const matchText =
            product.name.toLowerCase().includes(text);

        const matchBrand =
            !brand || product.brand === brand;

        const matchCategory =
            !category || product.category === category;

        return matchText && matchBrand && matchCategory;

    });

    renderProducts(filtered);

}

document.getElementById("searchInput").addEventListener("input",filterProducts);
document.getElementById("brandFilter").addEventListener("change",filterProducts);
document.getElementById("categoryFilter").addEventListener("change",filterProducts);

loadProducts();
