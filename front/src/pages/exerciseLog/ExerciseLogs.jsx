import { Button, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { LineWave } from 'react-loader-spinner'

import { useCompleteLog } from './hooks/useCompleteLog'
import { useExerciseLog } from './hooks/useExerciseLog'
import { useUpdateLogTime } from './hooks/useUpdateLogTime'

import { checkCompleted } from './helper/checkCompleted'
import { TableLog } from './table/TableLog'

export function ExerciseLogs() {
  const { exerciseLog, isLoading, onChangeState, getState, toggleTime, isSuccess } = useExerciseLog()
  const { completeLog, error } = useCompleteLog()
  const { updateLogTime } = useUpdateLogTime()

  if (isLoading) {
    return <LineWave height='100' visible={true} />
  }

  return (
    <Container>
      <Typography letterSpacing={2} sx={{ marginBottom: '10px', textTransform: 'uppercase' }}>
        {exerciseLog.exercise.name}
      </Typography>
      <TableLog props={{ exerciseLog, onChangeState, getState, toggleTime }} />
      <Button
        disabled={!checkCompleted(exerciseLog?.times)}
        sx={{
          width: '100%',
          marginTop: '10px',
          backgroundColor: '#B53471',
          color: 'black',
          ':hover': {
            backgroundColor: '#B53471'
          }
        }}>
        Завершить
      </Button>
    </Container>
  )
}
