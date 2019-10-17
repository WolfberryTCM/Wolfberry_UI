import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Register from '../Auth/Register.component';
import Login from '../Auth/Login.component';
import Alert from '../layout/Alert.component';
import Dashboard from '../dashboard/Dashboard.component';
import CreateProfile from '../profile-forms/CreateProfile.component';
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => (
<section className='container'>
  <Alert />
  <Switch>
  <Route exact path='/register' component={Register} />
  <Route exact path='/login' component={Login} />
  <PrivateRoute exact path='/dashboard' component={Dashboard} />
  <PrivateRoute exact path='/create-profile' component={CreateProfile} />
</Switch>
</section>
)


export default Routes
