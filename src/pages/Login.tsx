import React from 'react'
import { useNavigate, redirect } from 'react-router-dom'
import { UseAuth } from '../context/UseAuth'


const textInputStyle = 'w-[250px] h-[30px] mb-2 p-1 outline-none border-green-600 border-2 rounded-md '
const buttonStyle = 'w-[240px] mb-1 bg-green-500 text-base text-[12px] font-semibold rounded-sm'

export default function Login() {
    const Navigate = useNavigate()


  return (
    <div className='bg-white w-min p-5 rounded-md absolute top-[-30%] left-[100%] translate-x-1/2 translate-y-1/2'>
        <h1 className='text-4xl mb-2 text-gray-800 font-semibold'>Login</h1>
        <form >
            <div className=''>
                <input type="email" placeholder='Enter Email'
                    className={textInputStyle}
                />
                <input type="password" placeholder='Enter Password'
                    className={textInputStyle}
                />
                <div className=''>
                <button className={buttonStyle} >Login Now</button>
                <br/>
                <button className={buttonStyle } >Login as Guests</button>
                </div>
            </div>
        </form>
        <p className='text-[10px] text-slate-500 font-semibold mt-3 mb-1'>Not Having an Account? <span className='ml-1 text-yellow-400 cursor-pointer hover:underline' onClick={()=>Navigate("/signup")}>SignUp Now</span></p>
        <p className='text-[10px] text-slate-500 font-semibold'>Back to HomePage <span className='ml-1 text-yellow-400 cursor-pointer hover:underline' onClick={()=>Navigate('/')}>HomePage</span></p>
    </div>
  )
}
