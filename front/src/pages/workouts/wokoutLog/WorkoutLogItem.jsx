import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { iconPath } from '../../new-exercise/icon.path.utils'

export function WorkoutLogItem() {
  return (
    <Link to={`/exercise/${item.id}`} key={item.id}>
      <ListItem sx={{ backgroundColor: '#511734', borderRadius: '5px', marginBottom: '15px' }} key={item.id}>
        <ListItemText key={item.exercise.id}>{item.exercise.name}</ListItemText>
        <ListItemIcon>
          <img src={`${iconPath(item.exercise.iconPath.split('/')[3])}`} />
        </ListItemIcon>
      </ListItem>
    </Link>
  )
}
