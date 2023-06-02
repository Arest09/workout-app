import { useEffect, useState } from 'react'

import { useWorkoutLog } from './useWorkoutLog'
import { useParams } from 'react-router-dom'

export function useWorkoutLogTitle() {
  const {id} = useParams()
  const [title, setTitle] = useState('')

  const { data, isSuccess } = useWorkoutLog(id)

  useEffect(() => {
    if (isSuccess) {
      setTitle(data.workout.name)
    }
  }, [data])

  return { title }
}
