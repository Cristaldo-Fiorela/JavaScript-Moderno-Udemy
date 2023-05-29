import mongoose from 'mongoose';

const pacientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    propietario: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    sintomas: {
        type: String,
        required: true,
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId, // referencia del id del modelo de veterinario
        ref: 'Veterinario',
    },
},{
    timestamps: true, // crea la columna de editado y creado
});

const Paciente = mongoose.model('Paciente', pacientesSchema);

export default Paciente