import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {


  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);


  function generarId(){
    console.log("generando id")
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

      if([nombre || propietario || email || fecha || sintomas] == ""){
        setError(true);
      } else {
        setError(false);

        const objetoPaciente = {
          nombre,
          propietario,
          email,
          fecha,
          sintomas,
         
          
        }


        if(paciente.id){

            console.log("editando...")

            console.log(paciente)

            objetoPaciente.id = paciente.id;
            console.log(objetoPaciente)

            const pacientesActualizados = pacientes.map(pacienteI => pacienteI.id == objetoPaciente.id ? objetoPaciente : pacienteI)

            // console.log(pacientesActualizados);


             setPacientes(pacientesActualizados)
         



        } else {

          objetoPaciente.id = generarId();

        
          setPacientes([...pacientes, objetoPaciente])

        }

        setPaciente({});

        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
      

        console.log("Enviando...")
      }

      
  }


  useEffect(
    () => {

      
        console.log("cambiando..")
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      


    }, [paciente]




  )


  return (



    <div className="md:w-1/2 lg:w-2/5">

<h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>



     


      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>


      <form className="bg-white shadow-md rounded-lg py-10 px-5 block mb-10 mx-5"
        onSubmit={handleSubmit}
      >

{error && <Error><p>Todos los campos son obligatorios</p></Error>
      
    
      
      }

        <div className="mb-5">
        <label className="block text-gray-600">Nombre Mascota
            <input type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            
            />
          </label>
        </div>

        <div className="mb-5">
        <label className="block text-gray-600">Nombre del Propietario
            <input type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre del propietario"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </label>
        </div>
        

        <div className="mb-5">
        <label className="block text-gray-600">Email
            <input type="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Email contacto propietario" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="mb-5">
        <label className="block text-gray-600">Alta
            <input type="date" className="border-2 w-full p-2 mt-2" 
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </label>
        </div>

        <div className="mb-5">
        <label className="block text-gray-600">Síntomas
            
          </label>
        <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los síntomas"
        
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
        ></textarea>
        </div>

        <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors' value={paciente.nombre ? "Guardar Paciente" : "Agregar Paciente"}/>
      </form>
    </div>
  )
}

export default Formulario
