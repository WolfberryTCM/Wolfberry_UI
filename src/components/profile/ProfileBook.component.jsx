import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProfileService from './book/ProfileService.component';
import ProfileStaff from './book/ProfileStaff.component';
import ProfileDate from './book/ProfileDate.component';

const ProfileBook = () => {
  return (
    <Fragment>
      <Router>
        <div>
          <h1>APPOINTMENT</h1>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="/profile/service">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile/staff">
                Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile/date">
                Date&Time
              </Link>
            </li>
          </ul>

          <Switch>
            <Route
              exact
              path="/profile/service"
              component={ProfileService}
            ></Route>
            <Route exact path="/profile/staff" component={ProfileStaff}></Route>
            <Route exact path="/profile/date" component={ProfileDate}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default ProfileBook;
