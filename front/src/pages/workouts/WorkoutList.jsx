import { List } from '@mui/material'
import React from 'react'
import { LineWave } from 'react-loader-spinner'

import { useWorkouts } from './hooks/useWorkouts.js'

import { WorkoutItem } from './WorkoutItem'

export function WorkoutList() {
  const { workout, isLoading, mutate } = useWorkouts()

  if (isLoading) {
    return <LineWave height='100' visible={true} />
  }

  return (
    <List>
      {workout.map(item => {
        return <WorkoutItem key={item.id} item={item} mutate={mutate} />
      })}
    </List>
  )
}
