let horaMaxima = 19;
let minMaximo = 45;
let registros = [];
let op = null;
let indice = null;

let animales = [
    { gato: './imagenes/gato.png' },
    { perro: './imagenes/perro.png' },
    { gallina: './imagenes/gallina.png' },
    { pato: './imagenes/patopng.png' },
    { conejo: './imagenes/conejo.png' }
];

function registrar() {
    let nombre = document.getElementById('nombre').value;
    let propietario = document.getElementById('propietario').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let telefono = document.getElementById('telefono').value;
    let tipoMascota = document.getElementById('tipoMascota').value;
    let sintomas = document.getElementById('sintomas').value;

    if (op === true) {
        registros[indice].nombre = nombre;
        registros[indice].propietario = propietario;
        registros[indice].fecha = fecha;
        registros[indice].hora = hora;
        registros[indice].telefono = telefono;
        registros[indice].tipoMascota = tipoMascota;
        registros[indice].sintomas = sintomas;

        op = false;

        mostrarCitasAbiertas();
    } else {
        let user = {
            nombre: nombre,
            propietario: propietario,
            telefono: telefono,
            tipoMascota: tipoMascota,
            sintomas: sintomas,
            fecha: fecha,
            hora: hora
        };

        registros.push(user);
        mostrarCitasAbiertas();
    }

    document.getElementById('nombre').value = '';
    document.getElementById('propietario').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('tipoMascota').value = '';
    document.getElementById('sintomas').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('hora').value = '';
}

function mostrarCitasAbiertas() {
    let contenedorCitas = document.getElementById('citasAbiertas');
    contenedorCitas.innerHTML = '';

    registros.forEach((cita, index) => {
        let card = document.createElement('div');
        card.classList.add('card');
        

        let imagen = document.createElement('img');
        let tipoMascota = cita.tipoMascota.toLowerCase();
        let imagenURL = animales.find(animal => animal.hasOwnProperty(tipoMascota));

        if (imagenURL) {
            imagen.src = imagenURL[tipoMascota];
            imagen.alt = tipoMascota;
            card.appendChild(imagen);
        } else {
            imagen.src = 'ruta_a_imagen_por_defecto.png';
            imagen.alt = 'Imagen no disponible';
            card.appendChild(imagen);
        }

        let detalles = document.createElement('div');
        detalles.classList.add('detalles');

        let nombre = document.createElement('p');
        nombre.textContent = `Nombre: ${cita.nombre}`;
        detalles.appendChild(nombre);

        let propietario = document.createElement('p');
        propietario.textContent = `Propietario: ${cita.propietario}`;
        detalles.appendChild(propietario);

        let fecha = document.createElement('p');
        fecha.textContent = `Fecha: ${cita.fecha}`;
        detalles.appendChild(fecha);

        let hora = document.createElement('p');
        hora.textContent = `Hora: ${cita.hora}`;
        detalles.appendChild(hora);

        let telefono = document.createElement('p');
        telefono.textContent = `Telefono: ${cita.telefono}`;
        detalles.appendChild(telefono);

        let sintomas = document.createElement('p');
        sintomas.textContent = `Sintomas: ${cita.sintomas}`;
        detalles.appendChild(sintomas);

        let tipoMascotas = document.createElement('p');
        tipoMascotas.textContent = `Tipo Mascota: ${cita.tipoMascota}`;
        detalles.appendChild(tipoMascotas);

        let botonEditar = document.createElement('button');
        botonEditar.textContent = 'Editar';
        botonEditar.addEventListener('click', () => {
            editarCita(index);
        });
        detalles.appendChild(botonEditar);

        let botonAnular = document.createElement('button');
        botonAnular.textContent = 'Anular';
        botonAnular.addEventListener('click', () => {
            anularCita(index);
        });
        detalles.appendChild(botonAnular);

        let botonCerrar = document.createElement('button');
        botonCerrar.textContent = 'Cerrar';
        botonCerrar.addEventListener('click', () => {
            cerrarCita(index);
        });
        detalles.appendChild(botonCerrar)

        card.appendChild(detalles);
        contenedorCitas.appendChild(card);
    });
}

function editarCita(index) {
    let cita = registros[index];
    indice = index;

    document.getElementById('nombre').value = cita.nombre;
    document.getElementById('propietario').value = cita.propietario;
    document.getElementById('telefono').value = cita.telefono;
    document.getElementById('tipoMascota').value = cita.tipoMascota;
    document.getElementById('sintomas').value = cita.sintomas;
    document.getElementById('fecha').value = cita.fecha;
    document.getElementById('hora').value = cita.hora;

    op = true;
}

