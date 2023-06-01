import { useEffect, useState } from "react"
import { deleteCursos, getCursos } from "../services/api"
import { CursoItem } from "./CursoItem";

export const CursosCreados = () => {

    const [cursos, setCursos] = useState([]);

    const cursosCreados = async () => {
        const newCursos = await getCursos();
        setCursos(newCursos);
    }

    useEffect(() => {
        cursosCreados();
    }, []);


    const onDeleteCurso = async (curso, index) => {
        const resp = await deleteCursos(curso);
        if(resp.ok) {
            console.log(resp, index)
            setCursos(cursos.splice(index, 1))
        }
        console.log(resp)
        /* setCursos(resp); */
    }

    useEffect(() => {
        onDeleteCurso()
    }, [cursos]);

    return (
        <>
            <div>
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
            </div>
        </>
    )
}
