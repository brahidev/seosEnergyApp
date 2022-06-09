import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Footer from '../components/Footer'

const Forgot = () => (
    <>
        <div className="bg-icon w-[150px] h-[150px] mx-[auto] mt-[10vh]"></div>
        <div className="name-company text-center"></div>
        <div className="text-center py-10">
            <h2 className="text-3xl font-bold boldColor-seos"> ¿Olvidó su clave? </h2>
            <span className="subTitle-seos"> Escriba su correo para recuperar su clave </span>
        </div>
        <form className="flex flex-col mt-3">
            <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                <FontAwesomeIcon className="w-[20px]" icon={ faEnvelope }/>
                <input type="email" className="bg-blue-seos focus:outline-none" placeholder="Correo"></input>
            </div>
<<<<<<< HEAD
            <div className="py-10 flex justify-around">
                <button className="btn-submit px-3 py-1">ENVIAR</button>
                <button className="btn-submit px-3 py-1">CANCEL</button>
=======
            <div className="flex justify-around py-5">
                <button className="btn-submit px-3 py-2">ENVIAR</button>
                <button className="btn-submit px-3 py-2">CANCEL</button>
>>>>>>> main
            </div>
        </form>
        <Footer
            textOne='Registrarse'
        />
    </>
)

export default Forgot