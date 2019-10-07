import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { Container } from 'semantic-ui-react';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar.component';
import Landing from './components/layout/Landing.component';
import Register from './components/Auth/Register.component';
import Login from './components/Auth/Login.component';
import Alert from './components/layout/Alert.component';

// const App = ({ children }) => (
//   <Provider store={store}>
//     <Container style={{ margin: 0, padding: 0 }}>{children}</Container>
//   </Provider>
// );

const App = () => (
  <Router>
    <Fragment>
      <Navbar></Navbar>
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Alert></Alert>
        <Switch>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </section>
    </Fragment>
  </Router>
);

// const styleLink = document.createElement('link');
// styleLink.rel = 'stylesheet';
// styleLink.href =
//   'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
// document.head.appendChild(styleLink);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
