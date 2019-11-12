import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import InnerBookService from './innerbookbook/innerBookService.component';
import InnerBookStaff from './innerbookbook/innerBookStaff.component';
import InnerBookDate from './innerbookbook/innerBookDate.component';
import InnerBookDetail from './innerbookbook/innerBookDetail.component';

const innerBookBook = () => {
  return (
    <Fragment>
      <Router>
        <div>
          <h1>APPOINTMENT</h1>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="/innerbookbook/service">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/innerbookbook/staff">
                Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/innerbookbook/date">
                Date&Time
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/innerbookbook/detail">
                Detail
              </Link>
            </li>
          </ul>

          <Switch>
            <Route
              exact
              path="/innerbookbook/service"
              component={InnerBookService}
            ></Route>
            <Route
              exact
              path="/innerbookbook/staff"
              component={InnerBookStaff}
            ></Route>
            <Route
              exact
              path="/innerbookbook/date"
              component={InnerBookDate}
            ></Route>
            <Route
              exact
              path="/innerbookbook/detail"
              component={InnerBookDetail}
            ></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default innerBookBook;
