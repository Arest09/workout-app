import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button/Button"
import { Counter } from "../../components/ui/counter/Counter"
import { useAuth } from "../../hooks/useAuth"
import style from "./Home.module.scss"

export function Home() {
  const { isAuth } = useAuth()

  return (
    <div className={style.home}>
      <h1 className={style.title}>Exercise</h1>
      <Button style={{margin:'30px 0 30px'}}>
        <Link to='new-workout'>New</Link>
      </Button>
      <Counter/>
    </div>
  )
}
