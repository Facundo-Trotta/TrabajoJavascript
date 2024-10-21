const productos = [
    {
        id: 1,
        nombre: "pantalon jogges negro",
        precio: 19.99,
        Image: "img/1.jpg",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "zapatillas reebok negras",
        precio: 55.99,
        Image: "img/2.webp",
        cantidad: 1
    },
    { 
    id: 3,
    nombre: "remera freres verde",
        precio: 10.99,
        Image: "img/3.webp",
        cantidad: 1
    },
    { 
    id: 4,
    nombre: "gorra de new era negra",
        precio: 49.99,
        Image: "img/4.jpg",
        cantidad: 1
    },
    { 
    id: 5,
    nombre: "buzo queen crema",
        precio: 19.99,
        Image: "img/5.webp",
        cantidad: 1
    },
]

//carrito

let carrito = [];

let productCard = document.getElementById("productos")

function mostrarProductos(arrayProductos) {
    arrayProductos.forEach(producto => {
        const cards = document.createElement("div")
        cards.className = "card"

        cards.innerHTML = ` <div class="productos-container" ID:"${producto.id}>
                            <img src="${producto.Image}" alt="">
                            <h3>${producto.nombre}</h3>
                            <span>$${producto.precio}</span>
                            <button class="add-cart" id="${producto.id}">Agregar al carrito</button>
                            </div>`
        productCard.appendChild(cards)
    })
    agregarAlCarrito()
}
mostrarProductos(productos)

function agregarAlCarrito() {
    const botones = document.querySelectorAll(".add-cart")
    botones.forEach(boton => {
        boton.onclick = (e) => {
            const productoId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productoId)
            carrito.push(selectedProduct)
            localStorage.setItem("carrito", JSON.stringify(carrito))
        }
    })
}
