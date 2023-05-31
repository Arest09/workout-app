import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

import exerciseService from '../../services/exercise/exercise.service'

import { useLayout } from '../../context/LayoutContext'

export function useNewExercise() {
  const { title } = useLayout()
  const [name, setName] = useState('')
  const [times, setTimes] = useState('')
  const [image, setImage] = useState('')

  const { mutate, isLoading, isError, error, isSuccess, data } = useMutation(
    data => {
      return exerciseService.createExercise(data)
    },
    {
      onSuccess: () => {
        setName('')
        setTimes('')
      },
      onError: error => {
        console.log(error, 'bad')
      }
    }
  )

  const hadnleSubmit = e => {
    e.preventDefault()
    mutate({ name, times, image })
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
    times,
    setTimes,
    image,
    setImage,
    hadnleSubmit,
    title
  }
}
