/* eslint-disable no-unused-vars */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useSearchEmployee from '../services/useFetch';
import Progress from '../components/Progress';
import Options from '../components/Options';
import AppBarComponent from '../components/AppBarComponent';

export default function Home() {

  const { data, error, loading } = useSearchEmployee("http://localhost:8080/api/employees");

  console.log(data, error, loading);


  return (
    <TableContainer component={Paper}>

      <AppBarComponent />

      {loading? 
      
      <Progress /> 
      
      : 
    
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell 
              align="left" 
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                }}
            >
              Name
            </TableCell>
            <TableCell 
              align="left"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
              }}
            >Last Name
            </TableCell>
            <TableCell 
              align="left"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
              }}
            >Address
            </TableCell>
            <TableCell align="left"
                       sx={{
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.2rem',
                        }}>Phone</TableCell>
            <TableCell align="left"
                       sx={{
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.2rem',
                        }}>Email</TableCell>
            <TableCell align="left"
                       sx={{
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.2rem',
                        }}>Position</TableCell>
            <TableCell align="left"
                       sx={{
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.2rem',
                        }}>City</TableCell>
            <TableCell align="left"
                       sx={{
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.2rem',
                        }}>Area</TableCell>
            <TableCell align="left"
                       sx={{
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.2rem',
                        }}> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="center">{row.lastname}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.position}</TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.area}</TableCell>
              <TableCell> <Options row={row} id={row.id}/> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      }
    </TableContainer>
  );
}
