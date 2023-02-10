import React, { createContext, ReactNode, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { UseLocalStorage } from '../hooks/UseLocalStorage'

interface AuthProviderProps {
    children: ReactNode
}
interface AuthContextType {
    user: string | null
    login: (data:string) => void
}

const AuthContext = createContext({}as AuthContextType)

export const AuthProvider = ({children}:AuthProviderProps) => {
    const [user, setUser] = UseLocalStorage('user', null)
    const Navigate = useNavigate()

    // const login = (data:string) => {
    //     setUser(data)
    //     Navigate(-1)
    // }
    function login(data:string){
        setUser(data)
        Navigate('/')
    }
    const value = useMemo(
        ()=>({
            user,
            login
        }),
        [user]
    )
  return (
    <AuthContext.Provider value={{user, login}}>{children}</AuthContext.Provider>
  )
}

export const UseAuth = () => {
    return useContext(AuthContext)
}
