import React from "react"
import { menu } from "./menu.data"
import style from "./Menu.module.scss"
import cn from "classnames"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import { useAuthContext } from "../../../context/AuthContext"

export function Menu({ show, setShow }) {
  const { setIsAuth } = useAuthContext()
  const logoutHandler = () => {
    setIsAuth(false)
    Cookies.remove("token")
    setShow(false)
  }

  return (
    <nav
      className={cn(style.menu, {
        [style.show]: show,
      })}>
      <ul>
        {menu.map((item, index) => {
          return (
            <li className={style.link} key={index} onClick={()=>{setShow(false)}} >
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
