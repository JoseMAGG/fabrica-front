import Swal from 'sweetalert2';

export const getCursos = async () => {

    const url = `${import.meta.env.VITE_API_URL_CODE_FACTORY}/find-all`;
    const resp = await fetch(url);

    const cursos = await resp.json();
    return cursos
}

export const postCursos = async (curso, materia) => {

    const url = `${import.meta.env.VITE_API_URL_CODE_FACTORY}/cursos/save`;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(curso),
        redirect: 'follow'
    };
    const resp = await fetch(url, requestOptions);

    if (resp.ok) {
        Swal.fire({
            icon: 'success',
            title: `Creación de curso exitosa`,
            text: `El curso de: ${materia} fue creado`,
        })
        return resp;
    } else {
        const message = Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `El codigo del curso: ${materia} no existe`,
        })
        throw new Error(message);
    }
}

export const putCursos = async (curso) => {

    const url = `${import.meta.env.VITE_API_URL_CODE_FACTORY}/cursos/update`;

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(curso),
        redirect: 'follow'
    };
    const resp = await fetch(url, requestOptions);

    if (resp.ok) {
        Swal.fire({
            icon: 'success',
            title: `Actualización de curso exitosa`,
            text: `El curso de: ${materia} fue actualizado`,
        })
        return resp;
    } else {
        const message = Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `El codigo del curso: ${materia} no es valido`,
        })
        throw new Error(message);
    }
}

export const deleteCursos = async (curso) => {

    const url = `${import.meta.env.VITE_API_URL_CODE_FACTORY}/cursos/delete`;

    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(curso),
        redirect: 'follow'
    };
    const resp = await fetch(url, requestOptions);

    if (resp.ok) {
        Swal.fire({
            icon: 'success',
            title: `Eliminación de curso exitosa`,
            text: `El curso de: ${materia} fue eliminado`,
        })
        return resp;
    } else {
        const message = Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `El codigo del curso: ${materia} no es valido`,
        })
        throw new Error(message);
    }
}