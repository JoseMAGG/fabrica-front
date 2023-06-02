import { useEffect, useState } from "react"
import { deleteCursos, getCursos } from "../services/api"
import { CursoItem } from "./CursoItem";

export const CursosCreados = () => {

    let [cursos, setCursos] = useState([]);

    const cursosCreados = async () => {
        const newCursos = await getCursos();
        setCursos(newCursos);
    }

    useEffect(() => {
        cursosCreados();
    }, []);
    useEffect(() => {}, [cursos])

    useEffect(() => {}, [cursos])

    const onDeleteCurso = async (curso, index) => {
        const resp = await deleteCursos(curso);
        if(resp.ok) {
            const auxCursos = [...cursos]
            auxCursos.splice(index,1)
            setCursos(auxCursos)
        }
    }

    return (
        <>
            <div className="container-cursos-creados">
                {
                    cursos.map((curso, index) => (
                        <CursoItem
                            key={curso}
                            onDeleteCurso={(curso)=> onDeleteCurso(curso, index)}
                            {...curso}
                            {...curso.materia}
                        />
                    ))
                }

                <h1 className="d-flex justify-content-center">{cursos.length == 0 ? "No hay cursos creados" : ""}</h1>
            </div>
        </>
    )
}
