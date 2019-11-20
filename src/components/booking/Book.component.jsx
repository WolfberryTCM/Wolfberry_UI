import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookTop from "./BookTop.component";
import BookBook from "./BookBook.component";
import BookReviews from "./BookReviews.component";
import BookContact from "./BookContact.component";

const Book = props => {
  const { businessInfo } = props.location;
  return (
    <Fragment>
      <Router>
        <div>
          <BookTop businessInfo={businessInfo}></BookTop>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="/bookbook">
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookreviews">
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookcontact">
                Contact
              </Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/bookbook" component={BookBook}></Route>
            <Route exact path="/bookreviews" component={BookReviews}></Route>
            <Route exact path="/bookcontact" component={BookContact}></Route>
          </Switch>
        </div>

        <Fragment></Fragment>
      </Router>
    </Fragment>
  );
};

Book.propTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProp = state => ({
  loading: state.book.loading
});

export default connect(mapStateToProp)(Book);
