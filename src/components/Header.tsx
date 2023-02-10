import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {MagnifyingGlassIcon, SunIcon, MoonIcon, UserIcon, FingerPrintIcon } from '@heroicons/react/24/solid'
import { UseAuth } from '../context/UseAuth'


const  Header = () => {
    const Navigate = useNavigate()
    const {user} = UseAuth()
    let theme:string = 'day' 

  return (
    <header 
        className={"flex justify-around items-center p-3 bg-white sticky top-0 z-[999]"}
    >
        <div
            className={"cursor-pointer"}
        >
            <img src="" alt="" />
            <h1>Fresh Recipe Videos</h1>
        </div>
        <div
            className={"pr-2 pl-2 pt-1 pb-1 bg-slate-200 w-min rounded-md flex"}
        >
            <form
            >
                <input 
                    type="text" 
                    name="search" 
                    id="searchBox" 
                    className={"h-4 w-[350px] border-none bg-slate-200 outline-none "}
                    placeholder={"search"}
                    />
            </form>
                <MagnifyingGlassIcon 
                    id='searchBox' 
                    width={20}
                    className={"cursor-pointer"}
                />
        </div>
        <div 
            className={"flex items-center gap-1"}
        >
            <div>Hi,{!user ? "Guests": user}!</div>
            <div 
                id='theme-btn'
                className={"p-[0.4rem] bg-slate-200 rounded-sm mr-1  cursor-pointer"}
            >
                {theme === "day" ? <SunIcon width={18}/>:<MoonIcon width={18}/>}
            </div>
            <div 
                id='login-btn'
                className={"p-1 bg-slate-200 flex items-center rounded-sm cursor-pointer"}
                onClick={()=>Navigate("/login")}
            >
                Login {!user ? <FingerPrintIcon width={18}/> : <UserIcon width={18}/>}
            </div>
        </div>
    </header>
  )
}

export default Header
