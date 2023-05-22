import { Box, Container, List, Typography } from '@mui/material'
import { LineWave } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import { WorkoutLogItem } from './WorkoutLogItem'
import { useWorkoutLog } from '../hooks/useWorkoutLog.js'
import { useWorkoutLogTitle } from '../hooks/useWorkoutLogTitle.js'

export function WorkoutLogList({ workoutLogTitle }) {
  const { id } = useParams()

  const { data, isLoading } = useWorkoutLog(id)

  const { title } = useWorkoutLogTitle(id)

  if (title) {
    workoutLogTitle(title)
  }

  if (isLoading) {
    return <LineWave height='100' visible={true} />
  }

  return (
    <Container>
      <Typography>{title}</Typography>
      <Box>
        <Typography letterSpacing={2} sx={{ padding: '15px' }}>
          {data.minutes}
          <span>minutes</span>
        </Typography>
      </Box>
      <List>
        {data.exerciseLogs.map(item => {
          return <WorkoutLogItem key={item.id} item={item} />
        })}
      </List>
    </Container>
  )
}
