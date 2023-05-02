import { List } from '@mui/material'
import React from 'react'
import { LineWave } from 'react-loader-spinner'

import { WorkoutItem } from './WorkoutItem'
import { useWorkouts } from './useWorkouts'

export function WorkoutList() {
  const { workout, isLoading, mutate } = useWorkouts()

  if (isLoading) {
    return <LineWave height='100' visible={true} />
  }

  return (
    <List>
      {workout.map(item => {
        return <WorkoutItem item={item} mutate={mutate} />
      })}
    </List>
  )
}
