import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import Error from '../components/Error'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { success, error } from '../redux/features/login/loginSlice'

import Footer from '../components/Footer'


const Login = () => 
    {
        const [ data, setData ] = useState({ user: '', pass: '' })
        const router = useRouter()
        const login = useSelector((state: any) => state.login.error)
        const dispatch = useDispatch()

        const onHandleSubmit = (e: any) => {
            e.preventDefault()

            if (data.user === '' && data.pass === '') {
                dispatch(error())
            } else {
                dispatch(success( data ))

                router.push('/dashboard')
            }
        }

        return (
            <>
                <div className="bg-icon w-[150px] h-[150px] mx-[auto] mt-[10vh]"></div>
                <div className="name-company text-center"></div>
                <form
                    className="flex flex-col mt-10"
                    onSubmit={ (e) => onHandleSubmit(e) }
                >
                    <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                        <FontAwesomeIcon className="w-[20px]" icon={faUser}/>
                        <input
                            type="text"
                            className="bg-blue-seos focus:outline-none"
                            placeholder="Usuario"
                            onChange={ (e) => setData({ user: e.target.value, pass: data.pass }) }
                        />
                    </div>
                    <div className="input-blue flex flex-row items-center bg-blue-seos  w-[20rem] mx-[auto] mt-6 br-[5px]">
                        <FontAwesomeIcon className="w-[20px]" icon={faKey}/>
                        <input
                            type="password"
                            className="bg-blue-seos focus:outline-none"
                            placeholder="Clave"
                            onChange={ (e) => setData({ user: data.user, pass: e.target.value }) }
                            />
                    </div>
                    { login && <Error message='Todos los campos son Obligatorios'/> }
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