// IMPORT מותגים

const brands = [
    "Nike",
    "Adidas",
    "Tommy Hilfiger",
    "Calvin Klein",
    "Polo Ralph Lauren",
    "Columbia",
    "Puma",
    "Champion",
    "Nautica"
];

const products = [
    {
        id: 1,
        brand: "Nike",
        name: "חולצת Nike",
        price: "₪149",
        stock: true,
        image: "https://picsum.photos/400/500?random=1"
    },
    {
        id: 2,
        brand: "Tommy Hilfiger",
        name: "טי שירט Tommy",
        price: "₪179",
        stock: true,
        image: "https://picsum.photos/400/500?random=2"
    },
    {
        id: 3,
        brand: "Calvin Klein",
        name: "בוקסר Calvin Klein",
        price: "₪89",
        stock: false,
        image: "https://picsum.photos/400/500?random=3"
    },
    {
        id: 4,
        brand: "Polo Ralph Lauren",
        name: "חולצת פולו",
        price: "₪199",
        stock: true,
        image: "https://picsum.photos/400/500?random=4"
    }
];

const brandsContainer = document.getElementById("brands-list");
const productsContainer = document.getElementById("products-grid");

if (brandsContainer) {
    brands.forEach(brand => {
        brandsContainer.innerHTML += `
            <div class="brand-card">${brand}</div>
        `;
    });
}

if (productsContainer) {
    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product-card">
                <img class="product-image" src="${product.image}" alt="${product.name}">

                <div class="product-info">

                    <div class="product-brand">
                        ${product.brand}
                    </div>

                    <div class="product-title">
                        ${product.name}
                    </div>

                    <div class="product-price">
                        ${product.price}
                    </div>

                    <div class="stock ${product.stock ? "in" : "out"}">
                        ${product.stock ? "במלאי" : "אזל מהמלאי"}
                    </div>

                </div>
            </div>
        `;
    });
}
