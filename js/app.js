async function loadProducts() {

    const response = await fetch("data/products.json");

    const products = await response.json();

    const brands = [...new Set(products.map(p => p.brand))];

    const brandsList = document.getElementById("brands-list");
    const productsGrid = document.getElementById("products-grid");

    brandsList.innerHTML = "";

    brands.forEach(brand => {

        brandsList.innerHTML += `
            <div class="brand-card">${brand}</div>
        `;

    });

    productsGrid.innerHTML = "";

    products.forEach(product => {

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

loadProducts();
