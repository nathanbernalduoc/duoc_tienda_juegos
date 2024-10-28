function mostrarUbicacion(posicion) {
    const coordenadas = posicion.coords;
    const mapa = document.getElementById('map');
    mapa.innerHTML = `Latitud: ${coordenadas.latitude}, Longitud: ${coordenadas.longitude}`;
}

function errorUbicacion(error) {
    console.log(`Error al obtener la unicación ${error.message}`);

}

function checUser(user) {

    if (user == 'nathanbernal') {
        document.getElementById('check_user_msg').innerHTML = 'El nombre de usuario utilizado ya se encuentra en uso.';
        document.getElementById('usuario').focus();
        setTimeout("document.getElementById('check_user_msg').innerHTML = '';", 3000);
        return false;
    }
}

function clienteRegistrar() {

    console.log(document.getElementById('contrasena1').value.length);

    if (
        document.getElementById('usuario').value.trim() == '' ||
        document.getElementById('contrasena1').value.trim() == '' ||
        document.getElementById('contrasena2').value.trim() == '' ||
        document.getElementById('nombre').value.trim() == '' ||
        document.getElementById('fecha').value.trim() == ''
    ) {

        document.getElementById('check_msg').innerHTML = '<h3>Todos los campos son obligatorios</h3>';
        setTimeout("document.getElementById('check_msg').innerHTML = '';", 3000);
        return false;

    } else if (document.getElementById('contrasena1').value.length < 6 || document.getElementById('contrasena1').value.length > 18) {

        document.getElementById('check_pass').innerHTML = '<h3>La contrase&ntilde;a debe tener como m&iacute;nimo 6 caracteres y un m&aacute;ximo de 18 caracteres.</h3>';
        setTimeout("document.getElementById('check_pass').innerHTML = '';", 3000);
        return false;

    } else if (document.getElementById('contrasena1').value != document.getElementById('contrasena2').value != '') {

        document.getElementById('check_pass').innerHTML = '<h3>Las contrase&ntilde;as no coinciden.</h3>';
        setTimeout("document.getElementById('check_pass').innerHTML = '';", 3000);
        return false;

    } else if (!buscarMayuscula(document.getElementById('contrasena1').value)) {

        document.getElementById('check_pass').innerHTML = '<h3>La contraseña debe contener una letra.</h3>';
        setTimeout("document.getElementById('check_pass').innerHTML = '';", 3000);
        return false;

    }

    var edad = checkEdad(document.getElementById('fecha').value);
    console.log("Edad "+edad);
    if (edad < 13) {

        document.getElementById('check_edad').innerHTML = '<h3>El nuevo cliente no puede tener menos de 13 a&ntilde;os.</h3>';
        setTimeout("document.getElementById('check_edad').innerHTML = '';", 3000);
        return false;

    }

    alert('Nuevo cliente registrado!');

    clienteLimpiar();

}

function buscarMayuscula(s) {

    var pattern1 = new RegExp(/[0-9]/);
    var pattern2 = new RegExp(/[A-Z]/);
    return (pattern1.test(s) && pattern2.test(s));
    
}

function clienteLimpiar() {

    document.getElementById('usuario').value = '';
    document.getElementById('contrasena1').value = '';
    document.getElementById('contrasena2').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('direccion').value = '';

}

function checkEdad(fecha) {

    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;

}

/*
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion, errorUbicacion);
} else {
    console.log('La geolocalización no está disponible en este navegador.');
}
    */