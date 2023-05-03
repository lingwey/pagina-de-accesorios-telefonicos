document.addEventListener("DOMContentLoaded", function (){
    var swiper = new Swiper (".myswiper-1",{
        slidesPerViw: 1,
        spaceBetween: 30,
        loop: true,
        pagination:{
            el:".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        autoplay:{
            delay:3000,
            disableOnInteraction: false
        },
    });

    var swiper = new Swiper (".myswiper",{
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev",
        },
        breakpoints :{
            0:{
                slidesPerView:1
            },
            520:{
                slidesPerView:2
            },
            950:{
                slidesPerView:3
            },
        },
    });

    
});

// carrito

const carrito = $("#carrito");
const elementos = $("#lista-1").on("click", comprarElemento);
const elementos2 = $("#lista-2");
const elementos3 = $("#lista-3");
const lista = $("#lista-carrito tbody");
const vaciarCarritoBtn = $("#vaciar-carrito");
const carritoCostoTotal = $("total");
carritoCostoTotal.text("$0.00");

//cargarCarrito();

/*function cargarCarrito(){
    elementos.on("click",comprarElemento);
    elementos2.click(comprarElemento);
    elementos3.click(comprarElemento);
    carrito.click(eliminarElemento);
    vaciarCarritoBtn.click(vaciarCarrito);
    console.log("cargar carrito")
}*/

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElementos(elemento);
    };
    console.log("comprar elemento")
}

function leerDatosElementos(elemento){
    const infoElemento = {
        imagen : elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector(".precio").textContent,
        id: elemento.querySelector("a").getAttribute("data-id")
    }
    console.log("hola")
    subirCarrito(infoElemento);
}

function subirCarrito(elemento){
    const filaCarrito = document.createElement("tr");
    filaCarrito.innerHTML = `
    <td>
        <img src= "${elemento.imagen}" width = 100 />
    </td>
    <td>
        ${elemento.titulo}
    </td>
    <td class= "precio">
        ${elemento.precio}
    </td>
    <td>
        <a herf = "#" class = "borrar" data-id = "${elemento.id}">
            X
        </a>
    </td>
    `
    lista.appendChild(filaCarrito);
    console.log(filaCarrito)
    actualizarCostoTotal();
}

function actualizarCostoTotal (){
    let costoTotalActual = 0;
    const elementosCarrito = $("#lista-carrito tbody tr");
    elementosCarrito.forEach(function(elementoCarrito) {
        const precio = parseFloat(elementoCarrito.querySelector(".precio").textContent.replace("$",""));
        costoTotalActual +=precio;
    });
    carritoCostoTotal.text("$" + costoTotalActual.toFixed(2))
}

function eliminarElemento (e){
    e.preventDefault();
    let elemento;
    let elementoId;

    if (e.target.classList.contains("borrar")){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id")
    }
    actualizarCostoTotal()
}

function vaciarCarrito(){
    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    carritoCostoTotal.text("$0.00");
    return false
}

