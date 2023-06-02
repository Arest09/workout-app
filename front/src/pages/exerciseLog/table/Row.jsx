import TableBody from '@mui/material/TableBody'

import { RowItem } from './RowItem'

export function Row({ exerciseLog, onChangeTime, onChangeState, getState, toggleTime, handleComplete }) {
  const times = exerciseLog.times
  const workoutLogId  = exerciseLog.workoutLogId
  times.sort((a, b) => a.id - b.id)

  return (
    <TableBody>
      {times.map(row => (
        <RowItem
          row={row}
          onChangeTime={onChangeTime}
          onChangeState={onChangeState}
          getState={getState}
          toggleTime={toggleTime}
          handleComplete={handleComplete}
          workoutLogId={workoutLogId}
        />
      ))}
    </TableBody>
  )
}
