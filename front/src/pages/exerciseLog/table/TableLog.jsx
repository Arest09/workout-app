import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import React from 'react'

import { Head } from './Head'
import { Row } from './Row'

export function TableLog({ exerciseLog }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <Head />
        <Row exerciseLog={exerciseLog} />
      </Table>
    </TableContainer>
  )
}
