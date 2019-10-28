import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from '@material-ui/pickers';

const CustomizeHours = ({ time, handleChange }) => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date(`2014-08-18T${time}`)
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        margin="normal"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change time'
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default CustomizeHours;
