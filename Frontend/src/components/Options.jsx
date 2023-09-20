/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
import { removeEmployee } from '../services/useFetch';
import FormsEdit from './FormsEdit';

export default function Options({row, id}) {

  const remove = async (id) => {
    const url = "http://localhost:8080/api/employees/" + id;
    await removeEmployee(url);
  }


  return (
    <Grid container spacing={0.5} direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6}>
            <FormsEdit data={row}/>
      </Grid>  
      <Grid item xs={6}>
          <IconButton onClick={() => remove(id)}>
            <DeleteIcon sx={{ color: red[500] }}/>
          </IconButton>
      </Grid>
    </Grid>
  );
}
