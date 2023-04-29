import { CardContent, List, ListItem, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { LineWave } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

import workoutLogService from '../../services/workoutLog.service'

export function WorkoutLogs() {
  const { data: workoutLog, isLoading } = useQuery(['workoutLogs'], workoutLogService.getAllWorkout, {
    onSuccess: data => {
      
    }
  })

  if (isLoading) {
    return <LineWave height='100' visible={true} />
  }

  return (
    <List>
      {workoutLog.data.map(item => {
        return (
          <ListItem>
            <Card sx={{ margin: '0 auto', marginBottom: '10px', height: '50px',flexGrow:'1' }}>
              <CardContent>
                <Link to={`${item.id}`}>
                  <Typography>{item.workout.name}</Typography>
                </Link>
              </CardContent>
            </Card>
          </ListItem>
        )
      })}
    </List>
  )
}
