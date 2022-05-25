const Register = () => (
    <>
        <div className="bg-icon w-[150px] h-[150px] mx-[auto] mt-[10vh]"></div>
        <div className="name-company text-center"></div>
        <form className="flex flex-col">
            <input type="text" className="input-blue w-[80%] mx-[auto] mt-6" placeholder="Usuario"></input>
            <input type="text" className="input-blue w-[80%] mx-[auto] mt-6" placeholder="Clave"></input>
            <input type="email" className="input-blue w-[80%] mx-[auto] mt-6" placeholder="Correo"></input>
            <input type="tel" className="input-blue w-[80%] mx-[auto] mt-6" placeholder="Celular"></input>
            <button type="submit" className="btn-submit w-[50%] mx-[auto] mt-6">CREAR CUENTA</button>
        </form>
    </>
)

export default Register