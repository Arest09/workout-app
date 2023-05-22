import { useEffect, useState } from 'react'

import { useWorkoutLog } from './useWorkoutLog'

export function useWorkoutLogTitle(id) {
  const [title, setTitle] = useState('')

  const { data, isSuccess } = useWorkoutLog(id)

  useEffect(() => {
    if (isSuccess) {
      setTitle(data.workout.name)
    }
  }, [data])

  return { title }
}
