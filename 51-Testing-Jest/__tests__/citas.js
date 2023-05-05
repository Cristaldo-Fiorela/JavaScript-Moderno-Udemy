import Citas from '../js/classes/Citas';

describe('Crear la clase de citas', () => {
    const citas = new Citas;
    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Fiore',
            telefono: '123124',
            fecha: '10-12-2023',
            hora:'8.00p.m',
            sintomas: 'Solo duerme'
        }

        citas.agregarCita(citaObj);

        // Prueba
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Donna',
            propietario: 'Fiore',
            telefono: '123124',
            fecha: '10-12-2023',
            hora:'8.00p.m',
            sintomas: 'Solo duerme'
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar citas', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })
});