import React from 'react'
import { useNavigate } from 'react-router-dom'

const textInputStyle = 'w-[250px] h-[30px] mb-2 p-1 outline-none border-green-600 border-2 rounded-md '
const buttonStyle = 'px-5 py-1 mb-1 bg-green-500 text-[14px] font-semibold rounded-md'
export default function Signup() {
  const Navigate = useNavigate()
  return (
    <div className='bg-white w-min p-5 rounded-md absolute top-[-40%] left-[100%] translate-x-1/2 translate-y-1/2'>
    <h1 className='text-4xl mb-2 text-gray-800 font-semibold'>Signup</h1>
    <form >
        <div className=''>
            <input type="text" placeholder='Enter Your Name'
                className={textInputStyle}
            />
            <input type="email" placeholder='Enter Email'
                className={textInputStyle}
            />
            <input type="password" placeholder='Create Password'
                className={textInputStyle}
            />
            <input type="password" placeholder='Confirm Password'
                className={textInputStyle}
            />
            <button className={buttonStyle}>SigUp</button>
            <br/>
        </div>
    </form>
    <p className='text-[10px] text-slate-500 font-semibold mt-3 mb-1'>Already Have an Account? <span className='ml-1 text-yellow-400 cursor-pointer hover:underline' onClick={()=>Navigate("/Login")}>Login Now</span></p>
    <p className='text-[10px] text-slate-500 font-semibold'>Back to HomePage <span className='ml-1 text-yellow-400 cursor-pointer hover:underline' onClick={()=>Navigate("/")}>HomePage</span></p>
</div>
  )
}
