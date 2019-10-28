import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  makeStyles
} from '@material-ui/core';

import { connect } from 'react-redux';
import { updateHours } from '../../actions/profile';

import CustomizeHours from './CustomizeHours.component';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const EditHours = ({ hours, updateHours }) => {
  const classes = useStyles();

  const { isInitial, open } = hours;

  let initialMondayData = {};
  let initialTuesdayData = {};
  let initialWednesdayData = {};
  let initialThursdayData = {};
  let initialFridayData = {};
  let initialSaturdayData = {};
  let initialSundayData = {};

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
    initialSaturdayData = {
      day: '5',
      start: '09:00',
      end: '17:00',
      check: false
    };
    initialSundayData = {
      day: '6',
      start: '09:00',
      end: '17:00',
      check: false
    };
  } else {
    initialMondayData = open.filter(hour => hour.day === '0')[0];
    initialTuesdayData = open.filter(hour => hour.day === '1')[0];
    initialWednesdayData = open.filter(hour => hour.day === '2')[0];
    initialThursdayData = open.filter(hour => hour.day === '3')[0];
    initialFridayData = open.filter(hour => hour.day === '4')[0];
    initialSaturdayData = open.filter(hour => hour.day === '5')[0];
    initialSundayData = open.filter(hour => hour.day === '6')[0];
  }

  const [mondayData, setMondayData] = useState(initialMondayData);
  const [tuesdayData, setTuesdayData] = useState(initialTuesdayData);
  const [wednesdayData, setWednesdayData] = useState(initialWednesdayData);
  const [thursdayData, setThursdayData] = useState(initialThursdayData);
  const [fridayData, setFridayData] = useState(initialFridayData);
  const [saturdayData, setSaturdayData] = useState(initialSaturdayData);
  const [sundayData, setSundayData] = useState(initialSundayData);

  const formData = {
    hours: {
      isInitial: false,
      hours_type: 'REGULAR',
      open: [
        mondayData,
        tuesdayData,
        wednesdayData,
        thursdayData,
        fridayData,
        saturdayData,
        sundayData
      ]
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
  const handleSaturdayChange = e => {
    setSaturdayData({ ...saturdayData, [e.target.name]: e.target.value });
  };
  const handleSundayChange = e => {
    setSundayData({ ...sundayData, [e.target.name]: e.target.value });
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
  const handleSaturdayCheck = e => {
    setSaturdayData({ ...saturdayData, [e.target.name]: e.target.checked });
  };
  const handleSundayCheck = e => {
    setSundayData({ ...sundayData, [e.target.name]: e.target.checked });
  };

  return (
    <Fragment>
      <Paper>
        <Table aria-label="caption table">
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
            <CustomizeHours
              name={'Saturday'}
              hours={saturdayData}
              handleChange={handleSaturdayChange}
              handleCheck={handleSaturdayCheck}
            ></CustomizeHours>
            <CustomizeHours
              name={'Sunday'}
              hours={sundayData}
              handleChange={handleSundayChange}
              handleCheck={handleSundayCheck}
            ></CustomizeHours>
          </TableBody>
        </Table>
      </Paper>
      <div style={{ textAlign: 'center' }}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
          onClick={e => onSubmit(formData)}
        >
          Save
        </Button>
        <Link to="/dashboard">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="small"
          >
            Go Back
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  hours: state.profile.profile.hours
});

export default connect(
  mapStateToProps,
  { updateHours }
)(EditHours);
