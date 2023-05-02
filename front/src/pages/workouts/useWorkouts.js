import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import workoutService from '../../services/workout.service'
import workoutLogService from '../../services/workoutLog.service'

export function useWorkouts() {
  const navigate = useNavigate()
  const { data: workout, isLoading } = useQuery(['workoutLogs'], workoutService.getAllworkout, {
    onSuccess: data => {},
    select: data => {
      return data.data
    }
  })

  const { mutate, data: workoutLog } = useMutation(workoutLogService.createWorkoutLog, {
    select: data => {
      return data.data
    },
    onSuccess: data => {
      navigate(`${data.data.id}`)
    }
  })

  return {
    workout,
    isLoading,
    mutate,
    workoutLog
  }
}
