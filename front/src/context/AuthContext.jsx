import Cookies from 'js-cookie'
import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext(null)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(!!Cookies.get('token'))

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>
}
