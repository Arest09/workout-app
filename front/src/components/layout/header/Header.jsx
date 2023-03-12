import React from "react"
import style from "./Header.module.scss"
import user from "../../../assets/images/header/user.svg"
import back from "../../../assets/images/header/Arrow-left.svg"
import { Hamburger } from "../hamburger/Hamburger"
import { Link, useLocation, useNavigate } from "react-router-dom"
import cn from "classnames"
import { useAuth } from "../../../hooks/useAuth"

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const {isAuth} = useAuth()

  return (
    <header
      className={cn(style.header, {
        [style.auth]: location.pathname === "/auth",
      })}>
      {location.pathname === "/" ? (
        <Link to='profile'>
          <img src={user} alt='user icon' />
        </Link>
      ) : location.pathname !== "/auth" ? (
        <img
          onClick={() => {
            navigate("/")
          }}
          src={back}
          alt='back icon'
        />
      ) : null}

     {isAuth && location.pathname !== "/auth" && <Hamburger />}  
    </header>
  )
}
