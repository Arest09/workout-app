import { useMutation } from '@tanstack/react-query'
import { createContext, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { useWorkoutLog } from '../../hooks/useWorkoutLog'

import workoutLogService from '../../../../services/workoutLog/workoutLog.service'

export const WorkoutLogContext = createContext(null)

export const useWorkotLogContext = () => {
  return useContext(WorkoutLogContext)
}

export function WorkoutLogProvider({ children }) {
  const { mutate } = useMutation(({ id, isCompleted }) => {
    return workoutLogService.completeWorkoutLog({ id, isCompleted })
  })
  const handleWorkoutComplete = id => {
    console.log(id, 's')
    mutate({ id, isCompleted: false })
  }

  return <WorkoutLogContext.Provider value={{ handleWorkoutComplete }}>{children}</WorkoutLogContext.Provider>
}
