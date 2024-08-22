import React, { createContext, useState } from 'react'

export const Context = createContext()

function MainContext({children}) {
    const [todos, setTodos] = useState([]);
  return (
    <Context.Provider value={{todos, setTodos}}>{children}</Context.Provider>
  )
}

export default MainContext