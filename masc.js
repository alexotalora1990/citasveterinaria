let horaMaxima = 19;
let minMaximo = 45;
let registros = [];
let op = null;
let indice = null;

document.getElementById("formulario").style.display = "none";

const botonMostrar=document.getElementById("mostrarFormulario");
const formulario=document.getElementById("formulario");
 
botonMostrar.addEventListener("click", function(){
  formulario.style.display=`block`;
  document.getElementById("abierta").checked = true;
  });


let animales = [
  { gato: "./imagenes/gato.png" },
  { perro: "./imagenes/perro.png" },
  { gallina: "./imagenes/gallina.png" },
  { pato: "./imagenes/pato.png" },
  { conejo: "./imagenes/conejo.png" },
];

function validar() {
    let validarTexto = /^[a-zA-Z]+$/;
    let validarTelefono = /^\d{1,11}$/;
    nombre = document.getElementById("nombre").value;
    propietario = document.getElementById("propietario").value;
    telefono = document.getElementById("telefono").value;
    tipoMascota = document.getElementById("tipoMascota").value;
    sintomas = document.getElementById("sintomas").value;
    fecha = document.getElementById("fecha").value;
    hora = document.getElementById("hora").value;
    let fechaSeleccionanda = new Date(fecha);
    let fechaActual = new Date();
    let validarHora = parseInt(hora.split(":")[0], 10);
    let validarMinutos = parseInt(hora.split(":")[1], 10);
    if (nombre == "") {
      document.getElementById("alert").textContent =
        "El nombre no debe estar vacio";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    } else if (!validarTexto.test(nombre)) {
      document.getElementById("alert").textContent =
        "El nombre solo debe contener letras";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    } else if (propietario == "") {
      document.getElementById("alert").textContent =
        "El nombre de propietario no debe estar vacio";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    } else if (!validarTexto.test(propietario)) {
      document.getElementById("alert").textContent =
        "El nombre de propietario solo debe contener letras";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    } else if (telefono == "") {
      document.getElementById("alert").textContent =
        "El telefono no debe estar vacio";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    } else if (!validarTelefono.test(telefono)) {
      document.getElementById("alert").textContent =
        "El telefono solo debe contener numeros, maximo 11 caracteres";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    } else if (fechaSeleccionanda < fechaActual.setHours(0,0,0,0)) {
      document.getElementById("alert").textContent =
        "error al seleccionar la fecha";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
      fecha = document.getElementById("fecha").value = "";
    } else if (fecha == "") {
      document.getElementById("alert").textContent =
        "debes seleccionar una fecha";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    } else if (hora == "") {
      document.getElementById("alert").textContent = "debes seleccionar una hora";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    } else if (
      validarHora < 8 ||
      validarHora >horaMaxima ||
      validarMinutos < 0 ||
      validarMinutos > minMaximo
    ) {
      document.getElementById("alert").textContent =
        "debes seleccionar una hora entre las 8 am y las 7:45 pm";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    } else if (sintomas == "") {
      document.getElementById("alert").textContent =
        "coloca los sintomas que ha tenido tu mascota";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    } else if (tipoMascota == "") {
      document.getElementById("alert").textContent =
        "debes seleccionar un tipo de mascota";
      setTimeout(() => {
        document.getElementById("alert").textContent = "";
      }, 2000);
    }
    else {
        registrar()
    }

}

function registrar() {
  
  let nombre = document.getElementById("nombre").value;
  let propietario = document.getElementById("propietario").value;
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("hora").value;
  let telefono = document.getElementById("telefono").value;
  let tipoMascota = document.getElementById("tipoMascota").value;
  let sintomas = document.getElementById("sintomas").value;
  let estado = document.querySelector('input[name="estado"]:checked').value;

  if (op === true) {
    registros[indice].nombre = nombre;
    registros[indice].propietario = propietario;
    registros[indice].fecha = fecha;
    registros[indice].hora = hora;
    registros[indice].telefono = telefono;
    registros[indice].tipoMascota = tipoMascota;
    registros[indice].sintomas = sintomas;
    registros[indice].estado= estado;

    op = false;

    mostrarCitas();
  } else {
    let user = {
      nombre: nombre,
      propietario: propietario,
      telefono: telefono,
      tipoMascota: tipoMascota,
      sintomas: sintomas,
      fecha: fecha,
      hora: hora,
      estado:estado
    };

    registros.push(user);
    mostrarCitas();
  }

  document.getElementById("nombre").value = "";
  document.getElementById("propietario").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("tipoMascota").value = "";
  document.getElementById("sintomas").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("hora").value = "";

  
  
}

