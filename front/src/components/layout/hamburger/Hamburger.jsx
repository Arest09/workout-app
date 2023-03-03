import React, { useEffect, useRef, useState } from "react"
import style from "./Hamburger.module.scss"
import burger from "../../../assets/images/header/hamburger.svg"
import close from "../../../assets/images/header/hamburger-close.svg"
import { Menu } from "./Menu"
import { useClickOutside } from "../../../hooks/useClickOutside"

export function Hamburger() {
  const [ref, show, setShow] = useClickOutside(false)

  return (
    <div className={style.wrapper} ref={ref}>
      <button className={style.btn}>
        <img
          src={show ? close : burger}
          onClick={() => {
            setShow(!show)
          }}
        />
      </button>
      <Menu show={show} />
    </div>
  )
}
