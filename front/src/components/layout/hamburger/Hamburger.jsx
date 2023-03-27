import { useClickOutside } from '../../../hooks/useClickOutside'

import close from '../../../assets/images/header/hamburger-close.svg'
import burger from '../../../assets/images/header/hamburger.svg'

import style from './Hamburger.module.scss'
import { Menu } from './Menu'

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
      <Menu {...{ show, setShow }} />
    </div>
  )
}
