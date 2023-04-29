import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useEffect } from 'react'
import { LineWave } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import { iconPath } from '../new-exercise/icon.path.utils'

import { useWorkoutLog } from './useWorkoutLog'
import { useWorkoutLogTitle } from './useWorkoutLogTitle'

export function WorkoutLog({ workoutLogTitle }) {
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
        {data.workout.exercises.map(item => {
          return (
            <ListItem sx={{ backgroundColor: '#511734', borderRadius: '5px', marginBottom: '15px' }}>
              <ListItemText key={item.id}>{item.name}</ListItemText>
              <ListItemIcon>
                <img src={`${iconPath(item.iconPath.split('/')[3])}`} />
              </ListItemIcon>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
