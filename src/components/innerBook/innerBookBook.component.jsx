import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import InnerBookService from "./innerbookbook/innerBookService.component";
import InnerBookStaff from "./innerbookbook/innerBookStaff.component";
import InnerBookDate from "./innerbookbook/innerBookDate.component";
import InnerBookDetail from "./innerbookbook/innerBookDetail.component";

const innerBookBook = props => {
  const { profile } = props.location;

  return (
    <Fragment>
      <Router>
        <div>
          <h1>APPOINTMENT</h1>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: "/innerbookbook/service",
                  profile: profile
                }}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: "/innerbookbook/staff",
                  profile: profile
                }}
              >
                Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: "/innerbookbook/date",
                  profile: profile
                }}
              >
                Date&Time
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: "/innerbookbook/detail",
                  profile: profile
                }}
              >
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
