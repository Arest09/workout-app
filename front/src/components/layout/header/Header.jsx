import cn from 'classnames'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import { useLayout } from '../../../context/LayoutContext'

import back from '../../../assets/images/header/Arrow-left.svg'
import user from '../../../assets/images/header/user.svg'
import { Hamburger } from '../hamburger/Hamburger'

import style from './Header.module.scss'

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const { title, bgImage } = useLayout()

  console.log(bgImage)

  const { isAuth } = useAuth()

  return (
    <header
      style={{ backgroundImage: `url(${bgImage})` }}
      className={cn(style.header, {
        [style.auth]: location.pathname === '/auth'
      })}>
      {location.pathname === '/' ? (
        <Link to='profile'>
          <img src={user} alt='user icon' />
        </Link>
      ) : location.pathname !== '/auth' ? (
        <img
          onClick={() => {
            navigate('/')
          }}
          src={back}
          alt='back icon'
        />
      ) : null}
      <h1 className='title'>{title}</h1>

      {isAuth && location.pathname !== '/auth' && <Hamburger />}
    </header>
  )
}
