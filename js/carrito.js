let carritoCompra = document.getElementById("carrito-content")

let carritoCargado = localStorage.getItem("carrito")
carritoCargado = JSON.parse(carritoCargado)

function mostrarCarrito(itemCarrito) {
    itemCarrito.forEach(producto => {
        const cardCompra = document.createElement("div")
        cardCompra.innerHTML = `<div class="carrito-content" ID:"${producto.id}>
                                <img src="../${producto.Image}" alt="">
                                <h3>${producto.nombre}</h3>
                                <p>$${producto.precio}</p>
                                <button class="eliminar-item" id="${producto.id}">Eliminar</button>
                                </div>`
        carritoCompra.appendChild(cardCompra)
    })
}
mostrarCarrito(carritoCargado)


// eliminar item del carrito

const eliminarItem = document.querySelectorAll(".eliminar-item")
eliminarItem.forEach(boton => {
    boton.onclick = (e) => {
        const itemId = e.currentTarget.id
        carritoCargado = carritoCargado.filter(item => item.id != itemId)
        localStorage.setItem("carrito", JSON.stringify(carritoCargado))
        location.reload()
    }
})

// total del carrito

const totalCompra = carritoCargado.reduce((acc, item) => acc + item.precio, 0)
const mostrarTotal = document.createElement("div")
mostrarTotal.innerHTML = `<h3>Total: $${totalCompra}</h3>`
carritoCompra.appendChild(mostrarTotal)