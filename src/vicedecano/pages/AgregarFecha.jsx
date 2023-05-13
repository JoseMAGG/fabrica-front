import React, { useContext, useEffect, useState } from 'react'
import { DatePickers } from "../../Components/DatePickers" 
import { DateContext } from '../../context/DateContext';
import moment from 'moment';
import { NavButtons } from '../../components/NavButtons';
import '../css/fechasvicedecano.css'


export function AgregarFecha(props) {

    const { fechaInicio,
      setFechaInicio,
      fechaPago,
      setFechaPago,
      fechaOferta,
      setFechaOferta,
      fechaMatricula,
      setFechaMatricula,
      fechaAjustes,
      setFechaAjustes,
      fechaFinales,
      setFechaFinales,
      fechaHabilitaciones,
      setFechaHabilitaciones,
      fechaCierreNotas,
      setFechaCierreNotas,
      fechaValidaciones,
      setFechaValidaciones,
      fechaClases,
      setFechaClases,
      fechaTerminacion,
      setFechaTerminacion,
      
    } = useContext(DateContext);
// Calcular los días/semanas/mes que transcurren por cada fecha despues de fecha_inicio

    const fechas = {
      fecha_inicio: {startDate: moment(fechaInicio.startDate).format('DD/MM/YYYY'), endDate: moment(fechaInicio.endDate).format('DD/MM/YYYY')},
      fecha_pago: {startDate: moment(fechaPago.startDate).format('DD/MM/YYYY'), endDate: moment(fechaPago.endDate).format('DD/MM/YYYY')},
      fecha_oferta: {startDate: moment(fechaOferta.startDate).format('DD/MM/YYYY'), endDate: moment(fechaOferta.endDate).format('DD/MM/YYYY')},
      fecha_matricula: {startDate: moment(fechaMatricula.startDate).format('DD/MM/YYYY'), endDate: moment(fechaMatricula.endDate).format('DD/MM/YYYY')},
      fecha_ajustes: {startDate: moment(fechaAjustes.startDate).format('DD/MM/YYYY'), endDate: moment(fechaAjustes.endDate).format('DD/MM/YYYY')},
      fecha_clases: {startDate: moment(fechaClases.startDate).format('DD/MM/YYYY'), endDate: moment(fechaClases.endDate).format('DD/MM/YYYY')},
      fecha_finales: {startDate: moment(fechaFinales.startDate).format('DD/MM/YYYY'), endDate: moment(fechaFinales.endDate).format('DD/MM/YYYY')},
      fecha_habilitaciones: {startDate: moment(fechaHabilitaciones.startDate).format('DD/MM/YYYY'), endDate: moment(fechaHabilitaciones.endDate).format('DD/MM/YYYY')},
      fecha_validaciones: {startDate: moment(fechaValidaciones.startDate).format('DD/MM/YYYY'), endDate: moment(fechaValidaciones.endDate).format('DD/MM/YYYY')},
      fecha_cierre_notas: {startDate: moment(fechaCierreNotas.startDate).format('DD/MM/YYYY'), endDate: moment(fechaCierreNotas.endDate).format('DD/MM/YYYY')},
      fecha_terminacion: {startDate: moment(fechaTerminacion.startDate).format('DD/MM/YYYY'), endDate: moment(fechaTerminacion.endDate).format('DD/MM/YYYY')},
    }
    
    
    const handleGenerate = () => {
      if(fechaInicio.startDate !== null){
        setFechaPago({startDate: moment(moment(fechaInicio.startDate),'DD/MM/YYYY').toDate(), endDate: moment(moment(moment(fechaInicio.startDate).add(1, 'month')) ,'DD/MM/YYYY').toDate()})
        setFechaOferta({startDate: moment(moment(fechaInicio.startDate).add(2, 'weeks').add(1, 'months'),'DD/MM/YYYY').toDate(), endDate: moment(moment(fechaInicio.startDate).add(1, 'months').add(2, 'weeks'),'DD/MM/YYYY').toDate()})
        setFechaMatricula({startDate: moment(moment(fechaInicio.startDate).add(2, 'days').add(2, 'weeks').add(1, 'month'),'DD/MM/YYYY').toDate(), endDate: moment(moment(fechaInicio.startDate).add(3, 'days').add(2, 'weeks').add(1, 'month'),'DD/MM/YYYY').toDate()})
        setFechaAjustes({startDate: moment(moment(fechaInicio.startDate).add(3, 'weeks').add(2, 'month'),'DD/MM/YYYY').toDate(), endDate: moment(moment(fechaInicio.startDate).add(3, 'months'),'DD/MM/YYYY').toDate()}) 
        setFechaClases({startDate: moment(moment(fechaInicio.startDate).add(1, 'week').add(3, 'months'),'DD/MM/YYYY').toDate(), endDate: moment(moment(fechaInicio.startDate).add(4, "days").add(3, 'months').add(17, 'weeks'),'DD/MM/YYYY').toDate()})
        setFechaFinales({startDate: moment(moment(fechaInicio.startDate).add(3, 'months').add(18, 'weeks'),'DD/MM/YYYY').toDate(), endDate: moment(moment(fechaInicio.startDate).add(3, 'months').add(19, 'weeks'),'DD/MM/YYYY').toDate()})
        setFechaHabilitaciones({startDate: moment(moment(fechaInicio.startDate).add(2, 'days').add(19, 'weeks').add(3, 'months'),'DD/MM/YYYY').toDate(), endDate: moment(moment(fechaInicio.startDate).add(20, 'weeks').add(3, 'months'),'DD/MM/YYYY').toDate()})
        setFechaValidaciones({startDate: moment(moment(fechaInicio.startDate).add(2, 'days').add(2, 'weeks').add(1, 'month'),'DD/MM/YYYY').toDate(), endDate: moment(moment(fechaInicio.startDate).add(2, 'days').add(19, 'weeks').add(3, 'months'),'DD/MM/YYYY').toDate()})
        setFechaCierreNotas({startDate: moment(moment(fechaInicio.startDate).add(2, 'days').add(19, 'weeks').add(3, 'months'),'DD/MM/YYYY').toDate(), endDate: moment(moment(fechaInicio.startDate).add(20, 'weeks').add(3, 'months'),'DD/MM/YYYY').toDate()})
        setFechaTerminacion({startDate: moment(moment(fechaHabilitaciones.endDate).add(3, 'days'),'DD/MM/YYYY').toDate(), endDate: moment(moment(fechaHabilitaciones.endDate).add(3, 'days'),'DD/MM/YYYY').toDate()})
      }else{
        alert('Debe seleccionar una fecha de inicio')
      }
    }
    
    const handleSubmit = async () =>{
      console.log(fechas);
      // try {
      //   const response = await axios.post('http://url../api/calendarios/save', fechas);
      //   console.log(response.data);
      // } catch (error) {
      //   console.error(error);
      // }
    }
    
    const [activado, setActivado] = useState(true)
    useEffect(() => {
      setActivado(fechaInicio.startDate === null)
    }, [fechaInicio])

  return (
    <>
      <div className='container'>
        <div className='subcontainer'>
          <DatePickers currentValue={fechaInicio} title="Fecha de inicio"       visible={false} setFecha={setFechaInicio} />
          <DatePickers activado={activado}  currentValue={fechaPago}            visible={true}  title="Fecha de pagos"            setFecha={setFechaPago} />
          <DatePickers activado={activado}  currentValue={fechaOferta}          visible={false}  title="Publicación de la Oferta"  setFecha={setFechaOferta} />
          <DatePickers activado={activado}  currentValue={fechaMatricula}       visible={true}  title="Fecha de Matricula"        setFecha={setFechaMatricula} />
          <DatePickers activado={activado}  currentValue={fechaAjustes}         visible={true}  title="Fecha de Ajustes"          setFecha={setFechaAjustes} />
          <DatePickers activado={activado}  currentValue={fechaClases}          visible={true}  title="Fecha de Clases"          setFecha={setFechaClases} />
          <DatePickers activado={activado}  currentValue={fechaFinales}         visible={true}  title="Fecha de Exámenes Finales" setFecha={setFechaFinales} />
          <DatePickers activado={activado}  currentValue={fechaHabilitaciones}  visible={true}  title="Fecha de Habilitaciones"   setFecha={setFechaHabilitaciones} />
          <DatePickers activado={activado}  currentValue={fechaValidaciones}    visible={true}        title="Fecha de Validaciones"          setFecha={setFechaValidaciones} />
          <DatePickers activado={activado}  currentValue={fechaCierreNotas}     visible={true}  title="Fecha de Cierre de Notas"  setFecha={setFechaCierreNotas} />
          <DatePickers activado={activado}  currentValue={fechaTerminacion}     visible={false}      title="Fecha de Terminacion Oficial"          setFecha={setFechaTerminacion} />
        </div>
        <NavButtons  onSubmit={handleSubmit} onGenerate={handleGenerate}       showGenerate={true}/>    
        {/* <button onClick={handleGenerate}>Generar</button>
        <button onClick={handleSubmit}>Enviar</button> */}
      </div>
    </>
  )
}
