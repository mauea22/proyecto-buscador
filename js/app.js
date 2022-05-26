// Variables que referencian los elementos select 
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados (div con id resultado)
const resultado = document.querySelector('#resultado');

//variables para los option de años
const max = new Date().getFullYear(); //toma el año usando la fecha actual
const min = max - 10;

//Genera un objeto con la búsqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas: '',
    transmision : '',
    color : '',
}


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    //Muestra los datos de autos al cargar (array de objetos) 
    mostrarAutos(autos);
    //LLena las opciones de años
    llenarSelect();
})

//eventListener para los input del formulario de búsqueda

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value); //el filtrado del formulario devuelve los numeros como string hay que parsearlo para convertirlo a numero 
    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})



//Funciones
function mostrarAutos(autos) {
    limpiarHTML(); //limpia el HTML, se pone primero
    //Iterar el array de objetos donde están los datos
    autos.forEach( auto => {
        //destructuring para simplificar
        const { marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');
        
        autoHTML.textContent = `
            ${marca} -
            ${modelo} -
            ${year} -
            Precio: ${precio} -
            ${puertas} Puertas -
            color: ${color} -
            transmisión: ${transmision}
        `;

        //Insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}

// limpiar el HTML
function limpiarHTML() {
    //Mientras resultado (que es donde se pinta el HTML) tenga algo
    // que borre lo que este previamente
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}
// Genera los años del select

function llenarSelect() {
    for ( let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

//Función que filtra en base a la búsqueda

function filtrarAuto () {
    //autos es el array de objetos que contiene los datos en db.js
    const resultado = autos.filter( filtrarMarca).filter( filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    //console.log(resultado);
    //llama a la función mostrarAutos pero con la variable resultado como parámetro
    mostrarAutos(resultado);
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;
    if ( year ) {
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if ( minimo ) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if ( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}    

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if( puertas ){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if( transmision ){
        return auto.transmision == transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if( color ){
        return auto.color == color;
    }
    return auto;
}