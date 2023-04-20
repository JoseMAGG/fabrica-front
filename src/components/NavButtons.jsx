import { useNavigate } from "react-router-dom";

export const NavButtons = () => {

    const navigate = useNavigate();

    const returnMenu = () => {
       
        navigate('/menu-jefe-departamento')
        
    }
    return (
        <div className="d-flex justify-content-between">
            <button
                className="form_button"
                onClick={returnMenu}
            >Regresar</button>

            <button
                className="form_button"
                /* onClick={onSubmitForm} */
            >Guardar</button>
        </div>
    )
}
