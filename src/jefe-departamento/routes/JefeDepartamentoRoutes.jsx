import { Route, Routes } from "react-router-dom";
import { AgregarCurso } from "../../components/AgregarCurso";
import { ModificarCurso } from "../../components/ModificarCurso";
import { NavBarJefeDepartamento } from "../ui/NavBarJefeDepartamento";
import { NavButtons } from "../../components/NavButtons";
import { EliminarCurso } from "../../components/EliminarCurso";

export const JefeDepartamentoRoutes = () => {
    return (
        <>
           
                <h1>Gestión de Cursos</h1>
                <NavBarJefeDepartamento />
                <div className="routes-cursos">
                    <Routes>
                        <Route path="/" element={<AgregarCurso />} />
                        <Route path="agregar" element={<AgregarCurso />} />
                        <Route path="modificar" element={<ModificarCurso />} />
                        <Route path="eliminar" element={<EliminarCurso />} />
                    </Routes>
                </div>
                <NavButtons />
          

        </>

    )
}
