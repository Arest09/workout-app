import React, { useContext, useState } from "react"
import { Input } from "../../components/ui/input/Input"
import style from "./Auth.module.scss"
import cn from "classnames"
import { Button } from "../../components/ui/button/Button"
import { Form } from "../../components/ui/form/Form"
import {useMutation } from "@tanstack/react-query"
import authService from "../../services/auth.service"
import { LineWave } from "react-loader-spinner"
import { useAuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export function Auth() {
  const [mail, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [type, setType] = useState("login")

  const { setIsAuth } = useAuthContext()

  const navigate = useNavigate()

  const {mutate,isLoading,isError,error,data: authData,} = useMutation((data) => { 
    return authService.main(data)
  },
    {
      onSuccess: () => {
        setEmail("")
        setPassword("")
        setIsAuth(true)
        
        navigate("/")
    
      },
    }
  )

  const errorInfo = error?.response?.data?.message

  const handleSubmit = (e) => {
    e.preventDefault()

    mutate({ mail, password, type })
  }

  const styleBtn = {
    display: "block",
    marginTop: "15px ",
    flexShrink: "0",
  }

  return (
    <>
      <div className='wrapper'>
        <h1 className={cn(style.title, "title")}>sign in</h1>
        <Form onSubmit={handleSubmit}>
          <label>
            <Input
              style={{ marginBottom: "12px" }}
              placeholder='enter email'
              type='email'
              name='email'
              required
              value={mail}
              onChange={(e) => {
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
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </label>
          <div className={style.btnWrapper}>
            <Button
              onClick={() => {
                setType("login")
              }}
              style={styleBtn}
              type='login'>
              sign in
            </Button>
            <span
              className={cn("", {
                [style.error]: isError,
                [style.success]: authData,
              })}>
              {isLoading ? <LineWave height='50' visible={true} /> : isError ? errorInfo : authData?.data?.user?.name}
            </span>
            <Button
              onClick={() => {
                setType("register")
              }}
              style={styleBtn}
              type='register'>
              sign up
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}
