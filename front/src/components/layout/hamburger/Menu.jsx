import HomeIcon from '@mui/icons-material/Home'
import { List, ListItem, ListItemIcon } from '@mui/material'
import cn from 'classnames'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

import { useAuthContext } from '../../../context/AuthContext'

import style from './Menu.module.scss'
import { menu } from './menu.data'

export function Menu({ show, setShow }) {
  const { setIsAuth } = useAuthContext()
  const logoutHandler = () => {
    setIsAuth(false)
    Cookies.remove('token')
    setShow(false)
  }

  return (
    <nav
      className={cn(style.menu, {
        [style.show]: show
      })}>
      <List>
        {menu.map((item, index) => {
          return (
            <ListItem
              className={style.link}
              key={index}
              onClick={() => {
                setShow(false)
              }}>
              <Link to={item.link}>{item.title}</Link>
            </ListItem>
          )
        })}
        <li className={style.link} onClick={logoutHandler}>
          logout
        </li>
      </List>
    </nav>
  )
}
