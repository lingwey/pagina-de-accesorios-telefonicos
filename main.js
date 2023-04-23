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

    cargarCarrito();
});

// carrito

const carrito = $("#carrito");
const elemetos = $("#lista-1");
const elementos2 = $("#lista-2");
const elementos3 = $("#lista-3");
const lista = $("#lista-carrito tbody");
const vaciarCarritoBtn = $("#vaciar-carrito");


function cargarCarrito(){
    elemetos.addEventListener("click", comprarElemento);
    elemetos2.addEventListener("click", comprarElemento);
    elemetos3.addEventListener("click", comprarElemento);
    carrito.addEventListener("click", eliminarElemento);
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElementos(elemento);
    };
}

function leerDatosElementos(elemento){
    const infoElemento = {
        imagen : elemento.querySelector('img')
    }
}

