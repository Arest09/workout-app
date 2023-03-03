import React from "react"
import { menu } from "./menu.data"
import style from "./Menu.module.scss"
import cn from "classnames"
import { Link } from "react-router-dom"

export function Menu({ show, asd }) {
  const logoutHandler = () => {}

  return (
    <nav
      className={cn(style.menu, {
        [style.show]: show,
      })}>
      <ul>
        {menu.map((item, index) => {
          return (
            <li className={style.link} key={index}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          )
        })}
        <li className={style.link} onClick={logoutHandler}>
          logout
        </li>
      </ul>
    </nav>
  )
}
