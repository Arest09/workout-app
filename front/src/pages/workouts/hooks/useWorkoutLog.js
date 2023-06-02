import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import workoutLogService from '../../../services/workoutLog/workoutLog.service'

export function useWorkoutLog() {
  const { id } = useParams()
  const { data, isLoading, isSuccess } = useQuery(
    ['workoutLog', id],
    () => {
      return workoutLogService.getWorkoutLog({ id })
    },
    {
      onSuccess: data => {
        console.log(data)
      },
      select: data => {
        return data.data
      }
    }
  )

  const { mutate } = useMutation(({ id, isCompleted }) => {
    return workoutLogService.completeWorkoutLog({ id, isCompleted })
  })

  return { data, isLoading, isSuccess, mutate }
}
