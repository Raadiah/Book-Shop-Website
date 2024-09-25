import { Outlet } from "react-router-dom"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"


function HomePage() {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-base-200">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default HomePage