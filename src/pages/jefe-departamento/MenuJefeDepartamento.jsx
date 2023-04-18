import { useNavigate } from "react-router-dom";

import './jefeDepartamento.css';

export const MenuJefeDepartamento = () => {

    const navigate = useNavigate();

    const SelectMenu = ({ target }) => {
        if (target.name == 'button_jefe_departamento') {
            navigate('/menu-jefe-departamento')
        } else {
            navigate('/menu-vicedecano')
        }
    }

    return (
        <div className="div_menu">
            <div className="div_menu_buttons">
                <h2 className="mb-4 title_color d-flex justify-content-center">Menú Jefe de Departamento: </h2>

                <button
                    className="menu_button"
                    onClick={SelectMenu} 
                    name="button_cursos"
                >
                    Cursos
                </button>

                <button
                    className="menu_button"
                    onClick={SelectMenu}
                    name="button_grupos"
                >
                    Grupos
                </button>

                <button
                    className="menu_button"
                    onClick={SelectMenu}
                    name="button_fechas_semestrales"
                >
                    Fechas Semestrales
                </button>

            </div>
        </div>
    )
}
