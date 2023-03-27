import { Link } from 'react-router-dom'

import { Button } from '../../components/ui/button/Button'
import { Counter } from '../../components/ui/counter/Counter'

import style from './Home.module.scss'

export function Home() {

  return (
    <div className={style.home}>
      <Button style={{ margin: '30px auto 30px' }}>
        <Link to='new-workout'>New</Link>
      </Button>
      <Counter />
    </div>
  )
}
