import React, { createContext, useContext, useState } from "react"

const LayoutContext = createContext(null)

export const useLayout = () => {
  return useContext(LayoutContext)
}

export function LayoutProvider({ children }) {
  const [title, setTitle] = useState("")
  const [height, setHeight] = useState("")
  return (
    <LayoutContext.Provider value={{ title, setTitle, height, setHeight }}>
      {children}
    </LayoutContext.Provider>
  )
}
