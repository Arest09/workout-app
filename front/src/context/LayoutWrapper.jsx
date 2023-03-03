import React, { useEffect } from "react"
import { useLayout } from "./LayoutContext"

export function LayoutWrapper({ children, title, height }) {
  const { setTitle, setHeight } = useLayout()
  
  useEffect(() => {
    setTitle(title)
    setHeight(height)
  }, [title, height])
  return children
}
