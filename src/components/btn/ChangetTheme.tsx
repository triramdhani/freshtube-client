import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import React from 'react'
import {ThemeContext} from '../../context/ThemeContext'

export const ThemeSwitch = () => {
  const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext)

  return (
    <button
      data-testid='switch-theme-btn'
      style={{
        color: currentTheme === 'light' ? 'black' : 'white',
        background: currentTheme === 'light' ? 'white' : 'black',
      }}
      className={"p-[0.4rem] rounded mr-1 cursor-pointer border"}
      onClick={() => changeCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
    >
       {currentTheme === 'light' ? <SunIcon width={18}/> : <MoonIcon width={18}/>}
      
    </button>
  )
}
