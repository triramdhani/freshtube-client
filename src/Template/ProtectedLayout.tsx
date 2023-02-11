import React from 'react'
import { Header, Sidebar } from '../components'
import { Navigate, Outlet } from 'react-router-dom'
import { UseAuth } from '../context/UseAuth'

export default function ProtectedLayout() {
  // const {user} = UseAuth()
  let user:string = "tri"
  if(!user){
    return <Navigate to={'/login'}/>
  }
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
