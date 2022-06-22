import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Footer from '../components/Footer'
import Error from '../components/Error'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { success, error } from '../redux/features/recovery/recoverySlice'

const Forgot = () => {

    const [ email, setEmail ] = useState('')
    const recovery = useSelector((state: any) => state.recovery.error)
    const dispatch = useDispatch()

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (email === '') {
            dispatch(error())
        } else {
            dispatch(success( email ))
        }
    }

    return (
        <>
            <div className="bg-icon w-[150px] h-[150px] mx-[auto] mt-[10vh]"></div>
            <div className="name-company text-center"></div>
            <div className="text-center py-10">
                <h2 className="text-3xl font-bold boldColor-seos"> ¿Olvidó su clave? </h2>
                <span className="subTitle-seos"> Escriba su correo para recuperar su clave </span>
            </div>
            <form
                className="flex flex-col mt-3"
                onSubmit={ (e) => handleSubmit(e) }
            >
                <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                    <FontAwesomeIcon className="w-[20px]" icon={ faEnvelope }/>
                    <input
                        type="email"
                        className="bg-blue-seos focus:outline-none"
                        placeholder="Correo"
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                { recovery && <Error message='Todos los campos son Obligatorios'/> }
                <div className="flex justify-center py-5">
                    <button className="btn-submit px-3 py-2 mx-3">ENVIAR</button>
                    <button className="btn-submit px-3 py-2">CANCEL</button>
                </div>
            </form>
            <Footer
                textOne='Registrarse'
            />
        </>
   )
}

export default Forgot