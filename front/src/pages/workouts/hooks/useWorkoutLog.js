import { useQuery } from '@tanstack/react-query'

import workoutLogService from '../../../services/workoutLog/workoutLog.service'

export function useWorkoutLog(id) {
  const { data, isLoading, isSuccess } = useQuery(
    ['workoutLog', id],
    () => {
      return workoutLogService.getWorkoutLog({ id })
    },
    {
      onSuccess: data => {},
      select: data => {
        return data.data
      }
    }
  )

  return { data, isLoading, isSuccess }
}
