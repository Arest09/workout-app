import { useMutation } from '@tanstack/react-query'
import cn from 'classnames'
import { useState } from 'react'
import { LineWave } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/button/Button'
import { Form } from '../../components/ui/form/Form'
import { Input } from '../../components/ui/input/Input'
import { Alert } from '../../components/ui/message/Alert'

import authService from '../../services/auth.service'

import { useAuthContext } from '../../context/AuthContext'

import style from './Auth.module.scss'

export function Auth() {
  const [mail, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('login')

  const { setIsAuth } = useAuthContext()

  const navigate = useNavigate()

  const {
    mutate,
    isLoading,
    isError,
    error,
    data: authData,
    isSuccess
  } = useMutation(
    data => {
      return authService.main(data)
    },
    {
      onSuccess: () => {
        setEmail('')
        setPassword('')
        setIsAuth(true)

        navigate('/')
      }
    }
  )

  const errorInfo = error?.response?.data?.message

  console.log(error)

  const handleSubmit = e => {
    e.preventDefault()

    mutate({ mail, password, type })
  }

  const styleBtn = {
    display: 'block',
    marginTop: '15px ',
    flexShrink: '0'
  }

  return (
    <>
      <div className='wrapper'>
        <Form onSubmit={handleSubmit}>
          <label>
            <Input
              style={{ marginBottom: '12px' }}
              placeholder='enter email'
              type='email'
              name='email'
              required
              value={mail}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </label>
          <label>
            <Input
              type='password'
              name='password'
              placeholder='enter password'
              value={password}
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
          </label>
          <div className={style.btnWrapper}>
            <Button
              onClick={() => {
                setType('login')
              }}
              style={styleBtn}
              type='login'>
              sign in
            </Button>
            <Button
              onClick={() => {
                setType('register')
              }}
              style={styleBtn}
              type='register'>
              sign up
            </Button>
            {isLoading && <LineWave height='50' visible={true} />}
            {isError && <Alert type='error'>{errorInfo}</Alert>}
            {isSuccess && <Alert>{authData?.data?.user?.name}</Alert>}
          </div>
        </Form>
      </div>
    </>
  )
}
