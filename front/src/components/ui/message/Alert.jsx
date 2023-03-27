import cn from 'classnames'

import style from './Alert.module.scss'

export function Alert({ children, type = 'success' }) {
  return (
    <div
      className={cn([style.message], {
        error: type == 'error',
        success: type == 'success'
      })}>
      {children}
    </div>
  )
}
