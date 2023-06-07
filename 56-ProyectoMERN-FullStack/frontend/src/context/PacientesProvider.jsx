import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const PacientesContext = createContext();

export const PacientesProvider = ({ children }) => {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        const obtenerPacientes = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

                const { data } = await clienteAxios("/pacientes", config);
                setPacientes(data);
            } catch (error) {
                console.log(error.response.data.msg);
            }
        };
        obtenerPacientes();
    }, []);

    const guardarPaciente = async (paciente) => {

        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        if (paciente.id) {
            try {
                const { data } = await clienteAxios.put(`/pacientes/${paciente.id}`, paciente, config);

                const pacienteActualizado = pacientes.map( pacientesState => pacientesState._id === data._id ? data : pacientesState);
                setPacientes(pacienteActualizado);
            } catch (error) {
                console.log(error)
            }
        } else {

            try {
                const token = localStorage.getItem("token");
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const { data } = await clienteAxios.post(
                    "/pacientes",
                    paciente,
                    config
                );
    
                setPacientes(data);
    
                const { createdAt, updatedAt, __v, ...pacienteAlmacenado } =
                    data;
    
                setPacientes([pacienteAlmacenado, ...pacientes]);
            } catch (error) {
                console.log(error.response.data.msg);
            }        }


    };

    const setEdicion = (paciente) => {
        setPaciente(paciente);
    };

    return (
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente,
                setEdicion,
                paciente,
            }}
        >
            {children}
        </PacientesContext.Provider>
    );
};

export default PacientesContext;
