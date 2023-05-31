import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import exerciseLogService from '../../../services/exerciseLog/exerciseLog.service'

export function useUpdateLogTime() {
  const queryClient = useQueryClient()
  const { id } = useParams()
  const {
    data,
    isLoading,
    error,
    mutate: updateLogTime
  } = useMutation(
    ({ timeId, body }) => {
      return exerciseLogService.updateTime({ timeId, body })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['exerciseLog', id])
      }
    }
  )

  return { data, isLoading, error, updateLogTime }
}
