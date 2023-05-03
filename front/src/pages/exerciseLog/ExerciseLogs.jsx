import { Container, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { LineWave } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import exerciseLogService from '../../services/exerciseLog.service'

import { TableLog } from './table/TableLog'

export function ExerciseLogs() {
  const { id } = useParams()

  const { data: exerciseLog, isLoading } = useQuery(
    ['exerciseLog', id],
    () => {
      return exerciseLogService.getexerciseLog({ id })
    },
    {
      onSuccess: data => {
        console.log(data)
      },
      select: exerciseLog => {
        return exerciseLog.data
      }
    }
  )

  if (isLoading) {
    return <LineWave height='100' visible={true} />
  }

  return (
    <Container>
      <Typography letterSpacing={2} sx={{ marginBottom: '10px', textTransform: 'uppercase' }}>
        {exerciseLog.exercise.name}
      </Typography>
      <TableLog exerciseLog={exerciseLog} />
    </Container>
  )
}
