import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/features/counter/counterSlice'

import Footer from '../components/Footer'


const Login = () => 
    {
        const dispatch = useDispatch()
        return (
            <>
                <div className="bg-icon w-[150px] h-[150px] mx-[auto] mt-[10vh]"></div>
                <div className="name-company text-center"></div>
                <form
                    className="flex flex-col mt-10"
                    onSubmit={ () => dispatch(increment()) }
                >
                    <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                        <FontAwesomeIcon className="w-[20px]" icon={faUser}/>
                        <input type="text" className="bg-blue-seos focus:outline-none" placeholder="Usuario"></input>
                    </div>
                    <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                        <FontAwesomeIcon className="w-[20px]" icon={faKey}/>
                        <input type="text" className="bg-blue-seos focus:outline-none" placeholder="Clave"></input>
                    </div>
                    <button className="btn-submit w-[15rem] mx-[auto] mt-10">ENTRAR</button>
                    <Link href="/forgot">
                        <a className="text-center text-lg py-10 subTitle-seos"> ¿Olvidó su clave? </a>
                    </Link>
                </form>
                <Footer
                    textOne='Registrarse'
                />
            </>
        )
}

export default Login