import { useAuthContext } from '../context/AuthContext'

export const useAuth = () => {
  const { isAuth } = useAuthContext()

  return {
    isAuth: isAuth
  }
}
