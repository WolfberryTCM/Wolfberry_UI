import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import Register from '../Auth/Register.component';
import Login from '../Auth/Login.component';
import Alert from '../layout/Alert.component';
import Dashboard from '../dashboard/Dashboard.component';
import CreateProfile from '../profile-forms/CreateProfile.component';
import EditProfile from '../profile-forms/EditProfile.component';
import EditService from '../profile-forms/EditService.component'
import EditStaff from '../profile-forms/EditStaff.component'
import EditHours from '../profile-forms/EditHours.component'

import Search from '../search/Search.component';
import Profile from '../profile/Profile.component';
import Book from '../booking/Book.component';

const Routes = () => (
  <section className="container">
    <Alert />
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/booking" component={Book} />
      <Route exact path="/profile/:id" component={Profile} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/create-profile" component={CreateProfile} />
      <PrivateRoute exact path="/edit-profile" component={EditProfile} />
      <PrivateRoute exact path="/edit-service" component={EditService} />
      <PrivateRoute exact path="/edit-staff" component={EditStaff} />
      <PrivateRoute exact path="/edit-hours" component={EditHours} />
    </Switch>
  </section>
);

export default Routes;
