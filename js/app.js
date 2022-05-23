// Variables
const resultados = document.querySelector('#resultado');


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})


//Funciones
function mostrarAutos() {
    //Iterar el array de objetos donde estan los datos
    autos.forEach( auto => {
        //destructuring para simplificar
        const { marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');
        
        autoHTML.textContent = `
            ${marca} -
            ${modelo} -
            ${year} -
            ${precio} -
            ${puertas} -
            ${color} -
            ${transmision}
        `;

        //Insertar en el HTML
        resultado.appendChild(autoHTML);
    });

    
}