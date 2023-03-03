import cn from 'classnames'
import React from 'react'
import style from './Button.module.scss'


export  function Button({children,handleClick,type,...props}) {
  return (
    <button className={cn(style.button,{
      [style.register]:type ===  'register',
      [style.login]:type ===  'login',
    })} type={type} {...props}>{children}</button>
  )
}

