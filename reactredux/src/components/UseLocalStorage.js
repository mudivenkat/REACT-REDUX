import React, { useState } from 'react'

function UseLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue

    }
    catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (val) => {
    setStoredValue(val)
    localStorage.setItem(key, JSON.stringify(val))
  }
  return [storedValue, setValue]
}


export default UseLocalStorage
