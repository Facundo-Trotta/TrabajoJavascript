// js/cart.js

let carrito = [];

// Función para agregar un producto al carrito
async function agregarProductoAlCarrito(id) {
    try {
        const producto = await obtenerProductoPorId(id);
        const productoEnCarrito = carrito.find(item => item.id === id);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += 1;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        saveCart();
        actualizarCarritoEnDOM();
    } catch (error) {
        showError('No se pudo agregar el producto al carrito.');
        console.error(error);
    }
}
// Función para obtener un producto por su ID desde data.json
async function obtenerProductoPorId(id) {
    try {
        const response = await fetch('js/data.json');
        if (!response.ok) {
            throw new Error('Error al obtener el producto');
        }
        const productos = await response.json();
        const producto = productos.find(p => p.id === id);
        if (!producto) {
            throw new Error('Producto no encontrado');
        }
        return producto;
    } catch (error) {
        showError('Error al obtener el producto');
        console.error(error);
    }
}
// Función para actualizar la visualización del carrito en el DOM
function actualizarCarritoEnDOM() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        carrito.forEach(item => {
            const itemHTML = `
                <div class="carrito-item">
                    <img src="${item.imagen}" alt="${item.nombre}" class="carrito-item-img">
                    <div class="carrito-item-info">
                        <h4>${item.nombre}</h4>
                        <p>Precio: $${item.precio.toFixed(2)}</p>
                        <p>Cantidad: ${item.cantidad}</p>
                        <p>Subtotal: $${(item.precio * item.cantidad).toFixed(2)}</p>
                        <button class="eliminar-item" data-id="${item.id}">Eliminar</button>
                    </div>
                </div>
            `;
            carritoContainer.insertAdjacentHTML('beforeend', itemHTML);
        });

        // Agregar eventos a los botones de eliminar
        const botonesEliminar = document.querySelectorAll('.eliminar-item');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', eliminarDelCarrito);
        });
    }

    actualizarTotalCarrito();
}
// Función para actualizar el total del carrito
function actualizarTotalCarrito() {
    const totalCarrito = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
    document.getElementById('total-carrito').textContent = totalCarrito.toFixed(2);
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(event) {
    const productoId = parseInt(event.target.getAttribute('data-id'));
    carrito = carrito.filter(item => item.id !== productoId);
    saveCart();
    actualizarCarritoEnDOM();
    showSuccess('Producto eliminado del carrito');
}
// Función para vaciar el carrito
function vaciarCarrito() {
    if (carrito.length === 0) {
        showError('El carrito ya está vacío');
        return;
    }

    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Vas a vaciar todo el carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            saveCart();
            actualizarCarritoEnDOM();
            showSuccess('Carrito vaciado');
        }
    });
}