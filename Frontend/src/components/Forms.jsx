/* eslint-disable no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { saveEmployee } from '../services/useFetch';

export default function Forms() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValue = {
    firstname: '',
    lastname: '',
    address: '',
    phone: '',
    email: '',
    position: '',
    city: '',
    area: '',
  };

  const [employee, setEmployee] = React.useState(initialValue);

  const captureData = (e) => {
    const {name, value} = e.target;
    setEmployee({...employee, [name]: value});
    console.log(employee);
  };

  const saveData = async(e) => {
    e.preventDefault();
    console.log(employee);

    const newEmployee = {
      firstname: employee.firstname,
      lastname: employee.lastname,
      address: employee.address,
      phone: employee.phone,
      email: employee.email,
      position: employee.position,
      city: employee.city,
      area: employee.area,
    };

    saveEmployee("http://localhost:8080/api/employees", newEmployee);

    setEmployee(initialValue);

  };


  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New employee</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={saveData}>
            <TextField
              autoFocus
              margin="dense"
              id="firstname"
              label="firstname"
              type="text"
              fullWidth
              variant="standard"
              name="firstname"
              value={employee.firstname}
              onChange={captureData}
            />
            <TextField
              autoFocus
              margin="dense"
              id="lastname"
              label="lastname"
              type="text"
              fullWidth
              variant="standard"
              name="lastname"
              value={employee.lastname}
              onChange={captureData}
            />
            <TextField
              autoFocus
              margin="dense"
              id="address"
              label="address"
              type="text"
              fullWidth
              variant="standard"
              name="address"
              value={employee.address}
              onChange={captureData}
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="phone"
              type="text"
              fullWidth
              variant="standard"
              name="phone"
              value={employee.phone}
              onChange={captureData}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="email"
              type="email"
              fullWidth
              variant="standard"
              name="email"
              value={employee.email}
              onChange={captureData}
            />
            <TextField
              autoFocus
              margin="dense"
              id="city"
              label="city"
              type="text"
              fullWidth
              variant="standard"
              name="city"
              value={employee.city}
              onChange={captureData}
            />

            <FormControl fullWidth sx={{mt: 2}}>
              <InputLabel id="position">Position</InputLabel>
              <Select
                labelId="position"
                id="position"
                label="position"
                name="position"
                value={employee.position}
                onChange={captureData}
              >
                <MenuItem value={'manager'}>Manager</MenuItem>
                <MenuItem value={'director'}>Director</MenuItem>
                <MenuItem value={'teamLeader'}>Team Leader</MenuItem>
                <MenuItem value={'operator'}>Operator</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{mt: 2}}>
              <InputLabel id="area">Area</InputLabel>
              <Select
                labelId="area"
                id="area"
                label="area"
                name="area"
                value={employee.area}
                onChange={captureData}
              >
                <MenuItem value={'sales'}>Sales</MenuItem>
                <MenuItem value={'it'}>It</MenuItem>
                <MenuItem value={'marketing'}>Marketing</MenuItem>
                <MenuItem value={'accountancy'}>Accountancy</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="success" type='submit' onClick={handleClose} endIcon={<SendIcon />}>Success</Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}