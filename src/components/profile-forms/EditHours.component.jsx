import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

import { connect } from 'react-redux';
import { updateHours } from '../../actions/profile';

import CustomizeHours from './CustomizeHours.component';

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
          <CustomizeHours
            name={'Monday'}
            hours={mondayData}
            handleChange={handleMondayChange}
            handleCheck={handleMondayCheck}
          ></CustomizeHours>
          <CustomizeHours
            name={'Tuesday'}
            hours={tuesdayData}
            handleChange={handleTuesdayChange}
            handleCheck={handleTuesdayCheck}
          ></CustomizeHours>
          <CustomizeHours
            name={'Wednesday'}
            hours={wednesdayData}
            handleChange={handleWednesdayChange}
            handleCheck={handleWednesdayCheck}
          ></CustomizeHours>
          <CustomizeHours
            name={'Thursday'}
            hours={thursdayData}
            handleChange={handleThursdayChange}
            handleCheck={handleThursdayCheck}
          ></CustomizeHours>
          <CustomizeHours
            name={'Friday'}
            hours={fridayData}
            handleChange={handleFridayChange}
            handleCheck={handleFridayCheck}
          ></CustomizeHours>
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
