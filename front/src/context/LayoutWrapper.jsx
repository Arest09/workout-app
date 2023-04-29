import React, { useEffect } from 'react'

import { useLayout } from './LayoutContext'

export function LayoutWrapper({ children, title, height, bgImage }) {
  const { setTitle, setHeight, setBgImage } = useLayout()

  useEffect(() => {
    setTitle(title)
    setHeight(height)
    setBgImage(bgImage)
  }, [title, height, bgImage])
  return children
}
