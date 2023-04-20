import { useForm } from "../hooks/useForm";

import "./index.css"

export const AgregarCurso = () => {

    const {
        onInputChange,
        onResetForm,
        codigoDeMateria,
        pregrado,
        admiteGruposEspejo,
        nombreDelCurso,
        versionPensum,
        nivelAcademico,
        creditosAcademicos,
        intensidadHoraria,
        sede
    } = useForm({
            "codigoDeMateria": "",
            "pregrado": "",
            "admiteGruposEspejo": "",
            "nombreDelCurso": "",
            "versionPensum": "",
            "nivelAcademico": "",
            "creditosAcademicos": "",
            "intensidadHoraria": "",
            "sede": ""
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
                    <label className="form-cursos__div-label"><b>Admite grupos espejos: </b></label>
                    <label className="form-cursos__div-label"><b>Nombre del curso: </b></label>
                    <label className="form-cursos__div-label" for="lang"><b>Versión del pensum: </b></label>
                    <label className="form-cursos__div-label" for="lang"><b>Nivel académico: </b></label>
                    <label className="form-cursos__div-label"><b>Creditos académicos: </b></label>
                    <label className="form-cursos__div-label"><b>Intensidad horaria: </b></label>
                    <label className="form-cursos__div-label" for="lang"><b>Cede: </b></label>
                </div>

                <div className="col-6">
                    <div className="form-cursos__div-inner">
                        <input
                            className=""
                            type="text"
                            name="codigoDeMateria"
                            value={codigoDeMateria}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="form-cursos__div-inner">

                        <select name="languages" id="lang">
                            <option name="pregrado" value={pregrado} selected></option>
                            <option name="pregrado" value={pregrado}>Ingeniería de Sistemas</option>
                            <option name="pregrado" value={pregrado}>Ingeniería de Electronica</option>
                        </select>
                    </div>

                    <div className="form-cursos__div-inner">

                        <input
                            className="mycheck"
                            type="checkbox"
                            name="admiteGruposEspejo"
                            value={admiteGruposEspejo}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="form-cursos__div-inner">

                        <input
                            className=""
                            type="text"
                            name="nombreDelCurso"
                            value={nombreDelCurso}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="form-cursos__div-inner">

                        <select name="versionPensum" value={versionPensum} id="lang">
                            <option name="versionPensum" value={versionPensum} selected></option>
                            <option name="versionPensum" value={versionPensum}>3</option>
                            <option name="versionPensum" value={versionPensum}>4</option>
                            <option name="versionPensum" value={versionPensum}>5</option>
                        </select>
                    </div>

                    <div className="form-cursos__div-inner">

                        <select name="nivelAcademico" value={nivelAcademico} id="lang">
                            <option name="nivelAcademico" value={nivelAcademico} selected></option>
                            <option name="nivelAcademico" value={nivelAcademico}>1</option>
                            <option name="nivelAcademico" value={nivelAcademico}>2</option>
                            <option name="nivelAcademico" value={nivelAcademico}>3</option>
                            <option name="nivelAcademico" value={nivelAcademico}>4</option>
                            <option name="nivelAcademico" value={nivelAcademico}>5</option>
                            <option name="nivelAcademico" value={nivelAcademico}>6</option>
                            <option name="nivelAcademico" value={nivelAcademico}>7</option>
                            <option name="nivelAcademico" value={nivelAcademico}>8</option>
                            <option name="nivelAcademico" value={nivelAcademico}>9</option>
                            <option name="nivelAcademico" value={nivelAcademico}>10</option>
                        </select>
                    </div>

                    <div className="form-cursos__div-inner">

                        <input
                            className=""
                            type="text"
                            name="creditosAcademicos"
                            value={creditosAcademicos}
                            onChange={onInputChange}
                        />
                    </div>


                    <div className="form-cursos__div-inner">

                        <input
                            className=""
                            type="text"
                            name="intensidadHoraria"
                            value={intensidadHoraria}
                            onChange={onInputChange}
                        />
                    </div>

                    <div className="form-cursos__div-inner">

                        <select name="sede" value={sede} id="lang">
                            <option name="sede" value={sede} selected></option>
                            <option name="sede" value={sede}>Ciudadela Universitaria</option>
                            <option name="sede" value={sede}>Cede Robledo</option>
                            <option name="sede" value={sede}>Virtual</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>

    )
}
