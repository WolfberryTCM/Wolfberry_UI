import React, { Fragment, useState } from "react";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const InnerBookDate = props => {
  const classes = useStyles();

  const { profile } = props.location;

  const { hours } = profile;
  const { isInitial, open } = hours;
  const getRestDays = () => {
    let restDays = [];
    open.forEach(day => {
      if (!day.check) restDays.push(parseInt(day.day));
    });
    return restDays;
  };
  const rest = getRestDays();
  const [date, setDate] = useState("");
  const options = {
    inline: true,
    minDate: "today",
    maxDate: new Date().fp_incr(30),
    disable: [
      function(date) {
        // return true to disable
        return rest.includes(date.getDay());
      }
    ]
  };

  const getAvailableHours = date => {
    let weekday = date ? new Date(date).getDay() : new Date().getDay();
    if (weekday === 0) {
      weekday = 6;
    } else {
      weekday -= 1;
    }
    console.log(open[weekday].day);
    console.log(open[weekday].start);
    console.log(open[weekday].end);

    const start = parseInt(open[weekday].start);
    const end = parseInt(open[weekday].end);

    console.log("start", start);
    console.log("end", end);
    let slots = [];
    for (let i = start; i < end; i++) {
      slots.push(i);
    }
    console.log(slots);

    let timeSlots = (
      <div>
        {slots.map((slot, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {slot < 10 ? "0" + slot + ":00" : slot + ":00"}
          </Button>
        ))}
      </div>
    );
    return timeSlots;
  };

  return (
    <Fragment>
      {isInitial ? (
        <div>The doctor have not set up hours.</div>
      ) : (
        <div>
          <Flatpickr
            value={date}
            onChange={date => setDate(date)}
            options={options}
          />
        </div>
      )}
      <div>{getAvailableHours(date.toString())}</div>
    </Fragment>
  );
};

export default InnerBookDate;
