import React, { useState } from 'react'

interface useLocalStorageProps {

}
export const  UseLocalStorage = (keyName:string, defaultValue:string | null) => {
    const [storedValue, setStoredValue]= useState(()=>{
        try {
            const value = window.localStorage.getItem(keyName)
            if(value) {
                return JSON.parse(value)
            }else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
                return defaultValue
            }
        } catch (err){
            return defaultValue
        }
    })

    const setValue = ( newValue: string | null )=> {
        try{
            window.localStorage.setItem(keyName, JSON.stringify(newValue))
        } catch (err) {
            setStoredValue(newValue)
        }
        
    }
  return [storedValue, setValue]
}
