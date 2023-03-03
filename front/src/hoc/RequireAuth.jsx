import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export function RequireAuth({ children }) {
  const {isAuth} = useAuth()


  if (!isAuth) {
    return <Navigate to='/auth' />
  }
  return children
}
