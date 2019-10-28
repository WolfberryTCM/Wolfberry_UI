import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';

const CustomizeHours = ({ name, hours, handleChange, handleCheck }) => {
  return (
    <TableRow key={hours.day}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">
        <TextField
          type="time"
          name="start"
          value={hours.start}
          onChange={e => handleChange(e)}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          type="time"
          name="end"
          value={hours.end}
          onChange={e => handleChange(e)}
        />
      </TableCell>
      <TableCell align="right">
        <Checkbox
          name="check"
          value={hours.check}
          checked={hours.check}
          onChange={e => handleCheck(e)}
        />
      </TableCell>
    </TableRow>
  );
};

export default CustomizeHours;
