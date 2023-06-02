import { Box, Checkbox, Slider, TableRow } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import cn from 'classnames'
import { useEffect } from 'react'

import style from './Table.module.scss'
import { useWorkotLogContext } from '../../workouts/wokoutLog/context/WorkoutLogContext'

export function RowItem({ row, onChangeTime, onChangeState, getState, toggleTime, handleComplete,workoutLogId }) {
  console.log(workoutLogId)
  const {handleWorkoutComplete} = useWorkotLogContext()
  useEffect(() => {
    if(row.isCompleted === false){
        handleComplete()
        handleWorkoutComplete(workoutLogId)
    }
  }, [row.isCompleted])

  return (
    <TableRow
      onChange={onChangeTime}
      key={row.id}
      className={cn(' ', {
        [style.isCompleted]: row.isCompleted
      })}>
      <TableCell>
        <Box sx={{ maxWidth: '20px', display: 'flex', alignItems: 'center' }}>
          <input defaultValue={row.prevWeight} disabled className={style.input} />
          <span>kg</span>
          <span>/</span>
          <input defaultValue={row.prevRepeat} disabled className={style.input} style={{ textAlign: 'left' }} />
        </Box>
      </TableCell>
      <TableCell>
        <Box sx={{ maxWidth: '20px', display: 'flex', alignItems: 'center' }}>
          <input
            className={style.input}
            value={getState(row.id, 'weight')}
            onChange={e => onChangeState(row.id, 'weight', e.target.value)}
            disabled={row.isCompleted}
          />
          <span>kg</span>
          <span>/</span>
          <input
            value={getState(row.id, 'repeat')}
            onChange={e => onChangeState(row.id, 'repeat', e.target.value)}
            className={style.input}
            disabled={row.isCompleted}
            style={{ textAlign: 'left' }}
          />
        </Box>
      </TableCell>
      <TableCell>
        <Box sx={{ maxWidth: '10px' }}>
          <Checkbox
            size='small'
            checked={getState(row.id, 'isCompleted')}
            onChange={() => {
              toggleTime(row.id, !getState(row.id, 'isCompleted'))
            }}
          />
        </Box>
      </TableCell>
    </TableRow>
  )
}
