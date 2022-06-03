import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faEnvelope, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'

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
        <Footer />
    </>
)

export default Register