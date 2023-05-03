import { TableCell } from '@mui/material'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React from 'react'

export function Head() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Previous</TableCell>
        <TableCell>Repeat & weight</TableCell>
        <TableCell>Completed</TableCell>
      </TableRow>
    </TableHead>
  )
}
