import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import InnerBookTop from './innerBookTop.component';
import InnerBookBook from './innerBookBook.component';
import InnerBookReviews from './innerBookReviews.component';
import InnerBookContact from './innerBookContact.component';

const innerBook = props => {
  const { profile } = props.location;
  return (
    <Fragment>
      <Router>
        <div>
          <InnerBookTop profile={profile}></InnerBookTop>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: '/innerbookbook',
                  profile: profile
                }}
              >
                Book
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: '/innerbookreviews',
                  profile: profile
                }}
              >
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{
                  pathname: '/innerbookcontact',
                  profile: profile
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          <Switch>
            <Route
              exact
              path="/innerbookbook"
              component={InnerBookBook}
            ></Route>
            <Route
              exact
              path="/innerbookreviews"
              component={InnerBookReviews}
            ></Route>
            <Route
              exact
              path="/innerbookcontact"
              component={InnerBookContact}
            ></Route>
          </Switch>
        </div>
        <Fragment></Fragment>
      </Router>
    </Fragment>
  );
};

export default innerBook;
