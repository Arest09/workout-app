import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button/Button"
import { useAuth } from "../../hooks/useAuth"
import style from "./Home.module.scss"

export function Home() {
  const { isAuth } = useAuth()

  return (
    <div className={style.home}>
      <h1 className={style.title}>Exercise</h1>
      <Button>{isAuth ? <Link to='new-workout'>New</Link> : <Link to='auth'>Sign in</Link> }</Button>
    </div>
  )
}
