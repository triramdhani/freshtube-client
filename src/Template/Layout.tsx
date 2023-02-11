import { ReactNode } from "react"
import { Outlet } from "react-router-dom"
import { Header, Sidebar } from "../components"



const Layout = () => {
    return (
        <div className="bg-slate-400 min-h-screen">  
            <Header/>
            <main className="flex">
                <div className="sticky top-0">
                    <Sidebar/>
                </div>
                <div className="mt-3 pr-3 relative">
                    <   Outlet/>   
                </div>
            </main>
        </div>
    )
}

export default Layout
