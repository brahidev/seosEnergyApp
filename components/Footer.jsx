import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

const Footer = ({ textOne = 'Entrar', textTwo = 'Ayuda' }) => {
    return (
        <section className="flex flex-row justify-between w-[100vw] fixed top-[95vh]">
            <a className="flex flex-row mx-[1rem]" href="#">
                <FontAwesomeIcon className="w-[20px] m-y mx-[0.1rem] text-blue-seos" icon={ faUser }/>
                <Link href={ textOne === 'Entrar' ? '/' : '/register' }>
                    <a className="text-blue-dark-seos text-[1.2rem] font-bold"> { textOne } </a>
                </Link>  
            </a>
            <a className="flex flex-row mx-[1rem]" href="#">
                <FontAwesomeIcon className="w-[20px] mx-[0.5rem] text-blue-seos" icon={ faCircleQuestion }/> 
                <span className="text-blue-dark-seos text-[1.2rem] font-bold">{ textTwo }</span>
            </a>
        </section>
    )
}

export default Footer