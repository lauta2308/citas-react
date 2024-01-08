import React, { useEffect } from 'react'
import Paciente from './Paciente'


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect(

    () => {
      console.log(pacientes)
    }, [pacientes]


  )

  return (

    <div className="md:w-1/2 lg:w-3/5 mx-5">




      {pacientes.length > 0 ? 
      
        <>
        
        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>


        <p className=" mt-5 text-center mb-10 text-xl">
          Administra tus {""}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        
        
        </> 


        : 

        <>
          <h2 className="font-black text-3xl text-center">Agrega Pacientes</h2>


          <p className=" mt-5 text-center mb-10 text-xl">
            Y se mostrarán {""}
                  <span className="text-indigo-600 font-bold">Aquí</span>
          </p>



        
        
        </>

      
    }
              


          <div className='md:overflow-y-scroll md:h-screen'>



        
         {pacientes.map(paciente => (

                <Paciente 
                key = {paciente.id}
                paciente = {paciente}
                setPaciente = {setPaciente}
                eliminarPaciente = {eliminarPaciente}

              />

       
          
         ))}

          </div>


    </div>

  )
}

export default ListadoPacientes
