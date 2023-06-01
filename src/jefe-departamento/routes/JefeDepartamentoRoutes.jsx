import { Route, Routes } from "react-router-dom";
import { AgregarCurso } from "../../components/AgregarCurso";
import { ModificarCurso } from "../../components/ModificarCurso";
import { EliminarCurso } from "../../components/EliminarCurso";
import { CursosCreados } from "../../components/CursosCreados";

export const JefeDepartamentoRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<AgregarCurso />} />
            <Route path="agregar" element={<AgregarCurso />} />
            <Route path="modificar" element={<ModificarCurso />} />
            <Route path="eliminar" element={<EliminarCurso />} />
            <Route path="cursos-creados" element={<CursosCreados/>} />
        </Routes>
    )
}
