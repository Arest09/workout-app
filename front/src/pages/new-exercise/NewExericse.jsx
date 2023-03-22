import React, { useState } from "react"
import { Button } from "../../components/ui/button/Button"
import { Input } from "../../components/ui/input/Input"
import { iconPath } from "./icon.path.utils"
import style from "./newExercise.module.scss"
import cls from "classnames"
import { useNewExercise } from "./useNewExercise"

const inputStyle = {
  marginBottom: "20px",
  backgroundColor: "#511734",
  color: "#F1E8E8",
}

const styleBtn = {
  maxWidth: "146px",
  margin: "0 auto",
  backgroundColor: "rgba(181, 52, 113, 0.4)",
}
const icons = ["chest.svg", "shoulders.svg", "biceps.svg", "legs.svg", "hit.svg", "back.svg"]

export function NewExericse() {
  const { isLoading, isError, error, isSuccess, name, setName, times, setTimes, setImage, hadnleSubmit, title } = useNewExercise()

  const errorInfo = error?.response?.data?.message

  return (
    <>
      <h1 className='title'>{title}</h1>
      <form onSubmit={hadnleSubmit} className={style.form}>
        <Input
          style={inputStyle}
          placeholder='name'
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
        />
        <Input
          style={inputStyle}
          placeholder='times'
          type='text'
          pattern='[0-9]*'
          onChange={(e) =>
            setTimes((v) => {
              return e.target.validity.valid ? e.target.value : v
            })
          }
          value={times}
        />
        <ul className={style.icons}>
          {icons.map((item) => {
            return (
              <label key={item}>
                <input className={style.checkbox} type='radio' id={item} name='icons' />
                <li
                  onClick={() => {
                    setImage(`/uploads/exercises/${item}`)
                  }}>
                  <img className={style.image} src={iconPath(item)} alt='exercise icons' />
                </li>
              </label>
            )
          })}
        </ul>
        <Button disabled={isLoading} style={styleBtn}>
          Create
        </Button>

        <span
          className={cls([style.message], {
            error: isError,
            success: isSuccess,
          })}>
          {isError ? errorInfo : isSuccess ? "упражнение добавлено" : " "}
        </span>
      </form>
    </>
  )
}
