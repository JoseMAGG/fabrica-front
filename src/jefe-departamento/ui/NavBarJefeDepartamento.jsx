import { NavLink } from 'react-router-dom';
import { getCursos } from "../../services/api";

export const NavBarJefeDepartamento = () => {

    /* const handleButtonCursos = (event) => {
        event.preventDefault();
        getCursos();

    } */

    return (
        <nav className="navbar navbar-expand-md">

            <div className="navbar-nav navbar__items">

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navbar__link ${isActive ? 'active' : ''}`}
                    to="/menu-jefe-departamento/menu-cursos/agregar"

                >
                    Agregar
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navbar__link ${isActive ? 'active' : ''}`}
                    to="/menu-jefe-departamento/menu-cursos/modificar"
                >
                    Modificar
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navbar__link ${isActive ? 'active' : ''}`}
                    to="/menu-jefe-departamento/menu-cursos/eliminar"
                >
                    Eliminar
                </NavLink>

                <NavLink
                    className={({ isActive }) => `nav-item nav-link navbar__link ${isActive ? 'active' : ''}`}
                    to="/menu-jefe-departamento/menu-cursos/cursos-creados"
                /* onClick={handleButtonCursos} */
                >
                    Cursos creados
                </NavLink>

            </div>

        </nav>
    )
}