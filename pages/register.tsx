import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<<<<<<< HEAD
import { faUser, faKey, faEnvelope, faMobileScreenButton, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
=======
import { faUser, faKey, faEnvelope, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

import Footer from '../components/Footer'
>>>>>>> fd5d2add6b1c75a95f989bd83d29d7647d4f9914

const Register = () => (
    <>
        <div className="bg-icon w-[150px] h-[150px] mx-[auto] mt-[10vh]"></div>
        <div className="name-company text-center"></div>
        <form className="flex flex-col mt-10">
            <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                <FontAwesomeIcon className="w-[20px]" icon={faUser}/>
                <input type="text" className="bg-blue-seos focus:outline-none" placeholder="Usuario"></input>
            </div>
            <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                <FontAwesomeIcon className="w-[20px]" icon={faKey}/>
                <input type="text" className="bg-blue-seos focus:outline-none" placeholder="Clave"></input>
            </div>
            <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                <FontAwesomeIcon className="w-[20px]" icon={faEnvelope}/>
                <input type="email" className="bg-blue-seos focus:outline-none" placeholder="Correo"></input>
            </div>
            <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                <FontAwesomeIcon className="w-[20px]" icon={faMobileScreenButton}/>
                <input type="tel" className="bg-blue-seos focus:outline-none" placeholder="Celular"></input>
            </div>
            <button className="btn-submit w-[15rem] mx-[auto] mt-10">CREAR CUENTA</button>
        </form>
        <section className="flex flex-row justify-between w-[100vw] fixed top-[95vh]">
            <a className="flex flex-row mx-[1rem]" href="#">
                <FontAwesomeIcon className="w-[20px] mx-[0.5rem] text-blue-seos" icon={faUser as IconProp} />  
                <span className="text-blue-dark-seos text-[1.2rem] font-bold">Entrar</span>
            </a>
            <a className="flex flex-row mx-[1rem]" href="#">
                <FontAwesomeIcon className="w-[20px] mx-[0.5rem] text-blue-seos" icon={faCircleQuestion as IconProp}/> 
                <span className="text-blue-dark-seos text-[1.2rem] font-bold">Ayuda</span>
            </a>
        </section>
    </>
)

export default Register