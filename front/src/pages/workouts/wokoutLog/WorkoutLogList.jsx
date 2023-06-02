import { Box, Button, Container, List, Typography } from '@mui/material'
import { LineWave } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import { useWorkoutLog } from '../hooks/useWorkoutLog.js'
import { useWorkoutLogTitle } from '../hooks/useWorkoutLogTitle.js'

import { checkCompleted } from '../../exerciseLog/helper/checkCompleted.js'

import { WorkoutLogItem } from './WorkoutLogItem'

export function WorkoutLogList({ workoutLogTitle }) {
  const { id } = useParams()

  const { data, isLoading, mutate } = useWorkoutLog()

  const { title } = useWorkoutLogTitle()

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
      <Button
        onClick={() => {
          mutate({ id, isCompleted: true })
        }}
        disabled={!checkCompleted(data.exerciseLogs)}
        sx={{
          width: '100%',
          marginTop: '10px',
          backgroundColor: '#B53471',
          color: 'black',
          ':hover': {
            backgroundColor: '#B53471'
          }
        }}>
        Завершить тренировку
      </Button>
    </Container>
  )
}
