  import { useMutation, useQueryClient } from '@tanstack/react-query'
  import { useParams } from 'react-router-dom'

  import exerciseLogService from '../../../services/exerciseLog.service'

  export function useCompleteLog() {
    const queryClient = useQueryClient()
    const { id } = useParams()
    const {
      data,
      isLoading,
      error,
      mutate: completeLog
    } = useMutation(
      () => {
        return exerciseLogService.complete({ id, body })
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['exerciseLog', id])
        }
      }
    )

    return { data, isLoading, error, completeLog }
  }
