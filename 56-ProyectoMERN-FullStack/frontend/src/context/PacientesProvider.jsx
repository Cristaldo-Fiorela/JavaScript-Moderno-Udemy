import { createContext, useState ,useEffect} from 'react';
import clienteAxios from '../config/axios';

const PacientesContext = createContext();

// eslint-disable-next-line react/prop-types
export const PacientesProvider = ({ children }) => {

    const [pacientes, setPacientes ] = useState([]);

    return (
        <PacientesContext.Provider
            value={{
                pacientes,
            }}
        >
            {children}
        </PacientesContext.Provider>
    )
}


export default PacientesContext;