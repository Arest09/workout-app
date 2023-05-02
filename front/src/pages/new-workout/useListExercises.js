import { useQuery } from '@tanstack/react-query'

import exerciseService from '../../services/exercise.service'

export function useListExercises() {
  const { data: exercises } = useQuery(['exercises', 'all'], exerciseService.getAllExercise, {
    onSuccess: exercises => {},
    select: exercises => {
      return exercises.data
    }
  })

  return { exercises }
}
