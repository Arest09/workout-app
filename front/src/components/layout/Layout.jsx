import React, { useContext } from "react"
import { Header } from "./header/Header"
import style from "./Layout.module.scss"
import { Outlet } from "react-router-dom"
import cn from "classnames"
import { useLayout } from "../../context/LayoutContext"
import { userContext } from "../../context/FooContext"


export function Layout({ bgImage, heading = "" /*  backLink = "/" */ }) {
  const { title, height } = useLayout()
  const foo = useContext(userContext)

  console.log(foo)

  return (
    <section
      style={{ height: height }}
      className={cn(style.layout, {
        [style.noneHeader]: !!heading,
      })}>
      <Header />
      <Outlet />
      {heading && <h1>{heading}</h1>}
    </section>
  )
}
