import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { LineWave } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/button/Button'
import { Form } from '../../components/ui/form/Form'
import { Input } from '../../components/ui/input/Input'
import { Alert } from '../../components/ui/message/Alert'

import authService from '../../services/auth/auth.service'

import { useAuthContext } from '../../context/AuthContext'

import style from './Auth.module.scss'

export function Register() {
  const [mail, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('login')

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
        console.log(authData)
      }
    }
  )

  if (isSuccess) {
    console.log(authData)
  }

  const errorInfo = error?.response?.data?.message

  const handleSubmit = e => {
    e.preventDefault()

    mutate({ mail, password, name, type })
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
              style={{ marginBottom: '12px' }}
              placeholder='enter name'
              type='name'
              name='name'
              required
              value={name}
              onChange={e => {
                setName(e.target.value)
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
                setType('register')
              }}
              style={styleBtn}
              type='register'>
              register
            </Button>
            <Button
              style={styleBtn}
              type='login'
              onClick={() => {
                navigate(-1)
              }}>
              has account
            </Button>
            {authData?.message}
            ss
            {isLoading && <LineWave height='50' visible={true} />}
            {isError && <Alert type='error'>{errorInfo}</Alert>}
            {isSuccess && <Alert>{authData?.data.message}</Alert>}
          </div>
        </Form>
      </div>
    </>
  )
}
