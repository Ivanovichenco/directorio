function agregarPersona(miformulario) {
    /*let input_nombre = document.getElementById('nombre');*/
    /*console.log(input_nombre.value);
    console.log(miformulario.nombre.value);*/
    /*captamos los datos desde el form en una fila*/
    let tabla = document.getElementById('datos');
    /* y los ordenamos y grabamos en la variable xhtml*/
    let xhtml = "" +
        "<tr><td>" + miformulario.nombre.value + "</td>" +
        "<td>" + miformulario.tipo.value + "</td>" +
        "<td>" + miformulario.documento.value + "</td>" +
        "<td>" + miformulario.direccion.value + "</td>" +
        "<td>" + miformulario.telefono.value + "</td>" +
        "<td><a onclick='eliminarPersona(this.parentNode.parentNode)' class='button is-danger'>Eliminar</a></td></tr>";

    if (validar(miformulario)){
        /*Grabamos la fila de la tabla */
        tabla.innerHTML += xhtml;
        /*Limpiar el formulario despues del click*/
        miformulario.reset();
    }
}

function validar(miformulario) {
    /*Validamos cada campo del formulario si está vacío generamos un alert */
    if (miformulario.nombre.value == "") {
        alert("Debe escribir el nombre");
        /* colocamos en rosa el campo agregando la clase Bulma color is-danger */
        miformulario.nombre.classList.add('is-danger');
        /* yhacemos que el cursor se enfoque en este campo*/
        /*repetimos esto en los otros campos del form*/
        miformulario.nombre.focus();
        return false;

    } else if (miformulario.tipo.value == -1) {
        alert("Debe seleccionar tipo documento");
        miformulario.tipo.classList.add('is-danger');
        miformulario.tipo.focus();
        return false;
    } else if (miformulario.documento.value == "") {
        alert("Debe escribir numero de documento");
        miformulario.documento.classList.add('is-danger');
        miformulario.documento.focus();
        return false;
    } else if (miformulario.direccion.value == "") {
        alert("Debe escribir escribir su direccion");
        miformulario.direccion.classList.add('is-danger');
        miformulario.direccion.focus();
        return false;
    } else if (miformulario.telefono.value == "") {
        alert("Debe escribir numero de telefono");
        miformulario.telefono.classList.add('is-danger');
        miformulario.telefono.focus();
        return false;
    }

    return true;
}
/* definimos la funcion eliminar*/
function eliminarPersona(elemento) {
    let mensageEliminar = confirm("Desea elinar este registro?");
    if (mensageEliminar) {
        /* console.log(elemento);*/
        elemento.remove();
    }
}