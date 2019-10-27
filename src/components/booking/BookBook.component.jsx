import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BookService from './bookbook/BookService.component';
import BookStaff from './bookbook/BookStaff.component';
import BookDate from './bookbook/BookDate.component';
import BookDetail from './bookbook/BookDetail.component';

const BookBook = () => {
  return (
    <Fragment>
      <Router>
        <div>
          <h1>APPOINTMENT</h1>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="/bookbook/service">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookbook/staff">
                Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookbook/date">
                Date&Time
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookbook/detail">
                Detail
              </Link>
            </li>
          </ul>

          <Switch>
            <Route
              exact
              path="/bookbook/service"
              component={BookService}
            ></Route>
            <Route exact path="/bookbook/staff" component={BookStaff}></Route>
            <Route exact path="/bookbook/date" component={BookDate}></Route>
            <Route exact path="/bookbook/detail" component={BookDetail}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default BookBook;
