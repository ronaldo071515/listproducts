// Definimos el array de productos
const catalogo = [
    {
        id: 1,
        categoria: "Agendas",
        icon: "fas fa-beer",
        products: [
            {
                id: 1,
                name: "Agenda Bambú",
                description: "Elaborada en bambú, hojas rayadas, argollada incluye esfero Ecológico.",
                price: 3.50,
                details: "ANCHO: 12.2cm - ALTO: 15 .9cm",
                image: "/assets/img/agendabambu.png"
            }
        ]
    },
    {
        id: 3,
        categoria: "Hogar",
        icon: "fas fa-beer",
        products: [
            {
                id: 1,
                name: "Asta para Bandera",
                description: "Asta para colocar banderas en la puerta del carro, no incluye bandera. Medida de Bandera 21*30 cms",
                price: 3.50,
                details: "ANCHO: 8cm - LARGO: 28cm",
                image: "/assets/img/astaparabandera.png"
            }
        ]
    }
];

// Número de WhatsApp
const phone = "573175746188"; // Reemplaza con tu número de WhatsApp

// Función para crear la tarjeta de producto
function crearTarjetaProducto(producto) {
    // Generar el mensaje para WhatsApp
    const message = `¡Hola! Estoy interesado en el producto:
- *Nombre*: ${producto.name}
- *Precio*: $${producto.price}
- *Detalles*: ${producto.details}
Puedes contactarme al siguiente número de WhatsApp: ${phone}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Crear la tarjeta de producto
    const productCard = document.createElement('div');
    productCard.classList.add('col-md-4');
    productCard.innerHTML = `
        <div class="card mb-4 product-wap rounded-0">
            <div class="card rounded-0">
                <img class="card-img rounded-0 img-fluid" src="${producto.image}">
                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul class="list-unstyled">
                        <li><a class="btn btn-success text-white" href="${whatsappUrl}" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <a class="h3 text-decoration-none fw-bold">${producto.name}</a>
                <p class="mb-0">${producto.description}</p>
                <hr>
                <p class="mb-0">${producto.details}</p>
                <hr>
                <p class="text-center mb-0 fw-bold">Precio: $${producto.price}</p>
            </div>
        </div>
    `;
    return productCard;
}

// Función para inicializar la aplicación y generar la lista de categorías
function iniciarApp() {
    const productsList = document.getElementById('products-list');
    const allProducts = catalogo.map(product => product.products).flat();

    // Mostrar todos los productos
    allProducts.forEach(producto => {
        const productCard = crearTarjetaProducto(producto);
        productsList.appendChild(productCard);
    });

    const categoryList = document.getElementById('category-list');
    const uniqueCategories = catalogo.map(product => product.categoria);

    // Crear la lista de categorías
    uniqueCategories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('pb-3');
        li.innerHTML = `
            <a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#" data-category="${category}">
                ${category}
            </a>
        `;
        li.querySelector('a').addEventListener('click', function (e) {
            e.preventDefault();
            mostrarProductos(this.getAttribute('data-category'));
        });
        categoryList.appendChild(li);
    });
}

// Función para mostrar los productos de una categoría específica
function mostrarProductos(categoria) {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = ''; // Limpiar productos anteriores

    const productosCategoria = catalogo.find(product => product.categoria === categoria).products;
    productosCategoria.forEach(producto => {
        const productCard = crearTarjetaProducto(producto);
        productsList.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', iniciarApp);
