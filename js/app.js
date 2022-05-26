// Variables que referencian los elementos select 
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados (div con id resultado)
const resultados = document.querySelector('#resultado');

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
    mostrarAutos();
    //LLena las opciones de años
    llenarSelect();
})

//eventListener para los input del formulario de búsqueda

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
})



//Funciones
function mostrarAutos() {
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
    const resultado = autos.filter( filtrarMarca);

}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}