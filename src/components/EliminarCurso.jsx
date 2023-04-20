import { useForm } from "../hooks/useForm";

import "./index.css"

export const EliminarCurso = () => {

    const { onInputChange, onResetForm, user, password } = useForm({
        /* "codigoMateria": "", */
        "user": "",
        "password": "",
    });

    const onSubmitForm = (event) => {
        event.preventDefault();
        onResetForm();
    }

    return (
        <form className="form-cursos">

            <div className="form-cursos__div d-flex row">
                <div className="col-6 d-grid">
                    <label className="form-cursos__div-label"><b>Código de materia: </b></label>
                    <label className="form-cursos__div-label" for="lang"><b>Pregrado: </b></label>
                    <label className="form-cursos__div-label"><b>Nombre del curso: </b></label>
                    <label className="form-cursos__div-label" for="lang"><b>Versión del pensum: </b></label>
                </div>

                <div className="col-6">
                    <div className="form-cursos__div-inner">
                        <input
                            className=""
                            type="text"
                            /* name="codigoMateria"
                            value={codigoMateria} */
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="form-cursos__div-inner">
                        <select name="languages" id="lang">
                            <option value="javascript" selected></option>
                            <option value="javascript">Ingeniería de Sistemas</option>
                            <option value="javascript">Ingeniería de Electronica</option>
                        </select>
                    </div>

                    <div className="form-cursos__div-inner">

                        <input
                            className=""
                            type="text"
                            /* name="codigoMateria"
                            value={codigoMateria} */
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="form-cursos__div-inner">

                        <select name="languages" id="lang">
                            <option value="javascript" selected></option>
                            <option value="javascript">3</option>
                            <option value="javascript">4</option>
                            <option value="javascript">5</option>
                        </select>
                    </div>
                </div>
            </div>


        </form>
    )
}
