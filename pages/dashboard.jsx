import Navbar from "../components/Dashboard/Navbar"
import Sidebar from '../components/Dashboard/Sidebar'

const dashboard = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1> Dashboard </h1>
            </div>
            <Sidebar />
            <style jsx>{`
                div {
                    background-image: url(/fondo.jpg);
                    background-size: cover;
                    height: 100vh;
                    position: fixed;
                    width: 100vw;
                    background-repeat: no-repeat;
                }
            `}</style>
        </>
    )
}

export default dashboard