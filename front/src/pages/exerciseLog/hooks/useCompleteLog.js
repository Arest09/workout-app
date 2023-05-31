import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import exerciseLogService from '../../../services/exerciseLog/exerciseLog.service'

export function useCompleteLog() {
  const queryClient = useQueryClient()
  const { id } = useParams()
  const {
    data,
    isLoading,
    error,
    mutate: completeLog
  } = useMutation(
    ({ isCompleted }) => {
      return exerciseLogService.complete({id, isCompleted})
    },
    {
      onSuccess: () => {
        console.log("ss")
        queryClient.invalidateQueries(['exerciseLog', id])
      }
    }
  )

  return { data, isLoading, error, completeLog }
}
