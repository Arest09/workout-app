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

  const { isAuth } = useAuth()

  return (
    <header
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
      className={cn(style.header, {
        [style.auth]: location.pathname.includes('/auth'),
        [style.bgImage]: bgImage
      })}>
      {location.pathname === '/' ? (
        <Link to='profile'>
          <img src={user} alt='user icon' />
        </Link>
      ) : !location.pathname.includes('/auth') ? (
        <img
          onClick={() => {
            navigate(-1)
          }}
          src={back}
          alt='back icon'
        />
      ) : null}
      <h1
        className={cn('title', {
          left: location.pathname !== '/' && location.pathname !== '/profile' && !location.pathname.includes('/auth')
        })}>
        {title}
      </h1>

      {isAuth && location.pathname !== '/auth' && <Hamburger />}
    </header>
  )
}
