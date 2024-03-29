import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { LineWave } from 'react-loader-spinner'

import { Counter } from '../../components/ui/counter/Counter'

import userService from '../../services/user.service'

import style from './Profile.module.scss'

export function Profile() {
  const profile = useQuery(['pofile', Cookies.get('token')], userService.getProfile, {
    select: profile => {
      return profile.data
    }
  })

  if (profile.isLoading) {
    return <LineWave height='100' visible={true} />
  }

  if (profile.isError) {
    return <div>isError</div>
  }

  return (
    <div className={style.profile}>
      <h1 className={style.user}> {profile.data.name}</h1>
      <Counter />
    </div>
  )
}
