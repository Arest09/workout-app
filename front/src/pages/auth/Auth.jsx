import React, { useContext, useState } from "react"
import { Input } from "../../components/ui/input/Input"
import style from "./Auth.module.scss"
import cn from "classnames"
import { Button } from "../../components/ui/button/Button"
import { Form } from "../../components/ui/form/Form"
import { userContext } from "../../context/FooContext"
import { useQuery, useMutation } from "@tanstack/react-query"
import authService from "../../services/auth.service"

export function Auth() {
  const [mail, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [type, setType] = useState("login")
  const foo = useContext(userContext)

  const { mutate, isLoading } = useMutation(
    (data) => {
      return authService.main(data)
    },
    {
      onSuccess: () => {
        alert("sended")
        setEmail('')
        setPassword('')
      },
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    mutate({ mail, password, type })
  }

  const styleBtn = {
    display: "block",
    marginTop: "15px ",
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
            {isLoading ? "loading" : ""}
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
