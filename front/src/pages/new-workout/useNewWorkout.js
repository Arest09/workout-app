import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

import workoutService from '../../services/workout/workout.service'

import { useLayout } from '../../context/LayoutContext'

import { useListExercises } from './useListExercises'

export function useNewWorkout() {
  const { title } = useLayout()
  const [name, setName] = useState('')
  let [userChoice, setUserChoice] = useState([])

  const { exercises = [] } = useListExercises()

  let options = exercises.map(item => {
    return { value: item.id, label: item.name }
  })

  const { mutate, isLoading, isError, error, isSuccess, data } = useMutation(
    data => {
      return workoutService.createworkout(data)
    },
    {
      onSuccess: () => {
        setName('')
        setUserChoice([])
      },
      onError: error => {
        console.log(error, 'bad')
      }
    }
  )

  const hadnleSubmit = e => {
    e.preventDefault()
    mutate({
      name,
      exerciseId: userChoice.map(item => item.value)
    })
  }

  return {
    mutate,
    isLoading,
    isError,
    error,
    isSuccess,
    data,
    name,
    setName,
    hadnleSubmit,
    title,
    userChoice,
    setUserChoice,
    options
  }
}
