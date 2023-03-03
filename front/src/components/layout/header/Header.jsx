import React from "react"
import style from "./Header.module.scss"
import user from "../../../assets/images/header/user.svg"
import back from "../../../assets/images/header/Arrow-left.svg"
import { useAuth } from "../../../hooks/useAuth"
import { Hamburger } from "../hamburger/Hamburger"
import { Link, useLocation, useNavigate } from "react-router-dom"

export function Header({ backLink }) {
  const { isAuth } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <header className={style.header}>
      {location.pathname === "/" ? (
        <Link to='profile'>
          <img src={user} alt='user icon' />
        </Link>
      ) : (
        <img
          onClick={() => {
            navigate("/")
          }}
          src={back}
          alt='back icon'
        />
      )}

      <Hamburger />
    </header>
  )
}
