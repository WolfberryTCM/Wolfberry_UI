import React, { useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { getAllAppointments } from "../../actions/appointment";

const Appointment = ({ appointments, loading, getAllAppointments }) => {
  useEffect(() => {
    getAllAppointments();
  }, []);
  const { title } = appointments;

  return (
    <div>
      {!loading && (
        <div>
          {appointments.map((appointment, index) => (
            <div key={index}>{appointment.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  appointments: state.appointments.appointments,
  loading: state.appointments.loading
});
export default connect(mapStateToProps, { getAllAppointments })(Appointment);
