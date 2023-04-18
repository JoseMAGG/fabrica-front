import { Navigate, Route, Routes } from "react-router-dom";
import { MenuJefeDepartamento } from "../pages/jefe-departamento/MenuJefeDepartamento";
import { MenuVicedecano } from "../pages/vicedecano/MenuVicedecano";
import { SelectRole } from "../auth/SelectRole";

export const AppRouter = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<SelectRole/>}/>
            <Route path="/menu-jefe-departamento" element={<MenuJefeDepartamento/>}/>
            <Route path="/menu-vicedecano" element={<MenuVicedecano/>}/>

            <Route path="/" element={<Navigate to="/"/>}/>

        </Routes>
    </>
  )
}
