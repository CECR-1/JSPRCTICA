// Eentos que ocurren con el mouse

const nav = document.querySelector('.navegacion');


// vamos a registrar el eventListener para el 

nav.addEventListener('mouseenter', () => {
    console.log('entrando a navegacion')

    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
})


// otros eventos abarcan...

// mousedown - // cuando presionamos
// click - similar, de hecho es probablemente el más utilizado..
// dbclick - doble click como cuando quieres abrir un archivo
// mouseup - al soltar
// 