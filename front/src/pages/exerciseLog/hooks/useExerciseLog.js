import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import exerciseLogService from '../../../services/exerciseLog.service'

import { useUpdateLogTime } from './useUpdateLogTime'

export function useExerciseLog() {
  const [times, setTimes] = useState([])
  const { error, updateLogTime } = useUpdateLogTime()

  const { id } = useParams()
  const {
    data: exerciseLog,
    isLoading,
    isSuccess
  } = useQuery(
    ['exerciseLog', id],
    () => {
      return exerciseLogService.getexerciseLog({ id })
    },
    {
      onSuccess: data => {
        data?.times?.length ? setTimes(data.times) : ' '
      },
      select: exerciseLog => {
        return exerciseLog.data
      }
    }
  )

  const onChangeState = (timeId, key, value) => {
    const newTimes = times.map(time => {
      if (time.id === timeId) {
        return { ...time, [key]: value }
      }

      return time
    })

    setTimes(newTimes)
  }

  const getTime = timeId => {
    return times.find(time => time.id === timeId)
  }

  const getState = (timeId, key) => {
    const time = getTime(timeId)
    const result = time ? time[key] : key === 'isCompleted' ? false : 0
    return result
  }

  const toggleTime = (timeId, isCompleted) => {
    const time = getTime(timeId)
    updateLogTime({
      timeId,
      body: {
        isCompleted,
        repeat: +time.repeat,
        weight: +time.weight
      }
    })
  }

  return { exerciseLog, isLoading, times, setTimes, onChangeState, getTime, getState, toggleTime, isSuccess }
}
