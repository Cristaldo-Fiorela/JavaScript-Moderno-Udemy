document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        asunto: '',
        mensaje: '',
    }
    console.log(email);

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner');
    const btnAddEmail = document.querySelector('#agregarEmail');
    console.log(btnAddEmail)

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    btnAddEmail.addEventListener('click', agregarInput);
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function (e) {
        e.preventDefault();
        resetearFormulario();
    })

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetearFormulario();

            // Crear una alerta
            alertaExito()
        }, 3000)
    }

    function validar(e) {
        //console.log(e.target.parentElement.nextElementSibling);
        if (e.target.value.trim() == '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = ''; // reiniciamos el valor de nuestro objeto de email cada vez que este cambie.
            comprobarEmail();
            return; // <= detiene la ejecucion del codigo
        }

        // Preguntamos si no es un email valido y por id que se ejecute solo en el input email.
        if (!validarEmail(e.target.value) && e.target.id === 'email') {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //Comprobar el objeto de email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        //Limpiar alerta en caso de que exista
        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        // Inyectar el error en el formualario
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove()
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetearFormulario() {
        // reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
        comprobarEmail();
    }

    function alertaExito() {
        const alertaExito = document.createElement('P');
        alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'm-10', 'font-bold', 'text-sm', 'uppercase');
        alertaExito.textContent = 'Mensaje enviado correctamente';

        formulario.appendChild(alertaExito);
        setTimeout(() => {
            alertaExito.remove();
        }, 3000);
    }

    // function agregarInput() {
    //     console.log('agregando input....');
    //     const nuevoLabel = document.createElement('LABEL');
    //     nuevoLabel.textContent = 'CC:'

    //     formulario.appendChild(nuevoLabel);
    // }
})
