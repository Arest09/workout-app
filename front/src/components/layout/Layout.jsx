import cn from 'classnames'
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { useLayout } from '../../context/LayoutContext'

import style from './Layout.module.scss'
import { Header } from './header/Header'

export function Layout({ bgImage, heading = '' }) {
  const { title, height } = useLayout()

  return (
    <section
      style={{ height: height }}
      className={cn(style.layout, {
        [style.noneHeader]: !!heading
      })}>
      <Header />
      <Outlet />
      {heading && <h1>{heading}</h1>}
    </section>
  )
}
