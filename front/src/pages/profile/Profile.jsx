import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import userService from "../../services/user.service"
import style from './Profile.module.scss'
import { LineWave } from "react-loader-spinner"
import { Counter } from "../../components/ui/counter/Counter"
import { useQueryClient } from "@tanstack/react-query"
import Cookies from "js-cookie"

export function Profile() {
  


  const profile = useQuery(["pofile",Cookies.get('token')], userService.getProfile, {
    onSuccess: (profile) => {
     
    },
    select: (profile) => {
      return profile.data
    },
  })

  if (profile.isLoading) {
    return <LineWave height='100' visible={true}/>
  }

  if (profile.isError) {
    return <div>isError</div>
  }

  return (
    <>
      <h1 className={style.user}> {profile.data.name}</h1>
      <Counter/>
    </>
  )
}
