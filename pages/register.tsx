import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faEnvelope, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import Error from '../components/Error'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { success, error } from '../redux/features/register/registerSlice'

const Register = () => {

    const register = useSelector((state: any) => state.register.error)
    const dispatch = useDispatch()

    const [ data, setData ] = useState({
        user: '',
        pass: '',
        email: '',
        phone: ''
    })
    
    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (Object.values(data).some(i => i === '')) {
            dispatch(error())
        } else {
            dispatch(success( data ))
        }


    }

    return (
        <>
            <div className="bg-icon w-[150px] h-[150px] mx-[auto] mt-[10vh]"></div>
            <div className="name-company text-center"></div>
            <form
                className="flex flex-col mt-10"
                onSubmit={ (e) => handleSubmit(e) }
            >
                <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                    <FontAwesomeIcon className="w-[20px]" icon={faUser}/>
                    <input
                        type="text"
                        className="bg-blue-seos focus:outline-none"
                        placeholder="Usuario"
                        onChange={ (e) => setData({ user: e.target.value, pass: data.pass, email: data.email, phone: data.phone }) }
                    />
                </div>
                <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                    <FontAwesomeIcon className="w-[20px]" icon={faKey}/>
                    <input
                        type="text"
                        className="bg-blue-seos focus:outline-none"
                        placeholder="Clave"
                        onChange={ (e) => setData({ user: data.user, pass: e.target.value, email: data.email, phone: data.phone }) }
                    />
                </div>
                <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                    <FontAwesomeIcon className="w-[20px]" icon={faEnvelope}/>
                    <input
                        type="email"
                        className="bg-blue-seos focus:outline-none"
                        placeholder="Correo"
                        onChange={ (e) => setData({ user: data.user, pass: data.pass, email: e.target.value, phone: data.phone }) }    
                    />
                </div>
                <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                    <FontAwesomeIcon className="w-[20px]" icon={faMobileScreenButton}/>
                    <input
                        type="tel"
                        className="bg-blue-seos focus:outline-none"
                        placeholder="Celular"
                        onChange={ (e) => setData({ user: data.user, pass: data.pass, email: data.email, phone: e.target.value }) }    
                    />
                </div>
                { register && <Error message='Todos los campos son Obligatorios'/> }
                <button className="btn-submit w-[15rem] mx-[auto] mt-10">CREAR CUENTA</button>
            </form>
            <Footer 
                textOne='Entrar'
            />
        </>
    )
}

export default Register