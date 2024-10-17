function mostrarUbicacion(posicion) {
    const coordenadas = posicion.coords;
    const mapa = document.getElementById('map');
    mapa.innerHTML = `Latitud: ${coordenadas.latitude}, Longitud: ${coordenadas.longitude}`;
}

function errorUbicacion(error) {
    console.log(`Error al obtener la unicación ${error.message}`);

}

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion, errorUbicacion);
} else {
    console.log('La geolocalización no está disponible en este navegador.');
}