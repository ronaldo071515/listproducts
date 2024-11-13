// Definimos el array de productos
const catalogo = [
    {
        id: 1,
        categoria: "Anillos",
        icon: "fas fa-beer",
        products: [
            {
                id: 1,
                name: "Anillo 1",
                description: "Anillo cool",
                price: 3.50,
                image: "https://images.pexels.com/photos/265916/pexels-photo-265916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
                id: 2,
                name: "Anillo 2",
                description: "Anillo para bodas",
                price: 3.50,
                image: "https://images.pexels.com/photos/916344/pexels-photo-916344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
        ]
    },
    {
        id: 2,
        categoria: "Cadenas",
        icon: "fas fa-beer",
        products: [
            {
                id: 1,
                name: "Cadena de oro",
                description: "Cadena de oro laminado",
                price: 3.50,
                image: "https://images.pexels.com/photos/8706554/pexels-photo-8706554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
        ]
    },
    {
        id: 3,
        categoria: "Zapatos",
        icon: "fas fa-beer",
        products: [
            {
                id: 1,
                name: "Zapatos Blancos",
                description: "Zapatos blancos de campo",
                price: 3.50,
                image: "https://images.pexels.com/photos/27095802/pexels-photo-27095802/free-photo-of-piernas-patas-campo-arboles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
        ]
    },
    {
        id: 4,
        categoria: "Reloj's",
        icon: "fas fa-beer",
        products: [
            {
                id: 1,
                name: "Reloj de oro",
                description: "Reloj de oro para medir el tiempo",
                price: 3.50,
                image: "https://images.pexels.com/photos/277290/pexels-photo-277290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
        ]
    },
    {
        id: 5,
        categoria: "Camisas",
        icon: "fas fa-beer",
        products: [
            {
                id: 1,
                name: "Camisa de rayas",
                description: "Camisa de rayas para bodas",
                price: 3.50,
                image: "https://images.pexels.com/photos/2635315/pexels-photo-2635315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
        ]
    }
]

// Función para inicializar la aplicación y generar la lista de categorías
function iniciarApp() {

    //mostrar todos los productos
    const productsList = document.getElementById('products-list');
    const allProducts = catalogo.map(product => product.products).flat();
    allProducts.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4');

        productCard.innerHTML = `
            <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                    <img class="card-img rounded-0 img-fluid" src="${producto.image}">
                    <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul class="list-unstyled">
                            <li><a class="btn btn-success text-white"><i class="far fa-heart"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <a class="h3 text-decoration-none">${producto.name}</a>
                    <p class="text-center mb-0">$${producto.price}</p>
                </div>
            </div>
        `;

        productsList.appendChild(productCard);
    });

    const categoryList = document.getElementById('category-list');

    // Obtener las categorías únicas
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

        // Agregar un evento click para mostrar los productos de la categoría seleccionada
        li.querySelector('a').addEventListener('click', function (e) {
            e.preventDefault();
            const selectedCategory = this.getAttribute('data-category');
            mostrarProductos(selectedCategory);
        });

        categoryList.appendChild(li);
    });
}

// Función para mostrar los productos de una categoría específica
function mostrarProductos(categoria) {

    const productsList = document.getElementById('products-list');
    productsList.innerHTML = ''; // Limpiar productos anteriores

    // Filtrar productos por la categoría seleccionada
    const productosCategoria = catalogo.find(product => product.categoria === categoria).products;

    // Generar las tarjetas de productos
    productosCategoria.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4');

        productCard.innerHTML = `
            <div class="card mb-4 product-wap rounded-0">
                <div class="card rounded-0">
                    <img class="card-img rounded-0 img-fluid" src="${producto.image}">
                    <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul class="list-unstyled">
                            <li><a class="btn btn-success text-white"><i class="far fa-heart"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <a class="h3 text-decoration-none">${producto.name}</a>
                    <p class="text-center mb-0">$${producto.price}</p>
                </div>
            </div>
        `;

        productsList.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', iniciarApp);
