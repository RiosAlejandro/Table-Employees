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
            <TableCell>Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Area</TableCell>
            <TableCell align="right"> </TableCell>
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
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.area}</TableCell>
              <TableCell align="right"> <Options id={row.id}/> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      }
    </TableContainer>
  );
}