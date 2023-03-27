import cn from 'classnames'

import style from './Button.module.scss'

export function Button({ children, type, ...props }) {
  return (
    <button
      className={cn(style.button, {
        [style.register]: type === 'register',
        [style.login]: type === 'login',
        [style.disabled]: props.disabled === true
      })}
      type={type}
      {...props}>
      {children}
    </button>
  )
}
