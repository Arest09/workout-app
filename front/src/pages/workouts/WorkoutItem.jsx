import { CardContent, ListItem, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import React from 'react'

export function WorkoutItem({ item, mutate }) {
  return (
    <ListItem key={item.id}>
      <Card sx={{ margin: '0 auto', marginBottom: '10px', height: '50px', flexGrow: '1' }}>
        <CardContent>
          <Typography
            onClick={() => {
              mutate({ id: item.id })
            }}>
            {item.name}
          </Typography>
        </CardContent>
      </Card>
    </ListItem>
  )
}
