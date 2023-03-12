import React from "react"
import { useQuery } from "@tanstack/react-query"
import userService from "../../../services/user.service"
import style from './Counter.module.scss'
import cn from "classnames"


export function Counter() {
  const counter = useQuery(["pofile", "get"], userService.getProfile, {
    onSuccess: (data) => {
      console.log(data)
    },
    select: (profile) => {
      return profile.data.statistics
    },
  })

  if (counter.isLoading) {
    return <LineWave height='100' visible={true} />
  }

  if (counter.isError) {
    return <div>isError</div>
  }

  return (
    <ul className={style.wrapper}>
      {counter.data.map((item) => {
        return (
          <li className={style.list} key={item.label}>
            <span className={cn(style.info,style.dark)}>{item.label}</span>
            <span className={style.info}>{item.value}</span>
          </li>
        )
      })}
    </ul>
  )
}
