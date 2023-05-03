import { Box, Checkbox, TableRow } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import React from 'react'

import style from './Table.module.scss'

export function Row({ exerciseLog }) {
  return (
    <TableBody>
      {exerciseLog.times.map(row => (
        <TableRow key={row.name}>
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
              <input defaultValue={row.weight} className={style.input} />
              <span>kg</span>
              <span>/</span>
              <input defaultValue={row.repeat} className={style.input} style={{ textAlign: 'left' }} />
            </Box>
          </TableCell>
          <TableCell>
            <Box sx={{ maxWidth: '10px' }}>
              <Checkbox defaultChecked size='small' />
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
