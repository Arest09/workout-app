import React from "react"
import style from "./Form.module.scss"

export function Form({ children, ...props }) {
  return (
    <form className={style.form} {...props}>
      {children}
    </form>
  )
}