function mostrarCitas() {
  const estadoSeleccionado = document.querySelector('input[name="estado"]:checked').value;
  const citas = document.getElementById('citas');
  citas.innerHTML = '';

  registros.forEach((cita, index) => {
    if (cita.estado === estadoSeleccionado || estadoSeleccionado === 'abiertas') {
    let card = document.createElement("div");
    card.classList.add("card");

    let imagen = document.createElement("img");
    imagen.classList.add("imagen");
    let tipoMascota = cita.tipoMascota.toLowerCase();
    let imagenURL = animales.find((animal) =>
      animal.hasOwnProperty(tipoMascota)
    );

    if (imagenURL) {
      imagen.src = imagenURL[tipoMascota];
      imagen.alt = tipoMascota;
      card.appendChild(imagen);
    } else {
      imagen.src = "ruta_a_imagen_por_defecto.png";
      imagen.alt = "Imagen no disponible";
      card.appendChild(imagen);
    }

    let detalles = document.createElement("div");
    detalles.classList.add("detalles");

    let nombre = document.createElement("p");
    nombre.textContent = `Nombre: ${cita.nombre}`;
    detalles.appendChild(nombre);

    let propietario = document.createElement("p");
    propietario.textContent = `Propietario: ${cita.propietario}`;
    detalles.appendChild(propietario);

    let fecha = document.createElement("p");
    fecha.textContent = `Fecha: ${cita.fecha}`;
    detalles.appendChild(fecha);

    let hora = document.createElement("p");
    hora.textContent = `Hora: ${cita.hora}`;
    detalles.appendChild(hora);

    let telefono = document.createElement("p");
    telefono.textContent = `Telefono: ${cita.telefono}`;
    detalles.appendChild(telefono);

    let sintomas = document.createElement("p");
    sintomas.textContent = `Sintomas: ${cita.sintomas}`;
    detalles.appendChild(sintomas);

    let tipoMascotas = document.createElement("p");
    tipoMascotas.textContent = `Tipo Mascota: ${cita.tipoMascota}`;
    detalles.appendChild(tipoMascotas);

    let estado = document.createElement("p");
    estado.textContent = `Estado: ${cita.estado}`;
    detalles.appendChild(estado);

    let botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.classList.add("buton");
    botonEditar.addEventListener("click", () => {
      editarCita(index);
    });
    detalles.appendChild(botonEditar);

    let botonAnular = document.createElement("button");
    botonAnular.textContent = "Anular";
    botonAnular.classList.add("buton");
    botonAnular.addEventListener("click", () => {
      anularCita(index);
    });
    detalles.appendChild(botonAnular);

    let botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar";
    botonCerrar.classList.add("buton");
    botonCerrar.addEventListener("click", () => {
      cerrarCita(index);
    });
    detalles.appendChild(botonCerrar);

    let botonReabrir = document.createElement("button");
    botonReabrir.textContent = "Abrir";
    botonReabrir.classList.add("buton");
    botonReabrir.addEventListener("click", () => {
      reabrirCita(index);
    });
    detalles.appendChild(botonReabrir);

    if (cita.estado === 'anulada' || cita.estado === 'cerrada') {
      botonEditar.disabled = true;
    } else {
      botonEditar.addEventListener("click", () => {
        editarCita(index);
      });
    }

    detalles.appendChild(botonEditar);

    card.appendChild(detalles);
    citas.appendChild(card);
  }
  });
  document.getElementById("formulario").style.display = "none";
}

function editarCita(index) {
  document.getElementById("formulario").style.display = "block";
  let cita = registros[index];
  indice = index;

  document.getElementById("nombre").value = cita.nombre;
  document.getElementById("propietario").value = cita.propietario;
  document.getElementById("telefono").value = cita.telefono;
  document.getElementById("tipoMascota").value = cita.tipoMascota;
  document.getElementById("sintomas").value = cita.sintomas;
  document.getElementById("fecha").value = cita.fecha;
  document.getElementById("hora").value = cita.hora;

  op = true;
   
}




function anularCita(index) {
  registros[index].estado = 'anulada';
  mostrarCitas();
}


function cerrarCita(index) {
  registros[index].estado = 'cerrada';
  mostrarCitas();
}
function reabrirCita(index) {
  registros[index].estado = 'abierta';
  mostrarCitas();
}






