import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import { connect } from 'react-redux';
import { updateHours } from '../../actions/profile';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
}));

const EditHours = ({ hours, updateHours }) => {
  const { isInitial, open } = hours;

  let initialMondayData = {};
  let initialTuesdayData = {};
  let initialWednesdayData = {};
  let initialThursdayData = {};
  let initialFridayData = {};

  if (isInitial) {
    initialMondayData = {
      day: '0',
      start: '09:00',
      end: '17:00',
      check: true
    };
    initialTuesdayData = {
      day: '1',
      start: '09:00',
      end: '17:00',
      check: true
    };
    initialWednesdayData = {
      day: '2',
      start: '09:00',
      end: '17:00',
      check: true
    };
    initialThursdayData = {
      day: '3',
      start: '09:00',
      end: '17:00',
      check: true
    };
    initialFridayData = {
      day: '4',
      start: '09:00',
      end: '17:00',
      check: true
    };
  } else {
    initialMondayData = open.filter(hour => hour.day === '0')[0];
    initialTuesdayData = open.filter(hour => hour.day === '1')[0];
    initialWednesdayData = open.filter(hour => hour.day === '2')[0];
    initialThursdayData = open.filter(hour => hour.day === '3')[0];
    initialFridayData = open.filter(hour => hour.day === '4')[0];
  }

  const [mondayData, setMondayData] = useState(initialMondayData);
  const [tuesdayData, setTuesdayData] = useState(initialTuesdayData);
  const [wednesdayData, setWednesdayData] = useState(initialWednesdayData);
  const [thursdayData, setThursdayData] = useState(initialThursdayData);
  const [fridayData, setFridayData] = useState(initialFridayData);

  const formData = {
    hours: {
      isInitial: false,
      hours_type: 'REGULAR',
      open: [mondayData, tuesdayData, wednesdayData, thursdayData, fridayData]
    }
  };
  const onSubmit = e => {
    console.log(formData);
    updateHours(formData);
  };

  const handleMondayChange = e => {
    setMondayData({ ...mondayData, [e.target.name]: e.target.value });
  };
  const handleTuesdayChange = e => {
    setTuesdayData({ ...tuesdayData, [e.target.name]: e.target.value });
  };
  const handleWednesdayChange = e => {
    setWednesdayData({ ...wednesdayData, [e.target.name]: e.target.value });
  };
  const handleThursdayChange = e => {
    setThursdayData({ ...thursdayData, [e.target.name]: e.target.value });
  };
  const handleFridayChange = e => {
    setFridayData({ ...fridayData, [e.target.name]: e.target.value });
  };
  const handleMondayCheck = e => {
    setMondayData({ ...mondayData, [e.target.name]: e.target.checked });
  };
  const handleTuesdayCheck = e => {
    setTuesdayData({ ...tuesdayData, [e.target.name]: e.target.checked });
  };
  const handleWednesdayCheck = e => {
    setWednesdayData({ ...wednesdayData, [e.target.name]: e.target.checked });
  };
  const handleThursdayCheck = e => {
    setThursdayData({ ...thursdayData, [e.target.name]: e.target.checked });
  };
  const handleFridayCheck = e => {
    setFridayData({ ...fridayData, [e.target.name]: e.target.checked });
  };

  return (
    <Paper>
      <Table aria-label="caption table">
        <caption>A barbone structure table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Day </TableCell>
            <TableCell align="right">Start</TableCell>
            <TableCell align="right">End</TableCell>
            <TableCell align="right">Checked</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow key="Monday">
            <TableCell component="th" scope="row">
              Monday
            </TableCell>
            <TableCell align="right">
              <TextField
                type="time"
                name="start"
                value={mondayData.start}
                onChange={e => handleMondayChange(e)}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                type="time"
                name="end"
                value={mondayData.end}
                onChange={e => handleMondayChange(e)}
              />
            </TableCell>
            <TableCell align="right">
              <Checkbox
                name="check"
                value={mondayData.check}
                checked={mondayData.check}
                onChange={e => handleMondayCheck(e)}
              />
            </TableCell>
          </TableRow>
          <TableRow key="Tuesday">
            <TableCell component="th" scope="row">
              Tuesday
            </TableCell>
            <TableCell align="right">
              <TextField
                type="time"
                name="start"
                value={tuesdayData.start}
                onChange={e => handleTuesdayChange(e)}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                type="time"
                name="end"
                value={tuesdayData.end}
                onChange={e => handleTuesdayChange(e)}
              />
            </TableCell>
            <TableCell align="right">
              <Checkbox
                name="check"
                checked={tuesdayData.check}
                value={tuesdayData.check}
                onChange={e => handleTuesdayCheck(e)}
              />
            </TableCell>
          </TableRow>
          <TableRow key="Wednesday">
            <TableCell component="th" scope="row">
              Wednesday
            </TableCell>
            <TableCell align="right">
              <TextField
                type="time"
                name="start"
                value={wednesdayData.start}
                onChange={e => handleWednesdayChange(e)}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                type="time"
                name="end"
                value={wednesdayData.end}
                onChange={e => handleWednesdayChange(e)}
              />
            </TableCell>
            <TableCell align="right">
              <Checkbox
                name="check"
                checked={wednesdayData.check}
                value={wednesdayData.check}
                onChange={e => handleWednesdayCheck(e)}
              />
            </TableCell>
          </TableRow>
          <TableRow key="Thursday">
            <TableCell component="th" scope="row">
              Thursday
            </TableCell>
            <TableCell align="right">
              <TextField
                type="time"
                name="start"
                value={thursdayData.start}
                onChange={e => handleThursdayChange(e)}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                type="time"
                name="end"
                value={thursdayData.end}
                onChange={e => handleThursdayChange(e)}
              />
            </TableCell>
            <TableCell align="right">
              <Checkbox
                name="check"
                checked={thursdayData.check}
                value={thursdayData.check}
                onChange={e => handleThursdayCheck(e)}
              />
            </TableCell>
          </TableRow>
          <TableRow key="Monday">
            <TableCell component="th" scope="row">
              Friday
            </TableCell>
            <TableCell align="right">
              <TextField
                type="time"
                name="start"
                value={fridayData.start}
                onChange={e => handleFridayChange(e)}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                type="time"
                name="end"
                value={fridayData.end}
                onChange={e => handleFridayChange(e)}
              />
            </TableCell>
            <TableCell align="right">
              <Checkbox
                name="check"
                checked={fridayData.check}
                value={fridayData.check}
                onChange={e => handleFridayCheck(e)}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        onClick={e => onSubmit(formData)}
      >
        Save
      </Button>
      <Button variant="contained" color="primary" size="small">
        Go Back
      </Button>
    </Paper>
  );
};

const mapStateToProps = state => ({
  hours: state.profile.profile.hours
});

export default connect(
  mapStateToProps,
  { updateHours }
)(EditHours);
