import { createContext, FC, ReactNode, useEffect, useState } from 'react'

const defaultValue = {
  currentTheme: 'light',
  changeCurrentTheme: (newTheme: 'light' | 'dark') => {},
}

export const ThemeContext = createContext(defaultValue)



export const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  
    const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    }
  
    useEffect(() => {
      if (theme === 'light') document.body.classList.remove('dark')
      else document.body.classList.add('dark')
    }, [theme])
  
    return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>
  }
  
//   export default ThemeContextWrapper

// export default ThemeContext
