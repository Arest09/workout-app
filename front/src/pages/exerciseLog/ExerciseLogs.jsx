import { Container, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { LineWave } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

import exerciseLogService from '../../services/exerciseLog.service'

export function ExerciseLogs() {
  const { id } = useParams()

  const { data, isLoading } = useQuery(
    ['exerciseLog', id],
    () => {
      return exerciseLogService.getexerciseLog({ id })
    },
    {
      onSuccess: data => {
        console.log(data)
      },
      select: data => {
        return data.data
      }
    }
  )

  if (isLoading) {
    return <LineWave height='100' visible={true} />
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0)
  ]
  return (
    <Container>
      <Typography letterSpacing={2} sx={{ marginBottom: '10px', textTransform: 'uppercase' }}>
        {data.exercise.name}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{}}>
          <TableHead>
            <TableRow>
              <TableCell>Previous</TableCell>
              <TableCell>Repeat & weight</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
