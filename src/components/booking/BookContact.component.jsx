import React, { Fragment } from "react";
import { connect } from "react-redux";

const BookContact = ({ detail, loading }) => {
  const { display_phone, location, hours } = detail;
  const { display_address } = location;
  return (
    <Fragment>
      {loading === false && (
        <div>
          <div>{display_phone}</div>
          <div>
            {display_address[0]}
            {display_address[1]}
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  detail: state.book.detail,
  loading: state.book.loading
});

export default connect(mapStateToProps)(BookContact);
